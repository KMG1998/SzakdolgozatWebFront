<template>
  <div class="fixed top-[15%] left-[25%] flex flex-col items-center py-4 bg-white rounded-3xl z-100">
    <form @submit.prevent>
      <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
          <div
              class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
          >
            <div class="flex flex-col grow items-stretch max-md:mt-10">
              <div class="text-xl text-black">új jármű adatai</div>
              <div class="flex flex-col items-center mt-9 max-md:pl-5">
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
                       v-model="seats">
                <label for="plateNum" class="mt-6 text-xl text-center text-black">
                  rendszám
                </label>
                <input id="plateNum"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="rendszám"
                       aria-describedby="plateNumHelp"
                       v-model="plateNum">
                <label for="carType" class="mt-6 text-xl text-center text-black">
                  típus
                </label>
                <input id="carType"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="jármű típus"
                       aria-describedby="carTypeHelp"
                       v-model="carType">
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
                    <input id="airCondYes" type="radio" :value=1 name="airCond" class="h-[15px] w-[15px]"
                           v-model="airCond">
                  </div>
                  <div>
                    <label for="airCondNo" class="mt-6 text-xl text-center text-black">
                      Nem
                    </label>
                    <input id="airCondNo" type="radio" :value=0 name="airCond" class="h-[15px] w-[15px]"
                           v-model="airCond">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
          class="self-stretch mt-9 w-full bg-black min-h-[2px] max-md:max-w-full"
      ></div>
      <button type="button"
              @click="createVehicle"
              v-if="!createInProgress"
              class="justify-center items-center px-16 py-2 mt-7 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-black border-solid w-[403px] max-md:px-5"
      >Létrehozás
      </button>
      <div v-else class="flex items-center justify-center pt-2">
        <semipolar-spinner
            :animation-duration="2000"
            :size="40"
            color="#57A3EF"
        />
      </div>
    </form>
  </div>
</template>

<script>
import VehicleService from "@/services/vehicleService";

export default {
  name: "CreateVehiclePopup",
  methods: {
    async createVehicle() {
      const newVehicle = await VehicleService.createVehicle(this.seats, this.plateNum, this.carType, this.airCond);
      console.log(newVehicle)
      if (newVehicle !== undefined) {
        this.createInProgress = false
        alert("Sikeres létrehozás")
      }
    }
  },
  data: function () {
    return {
      createInProgress: false,
      seats: undefined,
      plateNum: undefined,
      carType: undefined,
      airCond: undefined,
    }
  }
}
</script>

<style scoped>

</style>
