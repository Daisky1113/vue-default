<template lang="pug">
  v-app-bar(fixed v-if="this.$route.name !='Login'")
    v-toolbar-title JavaScript Award
    v-spacer
    v-chip.mr-4
      v-avatar(left)
        v-img(:src="'./img/avatars/avatar-' + this.$store.state.userId + '.jpg'")
      | {{ this.$store.state.userName }}
    router-link(to="/vote" :color="this.$route.name =='Vote' ? 'indigo' : 'grey'")
      v-btn(icon)
        v-icon mdi-vote-outline
    router-link(to="/vote-list")
      v-btn(icon)
        v-icon mdi-playlist-edit
    //- v-btn(icon)
    //-   v-icon mdi-card-account-details-outline
    router-link(to="/mypage")
      v-btn(icon)
        v-icon mdi-account-outline
    router-link(to="/result")
      v-btn(text) result
    v-btn(@click="logout" icon)
      v-icon mdi-logout
</template>
<style scoped>
a {
  text-decoration: none;
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