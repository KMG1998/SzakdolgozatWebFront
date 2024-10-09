<template>
  <div class="relative pr-8 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <SysAdminReservesContent/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu";
import SysAdminReservesContent from "@/components/pageContent/reservesPage/SysAdminReservesContent";

export default defineComponent({
  name: "ReservesView",
  components:{SysAdminMenu,SysAdminReservesContent}
})

</script>