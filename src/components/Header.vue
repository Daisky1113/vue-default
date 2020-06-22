<template lang="pug">
  v-app-bar(flat v-if="this.$route.name !='Login'")
    v-toolbar-title PHP Award
    v-spacer
    v-chip.mr-4
      v-avatar(left)
        v-img(v-if ="this.$store.state.userId != null" :src="'./img/avatars/avatar-' + this.$store.state.userId + '.jpg'")
      | {{ this.$store.state.userName }}
    router-link(to="/vote" :class="{'router-link-active': $route.path === '/vote'}")
      v-btn(icon)
        v-icon mdi-vote-outline
    router-link(to="/vote-list" :class="{'router-link-active': $route.path === '/vote-list'}")
      v-btn(icon)
        v-icon mdi-playlist-edit
    //- v-btn(icon)
    //-   v-icon mdi-card-account-details-outline
    router-link(to="/mypage" :class="{'router-link-active': $route.path === '/mypage'}")
      v-btn(icon)
        v-icon mdi-account-outline
    v-btn(@click="logout" icon)
      v-icon mdi-logout
</template>
<style scoped>
a {
  text-decoration: none;
}
.router-link-active .v-btn--icon {
  color: #6a1b9a !important;
}
</style>
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>