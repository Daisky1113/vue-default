<template lang="pug">
  v-container
    //- Snackbar(
    //-   :tec="this.currentVoteData.tec"
    //-   :ser="this.currentVoteData.service"
    //-   :name="this.currentVoteData.name")
    v-row.d-flex
      v-col(cols="12")
        v-tabs(vertical color="purple darken-3")
          div.tab-wrap
            v-tab.justify-start(v-for="vote in this.voteData" :key="'tab' + vote.name")
              v-icon(v-if="vote.is_voted") mdi-check
              v-icon(v-if="!vote.is_voted") mdi-file-document-outline
              span.ml-4 {{ vote.name }}
          v-tab-item(v-for="team in this.teamData" :key="'tab-item'+team.teamId")
            v-card(flat)
              v-card-text
                v-row
                  v-col.flex(cols="2" justify="center")
                    //- リーダーとメンバーのアバター
                    v-avatar(size="64px")
                      v-img(:src="'./img/avatars/avatar-' + team.leader.id + '.jpg'")
                    v-avatar(v-for="member in team.members" size="64px" :key="'memberId' + member.id")
                      v-img(:src="'./img/avatars/avatar-' + member.id + '.jpg'")
                  v-col(cols="10")
                    div.tab-wrap
                      p.mb-4 created by : {{ team.name }}
                      h1.mb-2 {{ team.productName }}
                      span
                        a(:href="team.url" target="blank") {{ team.url }}
                      div.mb-12.mt-4
                        v-chip.mt-2.mr-2(v-for="(topic, index) in team.tecTopix.split(',')" :key="index") {{ topic }}
                      div.mb-12
                        h2.mb-4 技術的こだわり
                        p.body-1(v-for="(p,index) in team.tecDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
                      div.mb-12
                        h2.mb-4 サービス的こだわり
                        p.body-1(v-for="(p,index) in team.serviceDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
                      v-btn(@click.stop="openForm(team.teamId)" outlined color="purple darken-3") 投票
      VoteForm(
        v-if="this.$store.state.UI.isVoteFormShow"
        :tec="this.currentVoteData.tec"
        :ser="this.currentVoteData.service"
        :name="this.currentVoteData.name")
</template>
<style>
.relative {
  position: relative;
}
.avatar-wrapper {
  position: absolute;
}
a {
  text-decoration: none;
}
.tab-wrap {
  padding-top: 12px;
  height: 80vh;
  overflow: scroll;
}
a {
  color: #ce93d8 !important ;
}
</style>
<script>
import VoteForm from "../components/VoteForm.vue";
// import Snackbar from "../components/Snackbar.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  created() {},
  computed: {
    ...mapGetters("domain", ["currentVoteData"]),
    // ...mapGetters("domain", ["teamData", "usersData"]),
    teamData() {
      return this.$store.state.domain.teams;
    },
    usersData() {
      return this.$store.state.domain.users;
    },
    voteData() {
      return this.$store.state.domain.votes;
    }
  },
  components: {
    VoteForm
    // Snackbar
  },
  methods: {
    ...mapMutations("UI", ["voteFormShow"]),
    ...mapMutations("domain", ["setCurrentTeamId"]),

    openForm(id) {
      this.setCurrentTeamId(id);
      this.voteFormShow();
    }
  }
};
</script>