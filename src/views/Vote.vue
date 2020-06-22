<template lang="pug">
  v-container
    Snackbar
    v-row.d-flex
      v-col(cols="12")
        v-tabs(vertical color="purple darken-3")
          div.tab-wrap
            v-tab.justify-start(v-if="product.id != 12 && product.id != 14 && product.id != 26 && product.id != 34" v-for="product in this.voteList" :key="'tab'+product.id")
              v-icon(v-if="product.is_voted") mdi-check
              v-avatar.mb-1(v-if="!product.is_voted" size="32px")
                v-img(:src="'./img/avatars/avatar-' + product.id + '.jpg'")
              span.ml-4 {{ product.name }}
          v-tab-item(v-if="product.id != 12 && product.id != 14 && product.id != 26 && product.id != 34"  v-for="product in this.$store.state.products" :key="'tab-item'+product.id")
            v-card(flat)
              v-card-text
                v-row
                  v-col.flex(cols="2" justify="center")
                    v-avatar(size="128px")
                      v-img(:src="'./img/avatars/avatar-' + product.id + '.jpg'")
                  v-col(cols="10")
                    div.tab-wrap
                      p.mb-4 created by : {{ product.creator }}
                      h1.mb-2 {{ product.name }}
                      span
                        a(:href="product.url" target="blank") {{ product.url }}
                      div.mb-12.mt-4
                        v-chip.mt-2.mr-2(v-for="(topic, index) in product.tecTopics.split(',')" :key="index") {{ topic }}
                      div.mb-12
                        h2.mb-4 技術的こだわり
                        p.body-1(v-for="(p,index) in product.tecDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
                      div.mb-12
                        h2.mb-4 サービス的こだわり
                        p.body-1(v-for="(p,index) in product.serviceDetail.split(/\\r\\n|\\r|\\n/g)" :key="'tec-detail' + index") {{ p }}
                      v-btn(v-if="product.id != 0" @click.stop="openForm(product.id)" outlined color="purple darken-3") {{ product.is_voted ? '編集' : '投票'}}
      VoteForm(:tec="this.$store.getters.currentMemberData.tecPoint" :ser="this.$store.getters.currentMemberData.servicePoint")
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
import Snackbar from "../components/Snackbar.vue";
export default {
  // created() {
  //   console.log(this.$store.state.userId);
  // },
  // beforeMount() {
  //   console.log(this.$store.state.userId);
  // },
  // mounted() {
  //   console.log(this.$store.state.userId);
  // },
  computed: {
    voteList() {
      return this.$store.getters.idSortMemberList;
    }
  },
  components: {
    VoteForm,
    Snackbar
  },
  methods: {
    openForm(id) {
      this.$store.commit("setCurrentMemberId", id);
      this.$store.commit("openVoteForm");
    }
  }
};
</script>