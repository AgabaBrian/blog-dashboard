<template> 
  <div class="flex item-center justify-center h-screen">
    <h1 class="text-4xl">Welcome to the Blog Dashboard</h1>
    <nuxt-link to="/login" class="mt-4 text-blue-500">Go to Login</nuxt-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  middleware: 'auth'
})
</script>
