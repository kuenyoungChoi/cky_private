import Vue from "vue";
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('../views/main.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
