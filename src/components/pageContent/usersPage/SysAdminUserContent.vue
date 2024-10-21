<script setup>
import {useI18n} from 'vue-i18n'
import { SemipolarSpinner  } from 'epic-spinners'
import UserDetailsPopUp from "@/components/popup/userDataPopUp/UserDetailsPopUp";

const {t} = useI18n()
</script>
<template>
  <div v-if="isDetailsPopUpVisible" class="fixed z-10 w-full h-full flex items-center justify-center">
    <div @click="toggleDetailsPopUp" class="bg-gray-500 opacity-60 w-full h-full"/>
    <UserDetailsPopUp :userData="selectedUser"/>
  </div>
  <div
      class="flex flex-col grow shrink-0 mt-6 whitespace-nowrap basis-0 w-fit max-md:max-w-full"
  >
    <div class="flex flex-col ml-6 max-w-full w-[100px] max-md:ml-2.5">
      <img
          loading="lazy"
          src="@/assets/images/search_button.png"
          class="self-center w-full aspect-square fill-white"
      />
    </div>
    <div
        class="flex flex-col px-6 pt-8 pb-20 mt-16 rounded-3xl bg-white bg-opacity-80 max-md:pl-5 max-md:mt-10 max-md:max-w-full"
    >
      <div class="max-md:max-w-full text-left">Felhasználók</div>
      <div>
        <table v-if="userData !== undefined ">
          <thead>
          <tr>
            <th v-for="(header, i) in headers" :key="`${header}${i}`" class="header-item">
              {{ t('tableHeaders.userTable.' + header) }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="entity in userData" :key="`entity-${entity.id}`" class="table-rows">
            <td v-for="(userData, i) in [entity.id,entity.name,entity.typeId,entity.email]" :key="`${userData}-${i}`">
              {{ userData }}
            </td>
            <td>
              <img
                  loading="lazy"
                  src="@/assets/images/details_eye.png"
                  class="object-contain object-center w-[30px] fill-white self-center max-w-full cursor-pointer"
                  @click='toggleDetailsPopUp(entity)'
              />
            </td>
          </tr>
          </tbody>
        </table>
        <div v-else class="flex items-center justify-center pt-2">
          <semipolar-spinner
              :animation-duration="2000"
              :size="80"
              color="#57A3EF"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import UserService from "@/services/userService";

export default defineComponent({
  name: "SysAdminUsersContent",
  data() {
    return {
      headers: ['id', 'name', 'typeId', 'email'],
      userData: undefined,
      isDetailsPopUpVisible:false,
      selectedUser:String
    }
  },
  methods: {
    getUsers: async function () {
      this.userData = await UserService.getAllUsers();
    },
    toggleDetailsPopUp(selectedUser){
      this.selectedUser = selectedUser
      this.isDetailsPopUpVisible = !this.isDetailsPopUpVisible
    }

  },
  beforeMount() {
    this.getUsers();
  },
})
</script>