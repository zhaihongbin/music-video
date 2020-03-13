import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Hot',
        component: () => import('../views/Hot')
      },
      {
        path: 'music',
        name: 'Music',
        component: () => import('../views/Music')
      },
      {
        path: 'video',
        name: 'Video',
        component: () => import('../views/Video')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
