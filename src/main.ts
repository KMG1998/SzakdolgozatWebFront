import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/tailwind.css'
import {createI18n} from 'vue-i18n'
import Vue3Toastify, {type ToastContainerOptions} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const i18n = createI18n({
    locale: 'hu',
    legacy: false,
    messages: {
        hu: {
            mainPage: {
                quickActions: 'gyorsműveletek'
            },
            sideMenu: {
                usersPage: 'Felhasználók',
                vehiclesPage: 'Járművek',
                reservationsPage: 'Foglalások',
                companiesPage: 'Cégek',
            }
        },
    }
})

createApp(App).use(router).use(i18n).use(Vue3Toastify, {autoClose: 3000} as ToastContainerOptions,).mount('#app')
