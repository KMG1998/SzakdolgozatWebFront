import {defineStore} from 'pinia'
import * as Order from "@/types/Order";
import * as User from "@/types/User";

export const  useSelectedOrderStore = defineStore('selectedOrder', {
  state: () => ({
    selectedOrder: undefined as Order,
    orderDriver: undefined as User,
    orderPassenger: undefined as User,
    popUpVisible: false,
    popUpToggleFunction:Function
  }),
})
