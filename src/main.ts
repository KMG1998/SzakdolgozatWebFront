import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/tailwind.css'
import Vue3Toastify, {type ToastContainerOptions} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import i18n from "../src/utils/lang";

const useArray = [router,i18n]

const app = createApp(App).use(Vue3Toastify, {autoClose: 3000} as ToastContainerOptions)
useArray.forEach((item)=>{
    app.use(item)
})
app.mount('#app')
