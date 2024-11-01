<template>
  <div class="p-8">
    <h1 class="text-3xl mb-4">Create New Post</h1>
    <form @submit.prevent="savePost">
      <input
        v-model="title"
        type="text"
        placeholder="Title"
        class="border p-2 mb-4 w-full"
        required
      />
      <textarea
        v-model="content"
        placeholder="Content"
        class="border p-2 mb-4 w-full"
        required
      ></textarea>
      <select v-model="status" class="border p-2 mb-4 w-full">
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>
      <button type="submit" class="bg-blue-500 text-white p-2 rounded">
        Save Post
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      status: "draft",
    };
  },
  methods: {
    async savePost() {
      try {
        await this.$axios.post("/posts", {
          title: this.title,
          content: this.content,
          status: this.status,
        });
        this.$router.push("/dashboard");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
