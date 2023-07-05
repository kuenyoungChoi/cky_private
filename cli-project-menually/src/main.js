import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from './store/index';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(router)

var vm = new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>',
})

window.app = vm;
