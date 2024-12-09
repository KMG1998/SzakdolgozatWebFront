import {defineStore} from 'pinia'
import * as Company  from "@/types/Company";

export const  useSelectedCompanyStore = defineStore('selectedCompany', {
  state: () => ({
    selectedCompany: undefined as Company,
    saveInProgress: false,
    editStarted: false,
    deleteStarted: false,
    unlinkStarted: false,
    popUpVisible: false,
    popUpToggleFunction:Function
  }),
})
