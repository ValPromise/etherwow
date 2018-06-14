module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'etherwow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [
    //   { src:'/js/web3/web3.min.js' }
    // ]
    script:[
      { src:'/syntaxhighlighter/scripts/shCore.js' },
      { src:'/syntaxhighlighter/scripts/shBrushJScript.js' },
      { src:'/syntaxhighlighter/scripts/init.js' },
      { src:'https://www.googletagmanager.com/gtag/js?id=UA-119117435-1'},
      { src:'/googleanalytics/init.js' }
    ],
    link:[
      { src:'~/syntaxhighlighter/styles/shCore.css' },
      { src:'~/syntaxhighlighter/styles/shThemeDefault.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
 loading: { color: '#3B8070' },
 css: [
   { src:'~assets/css/common.less',lang:'less' },
  ],
  env: {
    ws:process.env.ws
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
