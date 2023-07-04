import Vue from "vue";
import VuexEsm from "vuex";
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import vueConfig from './config'


Vue.use(VuexEsm)

export default new VuexEsm.Store({
  state:{
      vueConfig
  },
  getters,
  mutations,
  actions,
})
