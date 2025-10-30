export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  app: {
    baseURL: '/SimpleResume/',
    head: {
      title: 'Simple Resume Builder',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A simple and beautiful resume builder' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/SimpleResume/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    },
    buildAssetsDir: 'assets'
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  
  build: {
    transpile: ['jspdf', 'html2canvas']
  },

  // 重要：确保路由正确生成
  routeRules: {
    '/**': { static: true }
  },
  
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/']
    }
  }
})