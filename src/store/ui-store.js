export default {
  namespaced: true,
  state: {
    isVoteFormShow: false,
    isSnackbarShow: false,
  },
  mutations: {
    voteFormShow(state) {
      state.isVoteFormShow = true;
    },
    voteFormHide(state) {
      state.isVoteFormShow = false;
    },
    snackBarShow(state) {
      state.isVoteFormShow = true;
    },
    snackBarHide(state) {
      state.isSnackbarShow = false;
    },
  },
  actions: {},
  getters: {},
};
