<template lang="pug">
    v-row.d-flex.justify-center.align-center.container-inner
      v-col.left.d-flex.align-center.justify-center(cols="7")
        h1.display-4.font-weight-bold.white--text
          | PHP
          br
          | Award
      v-col.right(cols="5").d-flex.align-center.justify-center
        v-card.loginform( :loading="loading" min-width="300")
          v-card-text.pt-12(color="purple darken-3")
            v-text-field(
              dense
              :color="color"
              outlined
              prepend-icon="mdi-email-outline"
              v-model="email"
              label="email")
            v-text-field(
              v-model="password"
              @click:append="show = !show"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              dense
              :color="color"
              outlined
              prepend-icon="mdi-lock"
              label="password")
          v-card-actions
            v-spacer
            v-btn(text @click="sendLoginRequest" :depressed="true" color="purple darken-3" ) Login
</template>
<style>
.left,
.right {
  height: 100vh;
}
.right {
  background-color: #6a1b9a;
}
.left {
  background-image: url("/img/bt-top.jpg");
  background-size: cover;
  object-fit: cover;
}
.loginform {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
<script>
export default {
  created() {
    // console.log(this.$route.name);
  },
  data: function() {
    return {
      show: false,
      email: "",
      password: "",
      color: "purple darken-3",
      loading: false
    };
  },
  methods: {
    sendLoginRequest() {
      this.loading = "purple darken-1";
      this.$store.dispatch("signin", {
        email: this.email,
        password: this.password
      });
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>