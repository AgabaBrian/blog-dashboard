export default {
  // Global page headers
  head: {
    title: 'blog-dashboard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Your blog dashboard description here' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  
  // Global CSS
  css: ['@/assets/styles/tailwind.css'],

  // Modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
  ],

  // Axios module configuration
  axios: {
    baseURL: 'http://localhost:3000',
  },

  // Build Configuration
  build: {},
}

