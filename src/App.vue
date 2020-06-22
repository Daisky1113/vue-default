<template lang="pug">
  v-app
    Header
    div.outer
      router-view(:class="routeViewClass")
    //- Footer
</template>
<style>
.outer {
  overflow: scroll;
  height: 96vh;
  box-sizing: border-box;
}
</style>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import firebase from "firebase";
import memberData from "./defaultData.js";
export default {
  created() {
    // let localData = JSON.parse(
    //   localStorage.getItem(this.$store.state.pojectName)
    // );
    console.log("local");
    const localData = JSON.parse(
      localStorage.getItem(this.$store.state.projectName)
    );

    if (localData) {
      this.$store.commit("setMemberData", localData);
    } else {
      this.$store.commit("setMemberData", memberData);
    }
    // ログイン状態による遷移
    firebase.auth().onAuthStateChanged(user => {
      // データの取得
      this.$store.dispatch("fetchProductInfo", user);
      this.$store.dispatch("fetchChangedProductInfo");
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
      routeViewClass: {}
    };
  }
};
</script>
