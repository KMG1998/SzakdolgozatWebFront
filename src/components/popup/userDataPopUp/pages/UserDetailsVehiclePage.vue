<template>
  <form>
    <div
        class="flex flex-col items-stretch w-[50%] min-w-[500px] max-md:ml-0 max-md:w-full px-[10px]"
        v-if="selectedUserStore.userVehicle !== undefined"
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
                 :value="selectedUserStore.userVehicle.seats">
          <label for="plateNum" class="mt-6 text-xl text-center text-black">
            rendszám
          </label>
          <input id="plateNum"
                 class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                 type="text"
                 placeholder="rendszám"
                 :value="selectedUserStore.userVehicle.plateNumber">
          <label for="carType" class="mt-6 text-xl text-center text-black">
            típus
          </label>
          <input id="carType"
                 class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                 type="text"
                 placeholder="jármű típus"
                 :value="selectedUserStore.userVehicle.type">
          <label for="airCond" class="mt-6 text-xl text-center text-black">
            szín
          </label>
          <input id="carColor"
                 class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                 type="text"
                 placeholder="jármű színe"
                 :value="selectedUserStore.userVehicle.color">
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col items-stretch px-[10px]">
      <div class="text-xl text-black font-bold">jármű hozzárendelése</div>
    </div>
  </form>
</template>

<script>
import {useSelectedUserStore} from "@/stores/selectedUser.ts";

export default {
  name: "UserDetailsVehiclePage",
  data: function () {
    return {
      editInProgress:false,
      selectedUserStore: useSelectedUserStore()
    }
  },
}
</script>
