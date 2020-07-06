import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
Vue.config.productionTip = false;
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAH3Q0JaaX9L37jEvza8RLBCL_wbKnBdBw",
  authDomain: "lab9-team-award.firebaseapp.com",
  databaseURL: "https://lab9-team-award.firebaseio.com",
  projectId: "lab9-team-award",
  storageBucket: "lab9-team-award.appspot.com",
  messagingSenderId: "992052006736",
  appId: "1:992052006736:web:fa84caf4b525b5f920e655",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
