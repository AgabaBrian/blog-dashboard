<template>
    <div>
      <form @submit.prevent="updatePost">
        <input v-model="title" placeholder="Title" required />
        <textarea v-model="content" placeholder="Content" required></textarea>
        <select v-model="status">
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: '',
        status: '',
      };
    },
    async mounted() {
      const { data } = await this.$axios.get(`/posts/${this.$route.params.id}`);
      this.title = data.title;
      this.content = data.content;
      this.status = data.status;
    },
    methods: {
      async updatePost() {
        await this.$axios.put(`/posts/${this.$route.params.id}`, { title: this.title, content: this.content, status: this.status });
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  