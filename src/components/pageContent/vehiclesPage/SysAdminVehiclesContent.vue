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
      <div class="mt-5">keresés</div>
    </div>
    <div
        class="flex flex-col px-6 pt-8 pb-20 mt-16 rounded-3xl bg-white bg-opacity-80 max-md:pl-5 max-md:mt-10 max-md:max-w-full"
    >
      <div class="max-md:max-w-full text-left">Járművek</div>
      <div>
        <table>
          <tr>
            <th
                v-for="(header, i) in headers.default()"
                :key="`${header}${i}`"
                class="header-item"
            >
              {{ header }}
            </th>
          </tr>
          <tr
              v-for="entity in data"
              :key="`entity-${entity.id}`"
              class="table-rows"
          >
            <td
                v-for="(vehicleData, i) in entity"
                :key="`${vehicleData}-${i}`"
            >
              {{ vehicleData }}
            </td>
          </tr>
        </table>
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
      headers: {type: Array, default: () => ['id', 'seats', 'description','type','airCond','available','insuranceId','plateNumber']},
      data: {type: Array, default: () => []}
    }
  },
  methods: {
    getVehicles: async function () {
      console.log('in getvehicles')
      this.data = await VehicleService.getAllVehicles();
    },
  },
  beforeMount(){
    this.getVehicles();
  },
}
</script>

<style scoped>

</style>