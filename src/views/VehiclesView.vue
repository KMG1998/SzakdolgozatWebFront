<template>
  <div
      class="relative pr-20 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <SysAdminVehiclesContent/>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu";
import SysAdminVehiclesContent from "@/components/pageContent/vehiclesPage/SysAdminVehiclesContent";
export default defineComponent({
  name: "VehiclesView",
  components:{SysAdminVehiclesContent, SysAdminMenu}
})
</script>

<style scoped>

</style>