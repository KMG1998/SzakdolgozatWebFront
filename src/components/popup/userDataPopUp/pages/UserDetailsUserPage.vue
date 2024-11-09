<template>
  <form @submit.prevent class="flex flex-col" v-if="!userDataStore.deleteStarted">
    <div
      class="flex self-stretch min-w-[500px] max-w-[1100px] px-[10px] gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
      <div
        class="flex flex-col items-stretch w-full max-md:ml-0 max-md:w-full"
      >
        <div class="flex flex-col grow items-stretch max-md:mt-10">
          <div class="flex flex-row justify-center items-center">
            <p class="text-xl font-bold text-black w-full">felhasználó adatai</p>
            <div
              class="w-[40px] h-[40px] absolute right-4 z-10 bg-white border-solid rounded-full border-black border-2 p-[5px] cursor-pointer"
              v-if="!userDataStore.editStarted && !userDataStore.deleteStarted">
              <img src="@/assets/images/edit_button.png"
                   @click="userDataStore.editStarted = true">
            </div>
            <div
              class="w-[40px] h-[40px] absolute left-4 z-10 bg-white border-solid rounded-full border-black border-2 p-[5px] bg-red-500 cursor-pointer"
              v-if="!userDataStore.editStarted && !userDataStore.deleteStarted">
              <img src="@/assets/images/delete_button.png"
                   @click="userDataStore.deleteStarted = true">
            </div>
          </div>
          <div class="flex flex-col items-stretch mt-3 max-md:pl-5">
            <label class="self-center text-center text-xl text-black  whitespace-nowrap">
              ID
            </label>
            <label class="mt-3 text-center">
              {{userDataStore.selectedUser.id}}
            </label>
          </div>
          <div class="flex flex-col items-stretch mt-3 max-md:pl-5">
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
                   :readonly="!userDataStore.editStarted"
                   v-model="userEmail"
            >
            <label for="name" class="self-center mt-6 text-xl text-center text-black whitespace-nowrap">
              felhasználó neve
            </label>
            <input id="name"
                   class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                   type="text"
                   placeholder="név"
                   aria-describedby="nameHelp"
                   :readonly="!userDataStore.editStarted"
                   :value="userName">
            <label for="userType" class="self-center mt-6 text-xl text-center text-black">
              típus
            </label>
            <select id="userType"
                    class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full rounded-3xl border-2 border-solid border-black text-center disabled: text-black disabled:opacity-100 disabled:appearance-none"
                    :value="userType"
                    :disabled="!userDataStore.editStarted"
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
    <div
      class="self-stretch mt-9 w-full bg-black min-h-[2px] max-md:max-w-full"
      v-if="userDataStore.editStarted"
    ></div>
    <div class="flex flex-row justify-around items-center" v-if="userDataStore.editStarted">
      <button type="button"
              @click="saveUserChanges"
              class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-green-400 border-solid w-[200px] max-md:px-5"
      >Mentés
      </button>
      <button type="button"
              @click="userDataStore.editStarted = false"
              class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-red-600 border-solid w-[200px] max-md:px-5"
      >Mégse
      </button>
    </div>
  </form>
  <div v-else class="flex flex-col justify-around items-center px-2">
    <p class="text-xl font-bold text-black w-full">Biztos törli a felhasználót?</p>
    <div class="flex flex-row w-full justify-around gap-2">
      <button type="button"
              @click="deleteUser"
              class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-red-400 rounded-3xl border-2 border-black border-solid"
      >Törlés
      </button>
      <button type="button"
              @click="userDataStore.deleteStarted = false"
              class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-black border-solid"
      >Mégse
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {useSelectedUserStore} from "@/stores/selectedUser.ts";
import UserService from "@/services/userService.ts";
import * as User from "@/types/User";
import {toast, ToastOptions} from "vue3-toastify";
import ToastConfigs from "@/utils/toastConfigs";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const userDataStore = useSelectedUserStore()
const userEmail = ref<string>(userDataStore.selectedUser.email)
const userName = ref<string>(userDataStore.selectedUser.name)
const userType = ref<number>(userDataStore.selectedUser.typeId)

async function saveUserChanges() {
  userDataStore.saveInProgress = true;
  const newData = {
    id: userDataStore.selectedUser.id,
    email: userEmail.value,
    name: userName.value,
    typeId: userType.value
  } as User
  const updatedUser = await UserService.updateUser(newData)
  userDataStore.saveInProgress = false;
  if (updatedUser) {
    userDataStore.selectedUser = updatedUser
    toast(t('toastMessages.saveSuccess'), ToastConfigs.successToastConfig as ToastOptions)
    return
  }
  toast(t('toastMessages.saveFail'), ToastConfigs.errorToastConfig as ToastOptions)
}

async function deleteUser() {
  userDataStore.saveInProgress = true;
  const deleteSuccess = await UserService.deleteUser(userDataStore.selectedUser.id)
  userDataStore.saveInProgress = false
  if (deleteSuccess) {
    userDataStore.popUpToggleFunction()
    toast(t('toastMessages.deleteSuccess'), ToastConfigs.successToastConfig as ToastOptions)
    userDataStore.$reset()
    return
  }
  deleteStarted.value = false;
  toast(t('toastMessages.deleteFail'), ToastConfigs.errorToastConfig as ToastOptions)
}

</script>
