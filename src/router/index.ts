import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ReservesView from '@/views/ReservesView.vue'
import UsersView from '@/views/UsersView.vue'
import VehiclesView from '@/views/VehiclesView.vue'
import CompaniesView from '@/views/CompaniesView.vue'
import UserService from "../services/userService";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        alias: '/',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/reserves',
        name: 'reserves',
        component: ReservesView,
    },
    {
        path: '/users',
        name: 'users',
        component: UsersView,
    },
    {
        path: '/vehicles',
        name: 'vehicles',
        component: VehiclesView,
    },
    {
        path: '/companies',
        name: 'companies',
        component: CompaniesView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if(!UserService.isAuthenticated() && to.name != 'login')
      return {name:'login'}
})

export default router
