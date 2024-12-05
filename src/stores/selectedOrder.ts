import {defineStore} from 'pinia'
import * as Order from "@/types/Order";
import * as User from "@/types/User";

export const useSelectedUserStore = defineStore('selectedUser', {
  state: () => ({
    selectedOrder: undefined as Order,
    orderDriver: undefined as User,
    orderPassenger: undefined as User,
    popUpToggleFunction:Function
  }),
})
