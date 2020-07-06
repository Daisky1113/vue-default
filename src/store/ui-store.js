export default {
  namespaced: true,
  state: {
    currentTeamId: "",
    isVoteFormShow: false,
    isSnackbarShow: false,
  },
  mutations: {
    changeCurrentTeamId(state, id) {
      state.currentTeamId = id;
    },
    voteFormShow(state) {
      state.isVoteFormShow = true;
    },
    voteFormHide(state) {
      state.isVoteFormShow = false;
    },
    toggleSnackbarShow(state) {
      state.isSnackbarShow = !state.isSnackbarShow;
    },
  },
  actions: {},
  getters: {},
};
