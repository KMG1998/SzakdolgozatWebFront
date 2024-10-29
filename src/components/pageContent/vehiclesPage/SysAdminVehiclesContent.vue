<script setup>
import { SemipolarSpinner  } from 'epic-spinners'
</script>
<template>
  <div
      class="flex flex-col grow shrink-0 mt-6 whitespace-nowrap basis-0 w-fit max-md:max-w-full"
  >
    <div class="flex flex-col ml-6 max-w-full w-[100px] max-md:ml-2.5">
      <img
          loading="lazy"
          src="@/assets/images/search_button.png"
          class="self-center w-full aspect-square fill-white"
      />
    </div>
    <div
        class="flex flex-col px-6 pt-8 pb-20 mt-16 rounded-3xl bg-white bg-opacity-80 max-md:pl-5 max-md:mt-10 max-md:max-w-full"
    >
      <div class="max-md:max-w-full text-left">Járművek</div>
      <div>
        <table v-if="vehicleData !== undefined ">
          <thead>
          <tr>
            <th v-for="(header, i) in headers" :key="`${header}${i}`" class="header-item">
              {{ t('tableHeaders.vehicleTable.'+header) }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="entity in vehicleData" :key="`entity-${entity.id}`" class="table-rows">
            <td v-for="(vehicleData, i) in entity" :key="`${vehicleData}-${i}`">
              {{ vehicleData }}
            </td>
          </tr>
          </tbody>
        </table>
        <div v-else class="flex items-center justify-center pt-2">
          <semipolar-spinner
              :animation-duration="2000"
              :size="80"
              color="#57A3EF"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VehicleService from "@/services/vehicleService";

export default {
  name: "SysAdminVehiclesContent",
  data() {
    return {
      headers: ['id', 'seats', 'description','type','airCond','available','insuranceId','plateNumber'],
      vehicleData: undefined
    }
  },
  methods: {
    getVehicles: async function () {
      await new Promise(res => setTimeout(res, 3000))
      this.vehicleData = await VehicleService.getAllVehicles();
    },
  },
  beforeMount(){
    this.getVehicles();
  },
}
</script>

<style scoped>

</style>
