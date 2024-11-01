export const state = () => ({
  auth: {
    token: null,
    user: null,
  },
});

export const mutations = {
  setToken(state, token) {
    state.auth.token = token;
  },
  setUser(state, user) {
    state.auth.user = user;
  },
};

