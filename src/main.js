import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyBrWP13lxRhZdAUbQeNBS1glRrsVdD2KWk",
  authDomain: "lab9-js-award.firebaseapp.com",
  databaseURL: "https://lab9-js-award.firebaseio.com",
  projectId: "lab9-js-award",
  storageBucket: "lab9-js-award.appspot.com",
  messagingSenderId: "138797369864",
  appId: "1:138797369864:web:e18c2ae5e09b05bef0dfbd",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
