<template>
  <PopUp :visibility-variable="isUserPopupVisible" @toggle="toggleUserPopUp">
    <CreateUserPopUp :toggle-function="toggleUserPopUp"/>
  </PopUp>
  <PopUp :visibility-variable="isCompanyPopupVisible" @toggle="toggleCompanyPopUp">
    <CreateCompanyPopUp/>
  </PopUp>
  <PopUp :visibility-variable="isVehiclePopupVisible" @toggle="toggleVehiclePopUp">
    <CreateVehiclePopup/>
  </PopUp>
  <PopUp :visibility-variable="isPasswordPopupVisible" @toggle="togglePasswordPopUp">
    <PasswordChangePopUp/>
  </PopUp>
  <div class="flex flex-col lg:flex-row">
    <div
      class="flex flex-col gap-5 w-max lg:flex-row"
    >
      <div
        class="bg-white bg-opacity-80 flex flex-col items-stretch min-w-[400px] w-full h-min mt-6 pt-4 pb-12 rounded-3xl max-md:mt-10"
      >
        <div class="text-black text-xl ml-4 self-start max-md:ml-2.5">
          {{ $t("mainPage.createActions") }}
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
                  src="@/assets/images/company_button.png"
                  class="object-contain object-center w-[100px] fill-white self-center max-w-full cursor-pointer"
                  @click="toggleCompanyPopUp"
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
                  src="@/assets/images/user_button.png"
                  class="object-contain object-center w-[100px] fill-white self-center max-w-full cursor-pointer"
                  @click='toggleUserPopUp'
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
                  src="@/assets/images/vehicle_button.png"
                  class="object-contain object-center w-[100px] fill-white self-center max-w-full cursor-pointer"
                  @click='toggleVehiclePopUp'
                />
                <div class="text-black text-xl whitespace-nowrap mt-6">
                  <p>új jármű</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white bg-opacity-80 flex flex-col items-stretch w-full h-min mt-6 pt-4 pb-12 rounded-3xl max-md:mt-10"
      >
        <div class="text-black text-xl ml-4 self-start max-md:ml-2.5">
          {{ $t("mainPage.ownData") }}
        </div>
        <div class="bg-black shrink-0 h-0.5 mt-3 max-md:max-w-full"></div>
        <div class="flex flex-col w-full max-w-full mt-3.5 px-2">
          <DataWithLabel label="e-mail" :data="userEmail"/>
          <DataWithLabel label="név" :data="userName"/>
          <button type="button"
                  @click="togglePasswordPopUp"
                  class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black rounded-3xl border-2 border-black border-solid"
          >Jelszó csere
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateUserPopUp from "@/components/popup/CreateUserPopUp.vue";
import CreateCompanyPopUp from "@/components/popup/CreateCompanyPopUp.vue";
import CreateVehiclePopup from "@/components/popup/CreateVehiclePopup.vue";
import PasswordChangePopUp from "@/components/popup/passwordChange/PasswordChangePopUp.vue";
import PopUp from "@/components/popup/PopUp.vue";
import DataWithLabel from "@/components/commons/DataWithLabel.vue";
import {ref} from "vue";

const isUserPopupVisible = ref(false)
const isCompanyPopupVisible = ref(false)
const isVehiclePopupVisible = ref(false)
const isPasswordPopupVisible = ref(false)
const userName = JSON.parse(sessionStorage.getItem('userData')).name
const userEmail = JSON.parse(sessionStorage.getItem('userData')).email

function toggleUserPopUp() {
  isUserPopupVisible.value = !isUserPopupVisible.value
}

function toggleCompanyPopUp() {
  isCompanyPopupVisible.value = !isCompanyPopupVisible.value
}

function toggleVehiclePopUp() {
  isVehiclePopupVisible.value = !isVehiclePopupVisible.value
}

function togglePasswordPopUp() {
  isPasswordPopupVisible.value = !isPasswordPopupVisible.value
}
</script>

<script lang="ts">
export default {
  name: "HomePageContent"
}
</script>
