<template>
  <div class="flex flex-col grow shrink-0 mt-6 whitespace-nowrap basis-0 w-fit max-md:max-w-full">
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
      <div class="max-md:max-w-full text-left">Cégek</div>
      <div>
        <DataTable :table-data="companyData" header-class="companiesTable" button-img-file-name="details_eye.png"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyService from "@/services/companyService";
import DataTable from "@/components/commons/DataTable.vue";
import {onBeforeMount, ref} from "vue";

const companyData = ref(undefined)

onBeforeMount(async () => {
  companyData.value = await CompanyService.getAllCompany()
})
</script>
