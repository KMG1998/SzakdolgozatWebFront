<template>
  <div
      class="relative h-[100vh] pr-8 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <SysAdminUsersContent/>
  </div>
</template>

<script setup lang="ts">
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu.vue";
import SysAdminUsersContent from "@/components/pageContent/usersPage/SysAdminUserContent.vue";
</script>

<style scoped>

</style>
