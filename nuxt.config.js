export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  server: {
    port: 8080,
    host: '127.0.0.1'
  },
  sitemap: {
    routes: [
      'spearguns/',
      'spearguns/product/euro',
      'spearguns/product/singleroller',
      'spearguns/product/doubleroller',
      'spearguns/product/invertedroller',
      'spearguns/product/bluewater',
    ]
  },
  generate: {
    routes: [
      'spearguns/',
      'spearguns/product/euro',
      'spearguns/product/singleroller',
      'spearguns/product/doubleroller',
      'spearguns/product/invertedroller',
      'spearguns/product/bluewater',
    ]
  },
  head: {
    link: [{
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Jomolhari&display=swap'
    }],
    title: process.env.npm_package_name || '',
    script: [{
      src: "https://www.paypal.com/sdk/js?client-id=sb&currency=AUD"
    }],
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    height: '2px',
    color: '#ffa600'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/notifications-ssr',
      mode: 'server'
    },
    {
      src: '~/plugins/notifications-client',
      mode: 'client',

    },
    {
      src: '~/plugins/vue-gallery.client.js',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',

  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
