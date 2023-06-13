export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'try',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyBdsjs0ByFEQW3nX60I-aiSONEGH9fwswY",
      authDomain: "paymentmethod-3396c.firebaseapp.com",
      databaseURL: "https://paymentmethod-3396c-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "paymentmethod-3396c",
      storageBucket: "paymentmethod-3396c.appspot.com",
      messagingSenderId: "671357659644",
      appId: "1:671357659644:web:0374fe812e2a426ec76a79",
      measurementId: "G-C40BL9VZXP"
    },
    services: {
      auth: true,
    },
  },
  router: {
    routes: [
      {
        path: '/payment',
        component: '@/pages/payment.vue'
      }
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
