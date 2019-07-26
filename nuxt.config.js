const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '张小禹的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '爱生活，不将就' },
      {name:'keywords',content:'张小禹,web前端,Nodejs,react-native,博客'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      // 百度统计
      {type: 'text/javascript',innerHTML: 'var _hmt = _hmt || [];(function() {var hm = document.createElement(\"script\");hm.src = \"https://hm.baidu.com/hm.js?6d877e9e3eb429d119194667c7c8b129\";var s = document.getElementsByTagName(\"script\")[0]; s.parentNode.insertBefore(hm, s);})();'}
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
