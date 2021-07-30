const bodyParser = require('body-parser')

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: 'Covid'
        }
      }
    : {}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Covid-19',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
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

  target: 'server',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios'
  ],
  // server: {     
  //   port: 3000, // default: 3000     
  //   host: '0.0.0.0', // default: localhost   
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
    // baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
  },
  devServer: {
    proxy: 'https://covid-19.nchc.org.tw/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  serverMiddleware:[
    bodyParser.json(),
    bodyParser.urlencoded({extended: true}),
    '~/api'
  ],
  ...routerBase
}
