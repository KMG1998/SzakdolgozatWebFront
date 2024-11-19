<template>
  <div
    class="relative pr-8 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <HomePageContent/>
  </div>
</template>

<script setup>
import HomePageContent from "@/components/pageContent/homePage/HomePageContent.vue";
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu.vue";</script>
