<template lang="pug">
  v-container
    v-row.d-flex
      v-col(cols="12" xl="3" lg="4" md="6" sm="6" xs="12" v-for="member in this.$store.state.members" :key="member.id")
        v-card
          v-img(:src="member.thumb ? `./img/thumbs/thumb${id}.jpg` : './img/thumbs/notfound.jpg'")
          v-card-text.relative
            div.avatar-wrapper.d-flex.flex-column.justify-center
              v-avatar.mb-1(size="64")
                v-img(:src="'./img/avatars/avatar-' + member.id + '.jpg'")
              p.text-center {{ member.name }}
            v-card-title.headline Lorem Ipsum
            v-card-subtitle あれをこうしてそれをどうするアプリ
          v-card-actions
            v-row.pr-4.pb-1
              v-spacer
              v-btn(@click.stop="openForm(member.id)" outlined :color="member.is_voted ? 'deep-orange' : 'indigo'") {{ member.is_voted ? '編集' : '投票'}}
      VoteForm(:tec="this.$store.getters.currentMemberData.tecPoint" :ser="this.$store.getters.currentMemberData.servicePoint")
</template>
<style>
.relative {
  position: relative;
}
.avatar-wrapper {
  position: absolute;
  top: -27%;
  right: 4%;
}
</style>
<script>
import VoteForm from "../components/VoteForm.vue";
export default {
  components: {
    VoteForm
  },
  methods: {
    openForm(id) {
      this.$store.commit("setCurrentMemberId", id);
      this.$store.commit("openVoteForm");
      console.log();
    }
  }
};
</script>