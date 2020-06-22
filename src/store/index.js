import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projectName: "phpVote",
    user: null,
    userId: null,
    userName: "",
    isVote: false,
    isProductInfoDialog: false,
    isSnackbar: false,
    currentMemberId: 1,
    sortMode: "default",
    products: [],
    members: [],
  },
  mutations: {
    setMemberData(state, payload) {
      console.log("setmemberdata");
      payload.forEach((member) => state.members.push(member));
    },
    openVoteForm(state) {
      state.isVote = true;
    },
    closeVoteForm(state) {
      state.isVote = false;
    },
    openProductInfoDialog(state) {
      state.isProductInfoDialog = true;
    },
    closeProductInfoDialog(state) {
      state.isProductInfoDialog = false;
    },
    setCurrentMemberId(state, id) {
      state.currentMemberId = id;
    },
    vote(state, data) {
      const d = state.members.find(
        (member) => member.id == state.currentMemberId
      );
      const index = this.state.members.indexOf(d);
      state.members[index].tecPoint = data.data.tec;
      state.members[index].servicePoint = data.data.service;
      state.members[index].is_voted = true;
      localStorage.setItem(state.projectName, JSON.stringify(state.members));
      this.commit("openSnack");
      // todo 投票後に再ソートする
    },
    updateProductDetail(state, data) {
      console.log(data);
      console.log(state);
    },
    openSnack(state) {
      state.isSnackbar = true;
    },
    closeSnack(state) {
      state.isSnackbar = false;
    },
    defaultSort(state) {
      this.sortMode = "default";
      state.members.sort((a, b) => (a.id < b.id ? -1 : 1));
    },

    setLoginUser(state, user) {
      state.user = user.user;
      state.userId = user.userId;
      state.userName = user.userName;
    },

    deleteUser(state) {
      state.user = null;
    },
    setProductInfo(state, data) {
      for (let k in data) {
        if (k == state.user.uid) {
          state.userId = data[k].id;
          state.userName = data[k].creator;
        }
      }
      Object.values(data)
        .sort((a, b) => (a.id < b.id ? -1 : 1))
        .forEach((d) => state.products.push(d));
    },
    // todo
    updateProductInfo(state, data) {
      const index = state.products.findIndex(
        (product) => product.id == data.id
      );
      console.log(data);
      state.products[index].name = data.name;
      state.products[index].serviceDetail = data.serviceDetail;
      state.products[index].url = data.url;
      state.products[index].tecDetail = data.tecDetail;
      state.products[index].tecTopics = data.tecTopics;
    },
  },
  actions: {
    vote({ commit }, data) {
      firebase
        .database()
        .ref(
          `${this.state.projectName}/vote/${this.state.user.uid}/${this.state.currentMemberId}/`
        )
        .set(data)
        .then(() => commit("vote", { data }));
    },
    updateProductDetail({ commit }, data) {
      firebase
        .database()
        .ref(`${this.state.projectName}/productInfo/${this.state.user.uid}`)
        .set(data)
        .then(() => {
          commit("updateProductDetail", data);
        });
    },
    signin({ commit }, data) {
      console.log(commit);
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password);
        });
    },
    fetchProductInfo({ commit }, payload) {
      console.log("fetch product info");
      firebase
        .database()
        .ref(`${this.state.projectName}/productInfo`)
        .once("value")
        .then((snap) => {
          const v = snap.val();
          const userData = {
            user: payload,
            userId: v[payload.uid].id,
            userName: v[payload.uid].creator,
          };
          commit("setLoginUser", userData);
          commit("setProductInfo", snap.val());
        });
    },
    fetchChangedProductInfo({ commit }) {
      firebase
        .database()
        .ref(`${this.state.projectName}/productInfo`)
        .on("child_changed", (data) => {
          commit("updateProductInfo", data.val());
        });
    },
    logout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("deleteUser");
        });
    },
  },
  getters: {
    uid: (state) => state.user.uid,
    currentMemberData: (state) =>
      state.members.find((member) => member.id == state.currentMemberId),
    currentProductData: (state) =>
      state.products.find((product) => product.id == state.currentMemberId),
    userData: (state) => state.user,
    idSortMemberList: (state) =>
      state.members.sort((a, b) => (a.id < b.id ? -1 : 1)),
  },

  modules: {},
});
