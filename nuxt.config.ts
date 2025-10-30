// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr:false,

  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['../assets/css/main.css'],

  // Configure build options for client-side only libraries
  build: {
    transpile: ['jspdf', 'html2canvas']
  },

  experimental: {
    clientFallback: true
  },
   nitro: {
    preset: 'github-pages'
  }
})
