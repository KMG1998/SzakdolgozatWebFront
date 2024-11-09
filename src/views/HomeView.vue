<template>
  <div class="relative pr-8 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white flex flex-row justify-start">
    <SysAdminMenu/>
    <HomePageContent/>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import HomePageContent from "@/components/pageContent/homePage/HomePageContent.vue";
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu.vue";

export default defineComponent({
  name: 'HomeView',
  components: {HomePageContent,SysAdminMenu},
});
</script>
