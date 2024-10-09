<script setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>
<template>
  <div class="fixed z-10 w-full h-full" v-if="isPopupVisible">
    <div class=" w-full h-full bg-gray-500 opacity-60" @click="toggle"/>
    <CreateUserPopUp/>
  </div>
  <div class="flex flex-row">
    <SysAdminMenu/>
    <div class="flex flex-col lg:flex-row">
      <div
          class="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0"
      >
        <div
            class="bg-white bg-opacity-80 flex flex-col items-stretch w-full mt-6 pt-4 pb-12 rounded-3xl max-md:max-w-full max-md:mt-10"
        >
          <div class="text-black text-xl ml-4 self-start max-md:ml-2.5">
            {{ t("mainPage.quickActions") }}
          </div>
          <div class="bg-black shrink-0 h-0.5 mt-3 max-md:max-w-full"></div>
          <div class="self-center w-[100%] max-w-full mt-3.5 pl-2 pr-2">
            <div
                class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
            >
              <div
                  class="flex flex-col items-stretch max-md:w-full max-md:ml-0"
              >
                <div
                    class="flex grow flex-col items-center max-md:mt-10"
                >
                  <img
                      loading="lazy"
                      src="@/assets/images/new_comp_button.png"
                      class="object-contain object-center w-[100px] fill-white self-center max-w-full cursor-pointer"
                  />
                  <div class="text-black text-xl whitespace-nowrap mt-6">
                    új cég
                  </div>
                </div>
              </div>
              <div
                  class="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0"
              >
                <div class="flex grow flex-col items-center max-md:mt-10">
                  <img
                      loading="lazy"
                      src="@/assets/images/new_user_button.png"
                      class="object-contain object-center w-[100px] fill-white self-center max-w-full cursor-pointer"
                      @click='toggle'
                  />
                  <div class="text-black text-xl whitespace-nowrap mt-6">
                    <p>új felhasználó</p>
                  </div>
                </div>
              </div>
              <div
                  class="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0"
              >
                <div class="flex grow flex-col items-stretch max-md:mt-10">
                  <img
                      loading="lazy"
                      src="@/assets/images/new_vehicle_button.png"
                      class="object-contain object-center w-[100px] fill-white self-center max-w-full cursor-pointer"
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
          class="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0"
      >
        <div
            class="bg-white bg-opacity-80 flex flex-col w-full mt-6 pt-1.5 pb-12 rounded-3xl items-start max-md:max-w-full max-md:mt-10"
        >
          <div
              class="flex w-[90%] max-w-full items-stretch justify-between gap-5 ml-4 max-md:flex-wrap"
          >
            <div class="text-black text-xl grow shrink text-left">
              személyes adatok
            </div>
            <img
                class="object-contain object-center w-[35px] fill-black shrink-0"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1df465a90b7fca2af3d3fca8e62c86e7535b106913c4170987a88bd77c1e2dcb?apiKey=e5f87d76f51449099bc2390e0669341c&"
            />
          </div>
          <div class="bg-black self-stretch shrink-0 h-0.5 mt-2.5 max-md:max-w-full"></div>
          <div
              class="flex w-[285px] max-w-full flex-col items-stretch text-xl text-black ml-4 mt-5 max-md:ml-2.5"
          >
            <div class="flex items-stretch justify-between gap-5">
              <div class="">név:</div>
              <div class="grow shrink basis-auto">{{userData['userName']}}</div>
            </div>
            <div
                class="flex items-stretch justify-between gap-5 whitespace-nowrap mt-8"
            >
              <div class="">e-mail:</div>
              <div class="grow">{{userData['userEmail']}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SysAdminMenu from "@/components/commons/menu/SysAdminMenu";
import CreateUserPopUp from "@/components/popup/CreateUserPopUp";

export default {
  name: "HomePageContent",
  components: {SysAdminMenu, CreateUserPopUp},
  methods: {
    toggle() {
      this.isPopupVisible = !this.isPopupVisible
    },
  }, data: function () {
    return {
      isPopupVisible: false,
      userData:JSON.parse(window.localStorage.getItem('userData'))
    }
  }
}
</script>

<style scoped>

</style>