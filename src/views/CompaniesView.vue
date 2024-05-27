<template>
  <div
      class="relative pr-20 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <SysAdminCompaniesContent/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu";
import SysAdminCompaniesContent from "@/components/pageContent/companiesPage/SysAdminCompaniesContent";

export default defineComponent({
  name: "CompaniesView",
  components:{SysAdminCompaniesContent, SysAdminMenu}
})
</script>

<style scoped>

</style>