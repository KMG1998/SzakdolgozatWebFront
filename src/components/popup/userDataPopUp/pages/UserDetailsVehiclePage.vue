<template>
  <div
      class="flex flex-col items-stretch ml-5 w-[50%] min-w-[450px] max-md:ml-0 max-md:w-full"
  >
    <div class="flex flex-col items-stretch max-md:mt-10">
      <div class="text-xl text-black">jármű adatai</div>
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
</template>

<script>
export default {
  name: "UserDetailsVehiclePage"
}
</script>

<style scoped>

</style>