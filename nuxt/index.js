/*
    Nuxt.js module for bootstrap-vue

    Usage:
        - Install both bootstrap and bootstrap-vue packages
        - Add this into your nuxt.config.js file:
        {
            modules: [
                'bootstrap-vue/nuxt'
            ]
        }
*/

const { resolve } = require('path')

module.exports = function nuxtBootstrapVue (moduleOptions) {
  const defaultOptions = {
    individualImports: false,
    components: [],
    directives: []
  }

  const options = Object.assign(defaultOptions, this.options.bootstrapVue, moduleOptions)

  // Conditionally require bootstrap original css too if not explicitly disabled
  if (options.css !== false) {
    this.options.css.unshift('bootstrap/dist/css/bootstrap.css')
  }

  // Add library styles
  if (options.bvCSS !== false) {
    this.options.css.push('bootstrap-vue/dist/bootstrap-vue.css')
  }

  // Register plugin
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'bootstrap-vue.js',
    options
  })
}

module.exports.meta = require('../package.json')
