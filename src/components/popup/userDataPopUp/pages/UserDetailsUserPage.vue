<script setup>
import {useI18n} from 'vue-i18n'
import {SemipolarSpinner} from 'epic-spinners'

const {t} = useI18n()
</script>
<template>
  <form @submit.prevent>
    <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
        <div
            class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col grow items-stretch max-md:mt-10">
            <p class="text-xl font-bold text-black">felhasználó adatai</p>
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
                     :readonly="!this.editInProgress"
                     v-model="this.userData.email">
              <label for="name" class="self-center mt-6 text-xl text-center text-black whitespace-nowrap">
                felhasználó neve
              </label>
              <input id="name"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="text"
                     placeholder="név"
                     aria-describedby="nameHelp"
                     :readonly="!this.editInProgress"
                     v-model="this.userData.name">
              <label for="userType" class="self-center mt-6 text-xl text-center text-black">
                típus
              </label>
              <select id="userType"
                      class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full rounded-3xl border-2 border-solid border-black text-center disabled: text-black disabled:opacity-100 disabled:appearance-none"
                      v-model="this.userData.typeId"
                      :disabled="!this.editInProgress"
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
        v-if="saveInProgress || editInProgress"
    ></div>
    <button type="button"
            @click="saveUserChanges"
            v-if="editInProgress"
            class="justify-center items-center px-16 py-2 mt-7 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-black border-solid w-[403px] max-md:px-5"
    >Mentés
    </button>
    <div v-if="saveInProgress" class="flex items-center justify-center pt-2">
      <semipolar-spinner
          :animation-duration="2000"
          :size="40"
          color="#57A3EF"
      />
    </div>
  </form>
</template>

<script>

import * as User from "@/types/User";
import UserService from "@/services/userService";

export default {
  name: "UserDetailsUserPage",
  props: {
    user: User,
  },
  methods:{
    async saveUserChanges(){
      this.saveInProgress = true;
      const success = await UserService.updateUser(this.userData)
      this.saveInProgress = false;
      if(success){
        console.log('great success')
        return
      }
      console.log('fuckup')
    }
  },
  data: function () {
    return {
      userData: this.user,
      editInProgress: true,
      saveInProgress: false,
    }
  },
}
</script>