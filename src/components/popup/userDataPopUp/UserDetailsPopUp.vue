<template>
  <div class="fixed flex flex-col items-center py-4 bg-white rounded-3xl opacity-100 z-50">
    <div
        class="gap-5 flex flex-row mb-2 max-md:items-stretch max-md:gap-0"
        v-if="userData.typeId === 3 || userData.typeId === 4"
    >
      <div class="flex grow flex-col items-center" @click="selectedPage = modalPages.userPage">
        <img
            loading="lazy"
            src="@/assets/images/new_user_button.png"
            class="rounded-full border-2 border-black drop-shadow-md w-[70px] fill-white self-center cursor-pointer"
        />
      </div>
      <div
          class="flex flex-col items-stretch"
          @click="selectedPage = modalPages.companyPage"
          v-if="companyData"
      >
        <div
            class="flex grow flex-col items-center"
        >
          <img
              loading="lazy"
              src="@/assets/images/new_comp_button.png"
              class="rounded-full border-2 border-black drop-shadow-md w-[70px] fill-white self-center cursor-pointer"
          />
        </div>
      </div>
      <div
          class="flex flex-col items-stretch max-md:w-full max-md:ml-0"
          @click="selectedPage = modalPages.vehiclesPage"
      >
        <div class="flex grow flex-col items-stretch max-md:mt-10">
          <img
              loading="lazy"
              src="@/assets/images/new_vehicle_button.png"
              class="rounded-full border-2 border-black drop-shadow-md w-[70px] fill-white self-center cursor-pointer"
          />
        </div>
      </div>
    </div>
    <UserDetailsUserPage :user=userData v-if="selectedPage === modalPages.userPage"/>
    <UserDetailsVehiclePage :vehicle=vehicleData v-if="selectedPage === modalPages.vehiclesPage"/>
    <UserDetailsCompanyPage :company=companyData v-if="selectedPage === modalPages.companyPage"/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import * as User from "@/types/User.ts";
import UserDetailsVehiclePage from "@/components/popup/userDataPopUp/pages/UserDetailsVehiclePage";
import UserDetailsCompanyPage from "@/components/popup/userDataPopUp/pages/UserDetailsCompanyPage";
import CompanyService from "@/services/companyService";
import VehicleService from "@/services/vehicleService";
import {useI18n} from 'vue-i18n'
import UserDetailsUserPage from "@/components/popup/userDataPopUp/pages/UserDetailsUserPage";

let pages = {
  userPage: UserDetailsUserPage,
  vehiclesPage: UserDetailsVehiclePage,
  companyPage: UserDetailsCompanyPage
}

export default defineComponent({
  name: "UserDetailsPopUp",
  components: {UserDetailsUserPage, UserDetailsVehiclePage, UserDetailsCompanyPage},
  props: {
    userData: User,
  },
  data() {
    return {
      vehicleData: undefined,
      companyData: undefined,
      modalPages: pages,
      selectedPage: undefined,
      translate: useI18n()
    }
  },
  methods: {
    getAdditionalData: async function () {
      this.selectedPage = this.modalPages.userPage
      if (this.userData.typeId === 3) {
        this.vehicleData = await VehicleService.getVehicleByDriver(this.userData.id)
      }
      if (this.userData.typeId === 4) {
        this.vehicleData = await VehicleService.getVehicleByDriver(this.userData.id)
        this.companyData = await CompanyService.getCompanyByWorker(this.userData.id)
      }
    }
  },
  beforeMount() {
    this.getAdditionalData()
  },
})
</script>