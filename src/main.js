import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
