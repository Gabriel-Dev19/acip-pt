export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Detetive particular em Balneário Camboriú | Joinville | Florianópolis | Curitiba | Tubarão | Rio do Sul',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Somos uma agência de detetives focada em investigação empresarial, investigação conjugal, acompanhamento de filho e diversos serviços de investigação!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css', integrity: 'sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p', crossorigin: 'anonymous' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css', rel: 'stylesheet' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm'
  ],

  gtm: {
    id: 'GTM-5D26NMD'
  },

  sitemap: {
    hostname: 'https://acipdetetives.com.br/'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  router: {
    scrollBehavior () {}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
