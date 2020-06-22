import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    userId: 0,
    userName: "",
    isVote: false,
    isProductInfoDialog: false,
    isSnackbar: false,
    currentMemberId: 1,
    sortMode: "default",
    products: [],
    members: [
      {
        id: 0,
        name: "中村大輔",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 1,
      },
      {
        id: 1,
        name: "石塚 政輝",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 4,
      },
      {
        id: 2,
        name: "井上 隆三",
        is_voted: false,
        tecPoint: 2,
        servicePoint: 4,
      },
      {
        id: 3,
        name: "岩下 広司",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 1,
      },
      {
        id: 4,
        name: "大井 理恵",
        is_voted: false,
        tecPoint: 4,
        servicePoint: 5,
      },
      {
        id: 5,
        name: "小栗 佑基",
        is_voted: false,
        tecPoint: 5,
        servicePoint: 2,
      },
      {
        id: 6,
        name: "尾仲 慎一",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 1,
      },
      {
        id: 7,
        name: "小野川 瑞季",
        is_voted: false,
        tecPoint: 2,
        servicePoint: 4,
      },
      {
        id: 8,
        name: "加川 大輔",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 9,
        name: "川野 翔太郎",
        is_voted: false,
        tecPoint: 4,
        servicePoint: 1,
      },
      {
        id: 10,
        name: "久保田 仁",
        is_voted: false,
        tecPoint: 5,
        servicePoint: 5,
      },
      {
        id: 11,
        name: "香村 尚輝",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 3,
      },
      {
        id: 12,
        name: "古謝 龍聖",
        is_voted: false,
        tecPoint: 2,
        servicePoint: 4,
      },
      {
        id: 13,
        name: "小菅 翔一朗",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 4,
      },
      {
        id: 14,
        name: "小林 大河",
        is_voted: false,
        tecPoint: 4,
        servicePoint: 3,
      },
      {
        id: 15,
        name: "古牧 佑悟",
        is_voted: false,
        tecPoint: 5,
        servicePoint: 2,
      },
      {
        id: 16,
        name: "関口 景太",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 3,
      },
      {
        id: 18,
        name: "田中 翔那",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 1,
      },
      {
        id: 19,
        name: "田中 喜規",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 20,
        name: "谷口 真治",
        is_voted: false,
        tecPoint: 4,
        servicePoint: 5,
      },
      {
        id: 21,
        name: "戸渡 文子",
        is_voted: false,
        tecPoint: 5,
        servicePoint: 4,
      },
      {
        id: 22,
        name: "内藤 迅",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 5,
      },
      {
        id: 23,
        name: "⻄田 聖志",
        is_voted: false,
        tecPoint: 2,
        servicePoint: 3,
      },
      {
        id: 24,
        name: "橋詰 一平",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 1,
      },
      {
        id: 25,
        name: "馬場 仁美",
        is_voted: false,
        tecPoint: 4,
        servicePoint: 1,
      },
      {
        id: 26,
        name: "半田 寿久",
        is_voted: false,
        tecPoint: 5,
        servicePoint: 4,
      },
      {
        id: 27,
        name: "本間 直子",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 3,
      },
      {
        id: 28,
        name: "前田 達也",
        is_voted: false,
        tecPoint: 2,
        servicePoint: 3,
      },
      {
        id: 29,
        name: "松岡 功祐",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 1,
      },
      {
        id: 30,
        name: "水谷 礼子",
        is_voted: false,
        tecPoint: 4,
        servicePoint: 3,
      },
      {
        id: 31,
        name: "柳原 政知",
        is_voted: false,
        tecPoint: 5,
        servicePoint: 1,
      },
      {
        id: 32,
        name: "山岸 大致",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 3,
      },
      {
        id: 33,
        name: "山崎 大輔",
        is_voted: false,
        tecPoint: 2,
        servicePoint: 3,
      },
      {
        id: 34,
        name: "山枡 優大",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 4,
      },
      {
        id: 35,
        name: "水木 大悟",
        is_voted: false,
        tecPoint: 4,
        servicePoint: 3,
      },
      {
        id: 36,
        name: "尾石 宗一",
        is_voted: false,
        tecPoint: 5,
        servicePoint: 2,
      },
      {
        id: 37,
        name: "吉島 菜穂",
        is_voted: false,
        tecPoint: 1,
        servicePoint: 3,
      },
    ],
  },
  mutations: {
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
    tecSort(state) {
      this.sortMode = "tec";
      state.members.sort((a, b) => (a.tecPoint < b.tecPoint ? -1 : 1));
    },
    serviceSort(state) {
      this.sortMode = "service";
      state.members.sort((a, b) => (a.servicePoint < b.servicePoint ? -1 : 1));
    },
    totalSort(state) {
      this.sortMode = "total";
      state.members.sort((a, b) => {
        return (a.tecPoint + a.servicePoint) / 2 <
          (b.tecPoint + b.servicePoint) / 2
          ? -1
          : 1;
      });
    },

    setLoginUser(state, user) {
      state.user = user;
    },

    deleteUser(state) {
      state.user = null;
    },
    setProductInfo(state, data) {
      console.log("setProductInfo");
      for (let k in data) {
        if (k == state.user.uid) {
          state.userId = data[k].id;
          state.userName = data[k].creator;
          console.log(state);
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
      state.products[index] = data;
    },
  },
  actions: {
    vote({ commit }, data) {
      firebase
        .database()
        .ref(`vote/${this.state.user.uid}/${this.state.currentMemberId}/`)
        .set(data)
        .then(() => commit("vote", { data }));
    },
    updateProductDetail({ commit }, data) {
      data.creator = firebase
        .database()
        .ref(`productInfo/${this.state.user.uid}`)
        .update(data)
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
    fetchProductInfo({ commit }) {
      firebase
        .database()
        .ref("productInfo")
        .once("value")
        .then((snap) => {
          commit("setProductInfo", snap.val());
        });
    },
    fetchChangedProductInfo({ commit }) {
      firebase
        .database()
        .ref("productInfo")
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
  },

  modules: {},
});
