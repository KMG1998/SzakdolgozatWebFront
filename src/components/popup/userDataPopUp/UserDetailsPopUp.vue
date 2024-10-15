<script setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>
<template>
  <div class="fixed top-[15%] left-[25%] flex flex-col items-center py-4 bg-white rounded-3xl z-100">

  </div>
</template>

<script>
import {defineComponent} from "vue";
import * as User from "@/types/User.ts";
import * as Vehicle from "@/types/Vehicle";
import * as Company from "@/types/Company";
import UserService from "@/services/userService";
import UserDetailsUserPage from "@/components/popup/userDataPopUp/pages/UserDetailsUserPage";
import UserDetailsVehiclePage from "@/components/popup/userDataPopUp/pages/UserDetailsVehiclePage";
import UserDetailsCompanyPage from "@/components/popup/userDataPopUp/pages/UserDetailsCompanyPage";
import vehicleService from "@/services/vehicleService";
import CompanyService from "@/services/companyService";

export default defineComponent({
  name: "UserDetailsPopUp",
  components: {UserDetailsUserPage, UserDetailsVehiclePage, UserDetailsCompanyPage},
  methods: {
    getAdditionalData: async function () {
      console.log(this.userData)
      this.vehicleData = await vehicleService.getVehicleByDriver()
      this.companyData = await CompanyService.getCompanyByWorker()
    }
  },
  props: {
    userData: User
  },
  data() {
    return {
      vehicleData: undefined,
      companyData: undefined,
    }
  },
  beforeMount() {
    this.getAdditionalData()
  },
})
</script>