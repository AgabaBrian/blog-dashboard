<template>
  <div>
    <form @submit.prevent="handleLogin">
      <input v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        await this.$store.dispatch('auth/login', { email: this.email, password: this.password });
        this.$router.push('/dashboard');
      } catch {
        alert('Invalid login credentials');
      }
    }
  }
};
</script>

