<template>
  <form>
    <div
        class="flex flex-col items-stretch w-[50%] min-w-[500px] max-md:ml-0 max-md:w-full px-[10px]"
    >
      <div class="flex flex-col items-stretch max-md:mt-10">
        <div class="text-xl text-black font-bold">jármű adatai</div>
        <div class="flex flex-col items-center mt-9">
          <label
              for="seats"
              class=" text-xl text-center text-black whitespace-nowrap"
          >
            ülések száma
          </label>
          <input id="seats"
                 class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 px-3 rounded-3xl border-2 border-solid border-black text-center"
                 type="number"
                 placeholder="ülések száma"
                 aria-describedby="seatsHelp"
                 v-model="vehicle.seats">
          <label for="plateNum" class="mt-6 text-xl text-center text-black">
            rendszám
          </label>
          <input id="plateNum"
                 class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                 type="text"
                 placeholder="rendszám"
                 aria-describedby="plateNumHelp"
                 v-model="vehicle.plateNumber">
          <label for="carType" class="mt-6 text-xl text-center text-black">
            típus
          </label>
          <input id="carType"
                 class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                 type="text"
                 placeholder="jármű típus"
                 aria-describedby="carTypeHelp"
                 v-model="vehicle.type">
          <label for="airCond" class="mt-6 text-xl text-center text-black">
            légkondi
          </label>
          <div
              id="airCond"
              class="flex gap-10 justify-center items-stretch mt-5 max-w-full"
          >
            <div>
              <label for="airCondYes" class="mt-6 text-xl text-center text-black">
                Igen
              </label>
              <input id="airCondYes" type="radio" :value=true name="airCond" class="h-[15px] w-[15px]"
                     v-model="vehicle.airCond"
                     :disabled="!editInProgress && !vehicle.airCond">
            </div>
            <div>
              <label for="airCondNo" class="mt-6 text-xl text-center text-black">
                Nem
              </label>
              <input id="airCondNo" type="radio" :value=false :disabled="!editInProgress && vehicle.airCond" name="airCond"
                     class="h-[15px] w-[15px]"
                     v-model="vehicle.airCond">
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import * as Vehicle from "@/types/Vehicle.ts";

export default {
  name: "UserDetailsVehiclePage",
  props: {
    vehicle: Vehicle
  },
  data: function () {
    return {
      editInProgress:false
    }
  },
}
</script>

<style scoped>

</style>