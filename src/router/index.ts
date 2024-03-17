import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ReservesView from '@/views/ReservesView.vue'
import UsersView from '@/views/UsersView.vue'
import VehiclesView from '@/views/VehiclesView.vue'
import CompaniesView from '@/views/CompaniesView.vue'

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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: LoginView,
    },
    {
        path: '/reserves',
        name: 'reserves',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ReservesView,
    },
    {
        path: '/users',
        name: 'users',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: UsersView,
    },
    {
        path: '/vehicles',
        name: 'vehicles',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: VehiclesView,
    },
    {
        path: '/companies',
        name: 'companies',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: CompaniesView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
