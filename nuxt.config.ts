// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true, // Vercel 上启用 SSR 以获得更好性能
  app: {
    baseURL: '/',
    head: {
      title: 'Simple Resume Builder',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A simple and beautiful resume builder' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    // transpile: ['jspdf', 'html2canvas']
  }
  // 移除所有 nitro 和静态生成相关的配置
})