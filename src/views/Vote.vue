<template lang="pug">
  v-container
    Snackbar
    v-row.d-flex
      v-col(cols="12" xl="3" lg="4" md="6" sm="6" xs="12" v-for="product in this.$store.state.products" :key="product.id")
        v-card
          v-img(:src="product.thumb ? `./img/thumbs/thumb${id}.jpg` : './img/thumbs/notfound.jpg'")
          v-card-text.relative
            div.avatar-wrapper.d-flex.flex-column.justify-center
              v-avatar.mb-1(size="64")
                v-img(:src="'./img/avatars/avatar-' + product.id + '.jpg'")
              p.text-center {{ product.creator }}
            v-card-title.headline.mb-1 {{ product.name }}
            v-card-subtitle
              a.orange--text(:href="product.url" target="blank") {{ product.url}}
          v-card-actions
            v-row.pr-4.pb-1
              v-spacer
              v-btn(@click.stop="openForm(product.id)" outlined :color="product.is_voted ? 'amber darken-3' : 'blue-grey'") {{ product.is_voted ? '編集' : '投票'}}
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
a {
  text-decoration: none;
}
</style>
<script>
import VoteForm from "../components/VoteForm.vue";
import Snackbar from "../components/Snackbar.vue";
export default {
  created() {
    this.$store.commit("defaultSort");
    console.log(this.$route);
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