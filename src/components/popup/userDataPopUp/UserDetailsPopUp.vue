<template>
  <div class="fixed flex flex-col items-center py-4 bg-white rounded-3xl opacity-100 z-50">
    <div
      class="gap-5 flex flex-row mb-2 max-md:items-stretch max-md:gap-0"
      v-if="selectedUserStore.typeId === 3 || selectedUserStore.typeId === 4"
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
    <UserDetailsUserPage v-if="selectedPage === modalPages.userPage"/>
    <UserDetailsVehiclePage :vehicle=vehicleData v-if="selectedPage === modalPages.vehiclesPage"/>
    <UserDetailsCompanyPage :company=companyData v-if="selectedPage === modalPages.companyPage"/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import UserDetailsVehiclePage from "@/components/popup/userDataPopUp/pages/UserDetailsVehiclePage.vue";
import UserDetailsCompanyPage from "@/components/popup/userDataPopUp/pages/UserDetailsCompanyPage.vue";
import CompanyService from "@/services/companyService";
import VehicleService from "@/services/vehicleService";
import UserDetailsUserPage from "@/components/popup/userDataPopUp/pages/UserDetailsUserPage.vue";
import {useSelectedUserStore} from "@/stores/selectedUser.ts";

export default defineComponent({
  name: "UserDetailsPopUp",
  components: {UserDetailsUserPage, UserDetailsVehiclePage, UserDetailsCompanyPage},
  data() {
    return {
      vehicleData: undefined,
      companyData: undefined,
      modalPages: {
        userPage: UserDetailsUserPage,
        vehiclesPage: UserDetailsVehiclePage,
        companyPage: UserDetailsCompanyPage
      },
      selectedPage: undefined,
      selectedUserStore: useSelectedUserStore()
    }
  },
  methods: {
    getAdditionalData: async function () {
      this.selectedPage = this.modalPages.userPage
      if (this.selectedUserStore.typeId === 3) {
        this.vehicleData = await VehicleService.getVehicleByDriver(this.selectedUserStore.id)
      }
      if (this.selectedUserStore.typeId === 4) {
        this.vehicleData = await VehicleService.getVehicleByDriver(this.selectedUserStore.id)
        this.companyData = await CompanyService.getCompanyByWorker(this.selectedUserStore.id)
      }
    }
  },
  beforeMount() {
    this.getAdditionalData()
  },
})
</script>
