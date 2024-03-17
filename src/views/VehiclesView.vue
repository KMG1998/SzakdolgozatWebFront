<template>
<SysAdminMenu/>
</template>

<script>
import {defineComponent} from 'vue';
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu";
export default defineComponent({
  name: "VehiclesView",
  components:{SysAdminMenu}
})
</script>

<style scoped>

</style>