import firebase from "firebase";
import defaultVotes from "../defaultData";
export default {
  namespaced: true,
  state: {
    localStrageKey: "lab9TeamVote",
    currentTeamId: "",
    user: {},
    users: [],
    teams: [],
    result: [],
    votes: JSON.parse(localStorage.getItem("lab9TeamVote")) || defaultVotes,
  },

  mutations: {
    setUser(state, payload) {
      state.user = Object.assign({}, payload);
    },
    setUsers(state, payload) {
      state.users.push(payload);
    },
    setTeams(state, payload) {
      if (state.teams.length < 9) {
        state.teams.push(payload);
      }
    },
    setVotes(state, payload) {
      console.log("setVotes");
      state.votes = Object.assign({}, payload);
    },
    setCurrentTeamId(state, id) {
      state.currentTeamId = id;
    },
    setAllResult(state, payload) {
      for (let i = 0; i < payload.length; i++) {
        payload[i].votes = payload[i].votes.reduce(
          (a, b, i, self) => {
            a.totalTec += b.tec;
            a.totalService += b.service;
            if (i == self.length - 1) {
              a.totalTec = a.totalTec / self.length;
              a.totalService = a.totalService / self.length;
              a.total = (a.totalTec + a.totalService) / 2;
            }
            return a;
          },
          { totalTec: 0, totalService: 0, total: 0 }
        );
      }
      console.log(
        payload.sort((a, b) => (a.votes.total < b.votes.total ? -1 : 1))
      );
      // payload.foreach((result) => state.result.push(result));
    },
    updateVote(state, payload) {
      state.votes[state.currentTeamId].tec = payload.tec;
      state.votes[state.currentTeamId].service = payload.service;
      state.votes[state.currentTeamId].is_voted = true;
      localStorage.setItem(state.localStrageKey, JSON.stringify(state.votes));
    },
  },
  actions: {
    async sendVoteData(context, payload) {
      await firebase
        .firestore()
        .collection(`votesData/${context.state.currentTeamId}/votes`)
        .doc(`${context.state.user.userId}`)
        .set(payload);
      context.commit("updateVote", payload);
    },
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
    fetchVotes({ state, commit }) {
      const l = JSON.parse(localStorage.getItem(state.localStrageKey));
      const voteData = l ? l : defaultVotes;
      commit("setVotes", voteData);
    },

    async fetchAllVotes(context) {
      const teams = context.state.teams;
      const allResult = [];
      for (let i = 0; i < teams.length; i++) {
        const teamId = teams[i].teamId;

        const result = {
          teamName: teams[i].name,
          votes: [],
        };
        await firebase
          .firestore()
          .collection(`votesData/${teamId}/votes`)
          .get()
          .then((snap) => {
            snap.forEach((doc) => result.votes.push(doc.data()));
          });
        allResult.push(result);
      }
      context.commit("setAllResult", allResult);
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
    voteData: (state) => {
      return Object.entries(state.votes).reduce((a, b) => {
        b[1].id = b[0];
        a.push(b[1]);
        return a;
      }, []);
    },
    getAllResult: (state) => state.allResult,
    currentVoteData: (state) => {
      return state.votes[state.currentTeamId];
    },
  },
};
