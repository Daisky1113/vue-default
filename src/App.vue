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
import { mapActions } from "vuex";
// import memberData from "./defaultData.js";
export default {
  beforeMount() {
    // this.$store.dispatch("test");

    //   // let localData = JSON.parse(
    //   //   localStorage.getItem(this.$store.state.pojectName)
    //   // );
    //   console.log("local");
    //   const localData = JSON.parse(
    //     localStorage.getItem(this.$store.state.projectName)
    //   );

    //   if (localData) {
    //     this.$store.commit("setMemberData", localData);
    //   } else {
    //     this.$store.commit("setMemberData", memberData);
    //   }
    // ログイン状態による遷移
    firebase.auth().onAuthStateChanged(user => {
      // データの取得
      if (user) {
        // console.log(user);
        this.fetchTeams();
        this.fetchUsers();
        this.fetchLoginUser(user.uid);
        this.fetchVotes();
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
  },
  methods: {
    ...mapActions("domain", [
      "fetchTeams",
      "fetchUsers",
      "fetchLoginUser",
      "fetchVotes"
    ])
  }
};
</script>
