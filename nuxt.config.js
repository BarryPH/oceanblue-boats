module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ocean-blue-boats',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  plugins: [
    '~/plugins/svg-icons'
  ],
  css: [
    '~/assets/suit.css',
    '~/assets/base.css'
  ],
  router: {
    middleware: 'currentPage',
    async scrollBehavior (to, from, savedPosition) {
      setTimeout(() => {
        // Pages using the _page.vue file share a savedPosition as they
        // are all the same page to nuxt
        // This is undesired so to scoll to top instead

        if (to.matched[0] && to.matched[0].name === 'page') {
          return window.scrollTo(0, 0)
        }

        const scrollTo = Object.assign({
          x: 0,
          y: 0
        }, savedPosition)

        window.scrollTo(scrollTo.x, scrollTo.y)
      }, 400)
    }
  },
  modules: [
    'nuxtent'
  ]
}
