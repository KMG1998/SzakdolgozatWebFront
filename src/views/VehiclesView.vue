<template>
  <div
    class="relative pr-8 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <SysAdminVehiclesContent/>
  </div>
</template>

<script setup>
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu.vue"
import SysAdminVehiclesContent from "@/components/pageContent/vehiclesPage/SysAdminVehiclesContent.vue"
</script>

