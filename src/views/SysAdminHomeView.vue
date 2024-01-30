<template>
  <div class="relative pr-20 max-md:pr-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white">
    <div class="fixed z-10 w-full h-full" v-if="isPopupVisible" >
      <div class=" w-full h-full bg-gray-500 opacity-60" @click="toggle"/>
      <CreateUserPopUp />
    </div>
    <div class="relative z-0 gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div
          class="flex flex-col items-stretch w-[17%] max-md:w-full max-md:ml-0"
      >
        <div
            class="bg-white bg-opacity-80 flex grow flex-col items-center text-xl text-black whitespace-nowrap w-full pt-6 pb-12 px-4 max-md:mt-6"
        >
          <img
              loading="lazy"
              src="../assets/images/magantaxi_logo.png"
              class="aspect-square object-contain object-center w-[200px] pr-9"
          />
          <div class="text-center mt-10">Admin Chad</div>
          <div class="mt-11 max-md:mt-10">Felhasználók</div>
          <div class="mt-11 max-md:mt-10">Járművek</div>
          <div class="mt-11 max-md:mt-10">Foglalások</div>
          <div class="mt-10 max-md:mt-10">Cégek</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2142fb626b47add1e5b64bf99c1521943cae418263d6643a2f61a94bcf9ade63?apiKey=e5f87d76f51449099bc2390e0669341c&"
              class="aspect-[1.19] object-contain object-center w-[92px] fill-black mt-96 max-md:mt-10"
          />
        </div>
      </div>
      <div
          class="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0"
      >
        <div
            class="bg-white bg-opacity-80 flex flex-col items-stretch w-full mt-6 pt-4 pb-12 rounded-3xl max-md:max-w-full max-md:mt-10"
        >
          <div class="text-black text-xl ml-4 self-start max-md:ml-2.5">
            gyorsműveletek
          </div>
          <div class="bg-black shrink-0 h-0.5 mt-3 max-md:max-w-full"></div>
          <div class="self-center w-[528px] max-w-full mt-3.5">
            <div
                class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
            >
              <div
                  class="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0"
              >
                <div
                    class="flex grow flex-col items-center -ml-0.5 max-md:mt-10"
                >
                  <img
                      loading="lazy"
                      src="../assets/images/new_comp_button.png"
                      class="aspect-square object-contain object-center w-[100px] h-[100px] rounded-full"
                  />
                  <div class="text-black text-xl whitespace-nowrap mt-6">
                    új cég
                  </div>
                </div>
              </div>
              <div
                  class="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div class="flex grow flex-col items-stretch max-md:mt-10">
                  <img
                      loading="lazy"
                      src="../assets/images/new_user_button.png"
                      class="aspect-square object-contain object-center w-[100px] fill-white self-center max-w-full cursor-pointer"
                      @click='toggle'
                  />
                  <div class="text-black text-xl whitespace-nowrap mt-6">
                    <p>új felhasználó</p>
                  </div>
                </div>
              </div>
              <div
                  class="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0"
              >
                <div class="flex grow flex-col items-stretch max-md:mt-10">
                  <img
                      loading="lazy"
                      src="../assets/images/new_vehicle_button.png"
                      class="aspect-square object-contain object-center w-[100px] self-center rounded-full"
                  />
                  <div class="text-black text-xl whitespace-nowrap mt-6">
                    <p>új jármű</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          class="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0"
      >
        <div
            class="bg-white bg-opacity-80 flex flex-col w-full mt-6 pt-1.5 pb-12 rounded-3xl items-start max-md:max-w-full max-md:mt-10"
        >
          <div
              class="flex w-[516px] max-w-full items-stretch justify-between gap-5 ml-4 max-md:flex-wrap"
          >
            <div class="text-black text-xl grow shrink basis-auto">
              személyes adatok
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1df465a90b7fca2af3d3fca8e62c86e7535b106913c4170987a88bd77c1e2dcb?apiKey=e5f87d76f51449099bc2390e0669341c&"
                class="aspect-[1.12] object-contain object-center w-[35px] fill-black shrink-0"
            />
          </div>
          <div
              class="bg-black self-stretch shrink-0 h-0.5 mt-2.5 max-md:max-w-full"
          ></div>
          <div
              class="flex w-[285px] max-w-full flex-col items-stretch text-xl text-black ml-4 mt-5 max-md:ml-2.5"
          >
            <div class="flex items-stretch justify-between gap-5">
              <div class="">név:</div>
              <div class="grow shrink basis-auto">Teszt Elek</div>
            </div>
            <div
                class="flex items-stretch justify-between gap-5 whitespace-nowrap mt-8"
            >
              <div class="">e-mail:</div>
              <div class="grow">random@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CreateUserPopUp from "@/components/popup/CreateUserPopUp.vue";

export default defineComponent({
  name: 'SysAdminHomeView',
  components: {CreateUserPopUp},
  methods: {
    toggle() {
      this.isPopupVisible = !this.isPopupVisible
    },
  }, data: function () {
    return {
      isPopupVisible: false
    }
  }
});
</script>
