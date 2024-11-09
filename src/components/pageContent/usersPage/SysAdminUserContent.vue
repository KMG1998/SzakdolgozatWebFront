<template>
    <PopUp :visiblity-variable="selectedUserStore.popUpVisible" @toggle="selectedUserStore.popUpToggleFunction">
      <UserDetailsPopUp/>
    </PopUp>
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
        <DataTable :table-data="usersData" header-class="userTable" :on-details-click="toggleDetailsPopUp"/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import UserService from "@/services/userService";
import PopUp from "@/components/popup/PopUp.vue";
import UserDetailsPopUp from "@/components/popup/userDataPopUp/UserDetailsPopUp.vue";
import DataTable from "@/components/commons/DataTable.vue";
import {useSelectedUserStore} from "@/stores/selectedUser.ts";

export default defineComponent({
  name: "SysAdminUsersContent",
  components:{
    PopUp,UserDetailsPopUp,DataTable
  },
  data() {
    return {
      usersData: undefined,
      selectedUserStore: useSelectedUserStore()
    }
  },
  methods: {
    getUsers: async function () {
      this.usersData = await UserService.getAllUsers();
    },
    toggleDetailsPopUp: function(selectedUser) {
      this.selectedUserStore.selectedUser = selectedUser
      this.selectedUserStore.popUpVisible = !this.selectedUserStore.popUpVisible
      if(!this.selectedUserStore.popUpVisible){
        this.getUsers()
      }
    }

  },
  beforeMount() {
    this.getUsers();
    this.selectedUserStore.popUpToggleFunction = this.toggleDetailsPopUp
  },
})
</script>
