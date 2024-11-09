import {defineStore} from 'pinia'
import * as User from "@/types/User";
import * as Vehicle from "@/types/Vehicle";
import * as Company from "@/types/Company";

export const useSelectedUserStore = defineStore('selectedUser', {
  state: () => ({
      selectedUser: undefined as User,
      userVehicle: undefined as Vehicle,
      userCompany: undefined as Company,
      saveInProgress: false,
      editStarted: false,
      deleteStarted: false,
      popUpToggleFunction:Function
  }),
})
