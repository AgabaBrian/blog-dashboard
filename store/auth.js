export const state = () => ({
  token: null,
  user: null, // Optionally track user details if needed
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
    state.user = null; // Clear user details when logging out
  },
  setUser(state, user) {
    state.user = user; // Optionally set user details
  },
};

export const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await this.$axios.post("/api/auth/login", credentials);
      commit("setToken", response.data.token);

      // Optionally fetch user data and commit
      // commit("setUser", response.data.user);

      this.$axios.setToken(response.data.token, "Bearer"); // Set auth header for future requests
    } catch (error) {
      console.error("Login error:", error.response || error);
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },
  logout({ commit }) {
    commit("clearToken");
    this.$axios.setToken(false); // Remove token from Axios
  },
};

export const getters = {
  isAuthenticated: (state) => !!state.token,
};
