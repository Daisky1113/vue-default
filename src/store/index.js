import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isVote: false,
    currentMemberId: 1,
    members: [
      {
        id: 1,
        name: "石塚 政輝",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 2,
        name: "井上 隆三",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 3,
        name: "岩下 広司",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 4,
        name: "大井 理恵",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 5,
        name: "小栗 佑基",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 6,
        name: "尾仲 慎一",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 7,
        name: "小野川 瑞季",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
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
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 10,
        name: "久保田 仁",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 11,
        name: "香村 尚輝",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 12,
        name: "古謝 龍聖",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 13,
        name: "小菅 翔一朗",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 14,
        name: "小林 大河",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 15,
        name: "古牧 佑悟",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 16,
        name: "関口 景太",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 18,
        name: "田中 翔那",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
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
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 21,
        name: "戸渡 文子",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 22,
        name: "内藤 迅",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 23,
        name: "⻄田 聖志",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 24,
        name: "橋詰 一平",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 25,
        name: "馬場 仁美",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 26,
        name: "半田 寿久",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 27,
        name: "本間 直子",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 28,
        name: "前田 達也",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 29,
        name: "松岡 功祐",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 30,
        name: "水谷 礼子",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 31,
        name: "柳原 政知",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 32,
        name: "山岸 大致",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 33,
        name: "山崎 大輔",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 34,
        name: "山枡 優大",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 35,
        name: "水木 大悟",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 36,
        name: "尾石 宗一",
        is_voted: false,
        tecPoint: 3,
        servicePoint: 3,
      },
      {
        id: 37,
        name: "吉島 菜穂",
        is_voted: false,
        tecPoint: 3,
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
    setCurrentMemberId(state, id) {
      state.currentMemberId = id;
    },
    vote(state, data) {
      const d = this.state.members.find(
        (member) => member.id == this.state.currentMemberId
      );
      d.tecPoint = data.tec;
      d.servicePoint = data.service;
      d.is_voted = true;
    },
  },
  actions: {
    vote({ commit }, data) {
      console.log(data);
      commit("vote", data);
    },
  },
  getters: {
    currentMemberData: (state) =>
      state.members.find((member) => member.id == state.currentMemberId),
  },
  modules: {},
});
