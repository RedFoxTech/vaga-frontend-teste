import Vue from 'vue'
import App from './App.vue'
import './assets/scss/app.scss'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
