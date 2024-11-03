<template>
  <form @submit.prevent>
    <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
        <div
          class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col grow items-stretch max-md:mt-10">
            <div class="flex flex-row justify-center items-center">
              <p class="text-xl font-bold text-black w-full">felhasználó adatai</p>
              <img src="@/assets/images/edit_button.png" class="w-[25px] h-[25px] absolute right-4 z-10" v-if="!editInProgress" @click="startEdit()" >
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
                     :readonly="!editInProgress"
                     :value="userDataStore.email">
              <label for="name" class="self-center mt-6 text-xl text-center text-black whitespace-nowrap">
                felhasználó neve
              </label>
              <input id="name"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="text"
                     placeholder="név"
                     aria-describedby="nameHelp"
                     :readonly="!editInProgress"
                     :value="userDataStore.name">
              <label for="userType" class="self-center mt-6 text-xl text-center text-black">
                típus
              </label>
              <select id="userType"
                      class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full rounded-3xl border-2 border-solid border-black text-center disabled: text-black disabled:opacity-100 disabled:appearance-none"
                      :value="userDataStore.typeId"
                      :disabled="!editInProgress"
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
      v-if="editInProgress"
    ></div>
    <div class="flex flex-row justify-around items-center">
      <button type="button"
              @click="saveUserChanges"
              v-if="editInProgress"
              class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-green-400 border-solid w-[200px] max-md:px-5"
      >Mentés
      </button>
      <button type="button"
              @click="cancelEdit()"
              v-if="editInProgress"
              class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-red-600 border-solid w-[200px] max-md:px-5"
      >Mégse</button>
    </div>
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
import UserService from "@/services/userService";
import {defineComponent} from "vue";
import {SemipolarSpinner} from 'epic-spinners'
import {useSelectedUserStore} from "@/stores/selectedUser.ts";

export default defineComponent({
  name: "UserDetailsUserPage",
  components: {SemipolarSpinner},
  methods: {
    async saveUserChanges() {
      this.saveInProgress = true;
      //const success = await UserService.updateUser(this.userDataStore.user)
      this.saveInProgress = false;
     /* if (success) {
        console.log('great success')
        return
      }
      console.log('fuckup')*/
      console.log(this.userDataStore)
    },
    startEdit(){
      console.log(this.userDataStore)
      this.editInProgress = true
    },
    cancelEdit(){
      this.editInProgress = false
      this.userDataStore.$reset()
    }
  },
  data: function () {
    return {
      editInProgress: false,
      saveInProgress: false,
      userDataStore:useSelectedUserStore(),
    }
  },
})
</script>
