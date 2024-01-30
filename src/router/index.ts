import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import SysAdminHomeView from '../views/SysAdminHomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/syshome',
    name: 'syshome',
    component: SysAdminHomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
