<template>
  <form @submit.prevent>
    <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
        <div
            class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col grow items-stretch max-md:mt-10">
            <p class="text-xl text-black">felhasználó adatai</p>
            <div class="flex flex-col items-stretch mt-9 max-md:pl-5">
              <label
                  for="email"
                  class="self-center text-xl text-center text-black whitespace-nowrap"
              >
                felhasználó e-mail
              </label>
              <input id="email"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="text"
                     placeholder="E-mail"
                     aria-describedby="emailHelp"
                     v-model="email">
              <label for="name" class="self-center mt-6 text-xl text-center text-black whitespace-nowrap">
                felhasználó neve
              </label>
              <input id="name"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="text"
                     placeholder="név"
                     aria-describedby="nameHelp"
                     v-model="nameOfUser">
              <select id="userType"
                      class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full rounded-3xl border-2 border-solid border-black text-center"
                      v-model="userType"
                      required>
                <option value=1>Rendszer adminisztrátor</option>
                <option value=2>Céges adminisztrátor</option>
                <option value=3>Magán sofőr</option>
                <option value=4>Céges sofőr</option>
                <option value=5>Utas</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="self-stretch mt-9 w-full bg-black min-h-[2px] max-md:max-w-full"
    ></div>
    <button type="button"
            @click="createUser"
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
</template>

<script>
export default {
  name: "UserDetailsPage"
}
</script>

<style scoped>

</style>