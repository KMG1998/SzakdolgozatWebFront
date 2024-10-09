<template>
  <div class="relative pr-8 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white">
    <HomePageContent/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CreateUserPopUp from "@/components/popup/CreateUserPopUp.vue";
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu.vue";
import HomePageContent from "@/components/pageContent/homePage/HomePageContent.vue";

export default defineComponent({
  name: 'HomeView',
  components: {HomePageContent},

});
</script>
