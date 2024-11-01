<template>
  <div>
    <h1>Dashboard</h1>
    <!-- Code for displaying posts and actions -->
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, store }) {
    // Fetch posts during server-side rendering or before rendering
    try {
      const response = await $axios.$get('/api/posts?page=1&limit=6');
      store.commit('posts/setPosts', response.data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    }
  }
};
</script>


