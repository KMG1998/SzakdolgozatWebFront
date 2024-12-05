<template>
  <div class="relative pr-8 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <SysAdminOrdersContent/>
  </div>
</template>

<script setup>
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu.vue";
import SysAdminOrdersContent from "@/components/pageContent/ordersPage/SysAdminOrdersContent.vue";
</script>
