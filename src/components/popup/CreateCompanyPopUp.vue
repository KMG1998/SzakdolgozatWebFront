<template>
  <div class="fixed flex flex-col items-center py-4 bg-white rounded-3xl opacity-100 z-50">
    <form @submit.prevent>
      <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
          <div
            class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
          >
            <div class="flex flex-col grow items-stretch max-md:mt-10">
              <p class="text-xl text-black">új cég adatai</p>
              <div class="flex flex-col items-stretch mt-9 max-md:pl-5">
                <label
                  for="email"
                  class="self-center text-xl text-center text-black whitespace-nowrap"
                >
                  cég e-mail
                </label>
                <input id="email"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="E-mail"
                       v-model="email">
                <label for="name" class="self-center mt-6 text-xl text-center text-black whitespace-nowrap">
                  cég neve
                </label>
                <input id="name"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="név"
                       v-model="name">
                <label
                  class="self-center mt-6 text-xl text-center text-black whitespace-nowrap"
                >
                  cég telefonszám
                </label>
                <input id="phone"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="phone"
                       placeholder="telefon"
                       v-model="phone">
                <label
                  class="self-center mt-6 text-xl text-center text-black whitespace-nowrap"
                >
                  cég telephelye
                </label>
                <input id="phone"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="telephely"
                       v-model="address">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="self-stretch mt-9 w-full bg-black min-h-[2px] max-md:max-w-full"
      ></div>
      <button type="button"
              @click="createCompany"
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

<script setup>
import CompanyService from "@/services/companyService";
import {ref} from "vue";
import {SemipolarSpinner} from 'epic-spinners'

async function createCompany() {
  createInProgress.value = true
  const newCompany = await CompanyService.createCompany(this.name, this.address, this.phone, this.email);
  console.log(newCompany)
  createInProgress.value = false
}


const createInProgress = ref(false)
const email = ref('')
const name = ref('')
const phone = ref('')
const address = ref('')
</script>
