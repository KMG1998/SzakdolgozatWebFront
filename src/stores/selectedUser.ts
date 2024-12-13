import {defineStore} from 'pinia'
import * as User from "@/types/User";
import * as Vehicle from "@/types/Vehicle";
import * as Company  from "@/types/Company";
import {ref} from "vue";
import * as Review from "@/types/Review";

export const useSelectedUserStore = defineStore('selectedUser', {
  state: () => ({
    selectedUser: undefined as User,
    userVehicle: undefined as Vehicle,
    userCompany: undefined as Company,
    userReviews: undefined as Array<Review>,
    saveInProgress: false,
    editStarted: ref(false),
    deleteStarted: false,
    unlinkStarted: false,
    popUpVisible: false,
    popUpToggleFunction: Function
  }),
})
