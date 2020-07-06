import firebase from "firebase";
import defaultVotes from "../defaultData";
export default {
  namespaced: true,
  state: {
    localStrageKey: "lab9TeamVote",
    user: {},
    users: [],
    teams: [],
    votes: {},
    productDetail: {},
  },

  mutations: {
    setUser(state, payload) {
      state.user = Object.assign({}, payload);
    },
    setUsers(state, payload) {
      state.users.push(payload);
    },
    setTeams(state, payload) {
      state.teams.push(payload);
    },
    setVotes(state, payload) {
      state.votes = payload;
    },
    setProductDetail() {},
  },
  actions: {
    async fetchLoginUser({ commit }, uid) {
      console.log(uid);
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((snap) => {
          const loginUserData = snap.data();
          loginUserData.userId = snap.id;
          commit("setUser", loginUserData);
        });
    },
    async fetchUsers({ commit }) {
      firebase
        .firestore()
        .collection("users")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            commit("setUsers", doc.data());
          });
        });
    },
    async fetchTeams({ commit }) {
      const d = await firebase
        .firestore()
        .collection("teams")
        .get();

      d.forEach(async (doc) => {
        const leader = await doc
          .get("leader")
          .get()
          .then((doc) => doc.data());

        const m = await doc.get("members");
        const members = [];

        for (let i = 0; i < m.length; i++) {
          members.push(await m[i].get().then((doc) => doc.data()));
        }
        const payload = doc.data();
        payload.teamId = doc.id;
        payload.leader = leader;
        payload.members = members;
        commit("setTeams", payload);
      });
    },
    fetchVotes({ commit }) {
      const l = localStorage.getItem(this.localStrageKey);
      const voteData = l ? l : defaultVotes;
      commit("setVotes", voteData);
    },
    fetchProductDetail() {},
    login(context, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(async () => {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        });
    },
    logout() {
      firebase.auth().signOut();
    },
    test() {},
  },
  getters: {
    teamData: (state) => state.teams,
    usersData: (state) => state.users,
    loginUser: (state) => state.user,
    // 引数でチームIDを受け取っcurrentTeamDataてチーム名、tec点、サービス点をオブジェクトにして返す
    currentTeamData: (state, getters, rootState) => {
      return state.votes[rootState.UI.currentTeamId];
    },
  },
};
