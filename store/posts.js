export const state = () => ({
  posts: [],
  loading: false,
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    commit("setLoading", true);
    try {
      const response = await this.$axios.get("/posts");
      commit("setPosts", response.data.posts);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    } finally {
      commit("setLoading", false);
    }
  },
  async createPost({ dispatch }, postData) {
    await this.$axios.post("/posts", postData);
    dispatch("fetchPosts");
  },
  async updatePost({ dispatch }, { id, postData }) {
    await this.$axios.put(`/posts/${id}`, postData);
    dispatch("fetchPosts");
  },
  async deletePost({ dispatch }, id) {
    await this.$axios.delete(`/posts/${id}`);
    dispatch("fetchPosts");
  },
};
