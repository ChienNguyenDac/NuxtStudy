export default {
  state: () => ({
    counter: 0,
    users: [],
    loading: false,
    response: null,
    currentUser: null,
  }),
  mutations: {
    increment(state) {
      state.counter++;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    addUser(state, data) {
      const user = state.users.find((user) => data.email === user.email);
      if (!user) {
        state.users.push({ ...data, id: state.users.length });
        state.response = {
          success: true,
          message: "user register successfully.",
        };
      } else {
        state.response = {
          success: false,
          message: "email is exist.",
        };
      }
    },
    userLogin(state, data) {
      const user = state.users.find((user) => data.email === user.email);
      if (user && user.password === data.password) {
        state.response = {
          success: true,
          message: "user login success.",
        };
        state.currentUser = user;
      } else {
        state.response = {
          success: false,
          message: "email / password is wrong.",
        };
      }
    },
    clearResponse(state) {
      state.response = null;
    },
  },
  actions: {
    nuxtServerInit({ commit }, { req }) {},
    async login({ commit, state }, { email, password }) {
      commit("setLoading", true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      commit("userLogin", { email, password });
      const response = state.response;
      commit("setLoading", false);
      commit("clearResponse");

      return response;
    },
    async register({ commit, state }, { email, password, name }) {
      commit("setLoading", true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      commit("addUser", { email, password, name });
      const response = state.response;
      commit("setLoading", false);
      commit("clearResponse");

      return response;
    },
  },
};
