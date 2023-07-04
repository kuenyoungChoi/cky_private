import Vue from "vue";
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: () => import('../views/main.vue')
    }
  ]
})

export default router
