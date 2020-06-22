<template lang="pug">
  v-app
    Header
    router-view(:class="routeViewClass")
    //- Footer
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import firebase from "firebase";
export default {
  created() {
    // データの取得
    this.$store.dispatch("fetchProductInfo");
    this.$store.dispatch("fetchChangedProductInfo");
    // ログイン状態のチェック

    // ログイン状態による遷移
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit("setLoginUser", user);
      console.log("authchanged");
      console.log(this.$store.state);
      if (user) {
        this.$router.push(
          "/vote",
          () => {},
          () => {}
        );
      } else {
        this.$router.push(
          "/login",
          () => {},
          () => {}
        );
      }
    });
  },
  name: "App",

  components: {
    Header,
    Footer
  },

  data: function() {
    return {
      routeViewClass: {
        "pt-12": this.$route.name != "Login",
        "mt-12": this.$route.name != "Login"
      }
    };
  }
};
</script>
