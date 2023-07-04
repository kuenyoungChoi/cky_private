import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from './store/index';

Vue.config.productionTip = false
Vue.use(router)

var vm = new Vue({
  el: "$app",
  router,
  store,
  components: { App },
  template: '<APP/>'
})

window.app = vm;
