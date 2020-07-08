<template lang="pug">
  v-app-bar(flat v-if="this.$route.name !='Login'")
    v-toolbar-title Team Dev Award
    v-spacer
    v-chip.mr-4
      v-avatar(left)
        v-img(v-if ="this.loginUser.userId" :src="'./img/avatars/avatar-' + this.loginUser.id + '.jpg'")
      | {{ this.loginUser.name }}
    router-link(to="/vote" :class="{'router-link-active': $route.path === '/vote'}")
      v-btn(icon)
        v-icon mdi-vote-outline
    router-link(to="/vote-list" :class="{'router-link-active': $route.path === '/vote-list'}")
      v-btn(icon)
        v-icon mdi-playlist-edit
    router-link(to="/result" :class="{'router-link-active': $route.path === '/result'}")
      v-btn(text) result
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
  computed: {
    loginUser() {
      return this.$store.state.domain.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("domain/logout");
    }
  }
};
</script>