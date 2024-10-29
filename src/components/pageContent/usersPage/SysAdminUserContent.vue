<script setup>
import {SemipolarSpinner} from 'epic-spinners'
import DataTable from "@/components/commons/dataTable.vue";

</script>
<template>
    <PopUp :visiblity-variable="isDetailsPopUpVisible" @toggle="toggleDetailsPopUp">
      <UserDetailsPopUp :userData="selectedUser"/>
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
        <DataTable :table-data="userData" header-class="userTable" />
        <div v-if="loading" class="flex items-center justify-center pt-2">
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
import PopUp from "@/components/popup/PopUp.vue";
import UserDetailsPopUp from "@/components/popup/userDataPopUp/UserDetailsPopUp.vue";

export default defineComponent({
  name: "SysAdminUsersContent",
  components:{
    PopUp,UserDetailsPopUp
  },
  data() {
    return {
      headers: ['id', 'name', 'typeId', 'email'],
      userData: undefined,
      isDetailsPopUpVisible: false,
      selectedUser: String,
      loading: true
    }
  },
  methods: {
    getUsers: async function () {
      this.userData = await UserService.getAllUsers();
      this.loading = false
    },
    toggleDetailsPopUp(selectedUser) {
      this.selectedUser = selectedUser
      this.isDetailsPopUpVisible = !this.isDetailsPopUpVisible
    }

  },
  beforeMount() {
    this.getUsers();
  },
})
</script>
