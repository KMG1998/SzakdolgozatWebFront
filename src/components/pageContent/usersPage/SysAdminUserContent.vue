<template>
  <PopUp :visibility-variable="selectedUserStore.popUpVisible" @toggle="selectedUserStore.popUpToggleFunction">
    <UserDetailsPopUp/>
  </PopUp>
  <div
    class="flex flex-col grow shrink-0 mt-6 basis-0 w-fit max-md:max-w-full"
  >
    <SearchInput
      field-id="email-search"
      placeholder="Felhasználó e-mail"
      v-model="searchValue"
      :search-function="searchUsers"
    />
    <div
      class="flex flex-col px-6 pt-8 pb-20 mt-2 rounded-3xl bg-white bg-opacity-80 max-h-[730px] max-w-[1600px] h-max mb-10 overflow-x-auto"
    >
      <div class="max-md:max-w-full text-left">Felhasználók</div>
      <div>
        <DataTable :table-data="usersData" header-class="userTable" :on-details-click="toggleDetailsPopUp"
                   :field-transformers="tableFieldTransformers"
                   button-img-file-name="details_eye.png"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserService from "@/services/userService";
import PopUp from "@/components/popup/PopUp.vue";
import UserDetailsPopUp from "@/components/popup/userDetailsPopUp/UserDetailsPopUp.vue";
import DataTable from "@/components/commons/DataTable.vue";
import SearchInput from "@/components/commons/inputs/SearchInput.vue";
import {useSelectedUserStore} from "@/stores/selectedUser.ts";
import {onBeforeMount, ref} from "vue";
import {convertUserType} from "@/utils/valueConverter";

const searchValue = ref(undefined)
const usersData = ref(undefined)
const selectedUserStore = useSelectedUserStore()

const tableFieldTransformers = {
  'typeId': (typeId) => convertUserType(typeId)
}


async function getUsers() {
  usersData.value = await UserService.getAllUsers();
}

async function searchUsers(){
  usersData.value = undefined
  usersData.value = await UserService.getAllUsers(searchValue.value);
}

function toggleDetailsPopUp(selectedUser) {
  selectedUserStore.selectedUser = selectedUser
  selectedUserStore.popUpVisible = !selectedUserStore.popUpVisible
  if (!selectedUserStore.popUpVisible) {
    searchValue.value = undefined
    getUsers()
  }
}

onBeforeMount(() =>{
  getUsers();
  selectedUserStore.popUpToggleFunction = toggleDetailsPopUp
})
</script>
