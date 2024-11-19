<template>
  <div class="relative z-0 h-[100vh] gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mr-7">
    <div
      class="bg-white h-full bg-opacity-80 flex flex-col items-center text-xl text-black whitespace-nowrap w-full pt-6 pb-12 px-4 max-md:mt-6">
      <img
        @click="router.push('/home')"
        loading="lazy"
        src="@/assets/images/magantaxi_logo.png"
        class="aspect-square object-contain object-center w-[200px] cursor-pointer"
      >
      <div class="text-center mt-10">{{ userName }}</div>
      <div class="mt-11 max-md:mt-10 cursor-pointer" @click="router.push('/users')">
        {{ $t("sideMenu.usersPage") }}
      </div>
      <div class="mt-11 max-md:mt-10 cursor-pointer" @click="router.push('/vehicles')">
        {{ $t("sideMenu.vehiclesPage") }}
      </div>
      <div class="mt-10 max-md:mt-10 cursor-pointer" @click="router.push('/companies')">
        {{ $t("sideMenu.companiesPage") }}
      </div>
      <div class="h-full"/>
      <img
        class="object-contain object-center w-[92px] fill-black cursor-pointer"
        loading="lazy"
        src="../../../assets/images/log_out.png"
        @click="logOut"
      >
    </div>
  </div>
</template>

<script setup>
import UserService from "@/services/userService.ts";
import {toast} from "vue3-toastify";
import ToastConfigs from "@/utils/toastConfigs.ts";
import {ref} from 'vue'
import router from "@/router"


const userName = ref(JSON.parse(window.localStorage.getItem('userData')).name)

async function logOut() {
  if (await UserService.logOut()) {
    window.localStorage.clear()
    await router.push('/login')
    return
  }
  toast('Sikertelen kijelentkezés', ToastConfigs.errorToastConfig)
}
;
</script>
