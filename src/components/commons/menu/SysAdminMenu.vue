<script setup>
import router from "@/router";
</script>
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
      <div class="mt-11 max-md:mt-10 cursor-pointer" @click="router.push('/reserves')">
        {{ $t("sideMenu.reservationsPage") }}
      </div>
      <div class="mt-10 max-md:mt-10 cursor-pointer" @click="router.push('/companies')">
        {{ $t("sideMenu.companiesPage") }}
      </div>
      <div class="h-full"/>
      <img
        class="object-contain object-center w-[92px] fill-black"
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2142fb626b47add1e5b64bf99c1521943cae418263d6643a2f61a94bcf9ade63?apiKey=e5f87d76f51449099bc2390e0669341c&"
      >
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'SysAdminMenu',
  data() {
    return {
      userName: JSON.parse(window.localStorage.getItem('userData')).name
    }
  },
  methods: {
    logOut() {
      //TODO log out user
    },
  }
});
</script>
