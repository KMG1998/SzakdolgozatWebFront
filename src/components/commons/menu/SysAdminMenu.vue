<template>
  <div class="relative z-0 gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mr-7">
    <div class="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
      <div
          class="bg-white bg-opacity-80 flex grow flex-col items-center text-xl text-black whitespace-nowrap w-full pt-6 pb-12 px-4 max-md:mt-6">
        <img
            @click="this.$router.push('/home')"
            loading="lazy"
            src="@/assets/images/magantaxi_logo.png"
            class="aspect-square object-contain object-center w-[200px]"
        >
        <div class="text-center mt-10">UserName</div>
        <div class="mt-11 max-md:mt-10 cursor-pointer" @click="this.$router.push('/users')">Felhasználók</div>
        <div class="mt-11 max-md:mt-10" @click="this.$router.push('/vehicles')">Járművek</div>
        <div class="mt-11 max-md:mt-10" @click="this.$router.push('/reserves')">Foglalások</div>
        <div class="mt-10 max-md:mt-10" @click="this.$router.push('/companies')">Cégek</div>
        <img
            class="aspect-[1.19] object-contain object-center w-[92px] fill-black mt-96 max-md:mt-10"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2142fb626b47add1e5b64bf99c1521943cae418263d6643a2f61a94bcf9ade63?apiKey=e5f87d76f51449099bc2390e0669341c&"
        >
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SysAdminMenu',
});
</script>