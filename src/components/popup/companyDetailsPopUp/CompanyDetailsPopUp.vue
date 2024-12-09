<template>
  <div v-if="!selectedCompanyStore.saveInProgress"
       class="fixed flex flex-col items-center py-4 bg-white rounded-3xl opacity-100 z-50">
    <form @submit.prevent class="flex flex-col" v-if="!selectedCompanyStore.deleteStarted">
      <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
          <div
            class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
          >
            <div class="flex flex-col grow items-stretch max-md:mt-10">
              <p class="text-xl text-black">cég adatai</p>
              <div
                class="w-[40px] h-[40px] absolute right-4 z-10 bg-white border-solid rounded-full border-black border-2 p-[5px] cursor-pointer"
                v-if="!selectedCompanyStore.editStarted && !selectedCompanyStore.deleteStarted">
                <img src="@/assets/images/edit_button.png"
                     @click="selectedCompanyStore.editStarted = true">
              </div>
              <div
                class="w-[40px] h-[40px] absolute left-4 z-10 bg-white border-solid rounded-full border-black border-2 p-[5px] cursor-pointer"
                v-if="!selectedCompanyStore.editStarted && !selectedCompanyStore.deleteStarted">
                <img src="@/assets/images/delete_button.png"
                     @click="selectedCompanyStore.deleteStarted = true">
              </div>
              <div class="flex flex-col items-stretch mt-9 max-md:pl-5">
                <DataWithLabel
                label="cég azonosító"
                :data="selectedCompanyStore.selectedCompany.id"
                />
                <InputField
                  field-id="companyEmail"
                  label="céges e-mail"
                  type="email"
                  v-model=officeEmail
                  v-bind=officeEmailProps
                  :meta="meta"
                  :error="errors.companyEmail"
                  :readonly="!selectedCompanyStore.editStarted"
                />
                <InputField
                  field-id="companyName"
                  label="cég neve"
                  type="text"
                  v-model=companyName
                  v-bind=companyNameProps
                  :meta="meta"
                  :error="errors.companyName"
                  :readonly="!selectedCompanyStore.editStarted"
                />
                <InputField
                  field-id="companyName"
                  label="cég telefonszáma"
                  type="tel"
                  v-model=officeTel
                  v-bind=officeTelProps
                  :meta="meta"
                  :error="errors.companyPhone"
                  :readonly="!selectedCompanyStore.editStarted"
                />
                <InputField
                  field-id="companyAddress"
                  label="cég telephelye"
                  type="text"
                  v-model=officeAddress
                  v-bind=officeAddressProps
                  :meta="meta"
                  :error="errors.companyAddress"
                  :readonly="!selectedCompanyStore.editStarted"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="self-stretch mt-9 w-full bg-black min-h-[2px] max-md:max-w-full"
        v-if="selectedCompanyStore.editStarted"
      ></div>
      <div class="flex flex-row justify-around items-center" v-if="selectedCompanyStore.editStarted">
        <button type="button"
                @click="updateCompany"
                class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-green-400 border-solid w-[200px] max-md:px-5"
        >Mentés
        </button>
        <button type="button"
                @click="cancelEdit"
                class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-red-600 border-solid w-[200px] max-md:px-5"
        >Mégse
        </button>
      </div>
    </form>
    <div v-else class="flex flex-col justify-around items-center px-2">
      <p class="text-xl font-bold text-black w-full">Biztos törli a céget?</p>
      <div class="flex flex-row w-full justify-around gap-2">
        <button type="button"
                @click="deleteCompany"
                class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-warning-red rounded-3xl border-2 border-black border-solid"
        >Törlés
        </button>
        <button type="button"
                @click="selectedCompanyStore.deleteStarted = false"
                class="justify-center items-center px-16 py-2 mt-3 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-black border-solid"
        >Mégse
        </button>
      </div>
    </div>
  </div>
  <div v-else class="fixed flex items-center bg-white rounded-full p-2 justify-center opacity-100 z-50">
    <semipolar-spinner
      :animation-duration="2000"
      :size="70"
      color="#57A3EF"
    />
  </div>
</template>
<script setup lang="ts">
import {SemipolarSpinner} from 'epic-spinners'
import {useSelectedCompanyStore} from "@/stores/selectedCompany";
import {useI18n} from "vue-i18n";
import {toTypedSchema} from "@vee-validate/yup";
import Validators from "@/utils/valdiators";
import {useForm} from "vee-validate";
import {object} from "yup";
import InputField from "@/components/commons/inputs/InputField.vue";
import {toast, ToastOptions} from "vue3-toastify";
import ToastConfigs from "@/utils/toastConfigs";
import CompanyService from "@/services/companyService";
import * as Company from "@/types/Company";
import DataWithLabel from "@/components/commons/DataWithLabel.vue";

const {t} = useI18n()
const selectedCompanyStore = useSelectedCompanyStore()
const schema = toTypedSchema(object({
  officeEmail: Validators.emailValidator(),
  companyName: Validators.minLength(3),
  officeTel: Validators.phoneValidator(),
  officeAddress: Validators.minLength(6)
}));

const {errors, meta, defineField} = useForm({validationSchema: schema})
const [officeEmail, officeEmailProps] = defineField('officeEmail')
const [companyName, companyNameProps] = defineField('companyName')
const [officeTel, officeTelProps] = defineField('officeTel')
const [officeAddress, officeAddressProps] = defineField('officeAddress')

officeEmail.value = selectedCompanyStore.selectedCompany.officeEmail
companyName.value = selectedCompanyStore.selectedCompany.companyName
officeTel.value = selectedCompanyStore.selectedCompany.officeTel
officeAddress.value = selectedCompanyStore.selectedCompany.officeAddress

async function updateCompany() {
  selectedCompanyStore.saveInProgress = true;
  const newData = {
    id: selectedCompanyStore.selectedCompany.id,
    companyEmail: officeEmail.value,
    companyName: companyName.value,
    officeTel: officeTel.value,
    officeAddress: officeAddress.value
  } as Company
  const updatedUser = await CompanyService.updateCompany(newData)
  selectedCompanyStore.saveInProgress = false;
  if (updatedUser) {
    selectedCompanyStore.selectedUser = updatedUser
    selectedCompanyStore.editStarted = false
    toast(t('toastMessages.saveSuccess'), ToastConfigs.successToastConfig as ToastOptions)
    return
  }
  toast(t('toastMessages.saveFail'), ToastConfigs.errorToastConfig)
}

async function deleteCompany() {
  selectedCompanyStore.saveInProgress = true;
  const deleteSuccess = await CompanyService.deleteCompany(selectedCompanyStore.selectedCompany.id)
  selectedCompanyStore.saveInProgress = false
  if (deleteSuccess) {
    selectedCompanyStore.popUpToggleFunction()
    toast(t('toastMessages.deleteSuccess'), ToastConfigs.successToastConfig as ToastOptions)
    selectedCompanyStore.$reset()
    return
  }
  selectedCompanyStore.deleteStarted.value = false;
  toast(t('toastMessages.deleteFail'), ToastConfigs.errorToastConfig)
}

function cancelEdit() {
  selectedCompanyStore.editStarted = false
  officeEmail.value = selectedCompanyStore.selectedCompany.officeEmail
  companyName.value = selectedCompanyStore.selectedCompany.companyName
  officeTel.value = selectedCompanyStore.selectedCompany.officeTel
  officeAddress.value = selectedCompanyStore.selectedCompany.officeAddress
}

</script>
