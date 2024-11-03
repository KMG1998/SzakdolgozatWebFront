import {defineStore} from 'pinia'
import * as User from "@/types/User";

export const useSelectedUserStore = defineStore('selectedUser', {
  state: () => ({
    id: '',
    name:'',
    email:'',
    typeId:0,
  }),
})
