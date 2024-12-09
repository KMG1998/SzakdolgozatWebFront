<template>
  <PopUp :visibility-variable="selectedCompanyStore.popUpVisible" @toggle="selectedCompanyStore.popUpToggleFunction">
    <CompanyDetailsPopUp/>
  </PopUp>
  <div class="flex flex-col grow shrink-0 mt-6 basis-0 w-fit max-md:max-w-full">
    <SearchInput
      field-id="email-search"
      placeholder="Cég neve"
      v-model="searchValue"
      :search-function="searchCompanies"
    />
    <div
      class="flex flex-col px-6 pt-8 pb-20 mt-2 rounded-3xl bg-white bg-opacity-80 max-md:pl-5 max-md:mt-10 max-md:max-w-full"
    >
      <div class="max-md:max-w-full text-left">Cégek</div>
      <div>
        <DataTable :table-data="companyData" header-class="companiesTable" button-img-file-name="details_eye.png" :on-details-click="toggleDetailsPopUp"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyService from "@/services/companyService";
import DataTable from "@/components/commons/DataTable.vue";
import {onBeforeMount, ref} from "vue";
import {useSelectedCompanyStore} from "@/stores/selectedCompany";
import CompanyDetailsPopUp from "@/components/popup/companyDetailsPopUp/CompanyDetailsPopUp.vue";
import PopUp from "@/components/popup/PopUp.vue";
import SearchInput from "@/components/commons/inputs/SearchInput.vue";

const searchValue = ref(undefined)
const companyData = ref(undefined)
const selectedCompanyStore = useSelectedCompanyStore()

onBeforeMount(() => {
  getCompanies()
  selectedCompanyStore.popUpToggleFunction = toggleDetailsPopUp
})

async function getCompanies() {
  companyData.value = await CompanyService.getAllCompany()
}

async function searchCompanies(){
  companyData.value = undefined
  companyData.value = await CompanyService.getAllCompany(searchValue.value);
}

function toggleDetailsPopUp(selectedCompany) {
  selectedCompanyStore.selectedCompany = selectedCompany
  selectedCompanyStore.popUpVisible = !selectedCompanyStore.popUpVisible
  if (!selectedCompanyStore.popUpVisible) {
    searchValue.value = undefined
    getCompanies()
  }
}

onBeforeMount(async () => {

})
</script>
