<script setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>
<template>
  <div class="fixed top-[15%] left-[25%] flex flex-col items-center py-4 bg-white rounded-3xl z-100">
      <UserDetailsUserPage :user=this.userData />
  </div>
</template>

<script>
import {defineComponent} from "vue";
import * as User from "@/types/User.ts";
import UserDetailsUserPage from "@/components/popup/userDataPopUp/pages/UserDetailsUserPage";
import UserDetailsVehiclePage from "@/components/popup/userDataPopUp/pages/UserDetailsVehiclePage";
import UserDetailsCompanyPage from "@/components/popup/userDataPopUp/pages/UserDetailsCompanyPage";
import CompanyService from "@/services/companyService";
import VehicleService from "@/services/vehicleService";
import * as Vehicle from "@/types/Vehicle";
import * as Company from "@/types/Company";

export default defineComponent({
  name: "UserDetailsPopUp",
  components: {UserDetailsUserPage, UserDetailsVehiclePage, UserDetailsCompanyPage},
  methods: {
      getAdditionalData: async function () {
      if(this.userData.typeId == 3){
        this.vehicleData = await VehicleService.getVehicleByDriver(this.userData.id)
      }
      if(this.userData.typeId == 4){
        this.vehicleData = await VehicleService.getVehicleByDriver(this.userData.id)
        this.companyData = await CompanyService.getCompanyByWorker(this.userData.id)
      }
    }
  },
  props: {
    userData: User
  },
  data() {
    return {
      vehicleData: Vehicle,
      companyData: Company,
    }
  },
  beforeMount() {
    this.getAdditionalData()
    console.log(this.vehicleData)
  },
})
</script>