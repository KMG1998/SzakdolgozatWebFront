<template>
  <div class="fixed flex flex-col items-center py-4 bg-white rounded-3xl opacity-100 z-50">
    <form @submit.prevent>
      <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
          <div
            class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
          >
            <div class="flex flex-col grow items-stretch max-md:mt-10">
              <div class="text-xl text-black">új jármű adatai</div>
              <div class="flex flex-col items-center mt-9 max-md:pl-5">
                <label
                  for="seats"
                  class=" text-xl text-center text-black whitespace-nowrap">
                  ülések száma
                </label>
                <input id="seats"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 px-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="number"
                       placeholder="ülések száma"
                       v-model="seats"
                       v-bind="seatsProps">
                <FieldError :error="errors.seats" v-if="errors.seats && meta.touched"/>
                <label for="plateNum" class="mt-6 text-xl text-center text-black">
                  rendszám
                </label>
                <input id="plateNum"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="rendszám"
                       v-model="plateNum"
                       v-bind="plateNumProps">
                <FieldError :error="errors.plateNum" v-if="errors.plateNum && meta.touched"/>
                <label for="carType" class="mt-6 text-xl text-center text-black">
                  típus
                </label>
                <input id="carType"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="jármű típus"
                       v-model="carType"
                       v-bind="carTypeProps">
                <FieldError :error="errors.carType" v-if="errors.carType && meta.touched"/>
                <label for="airCond" class="mt-6 text-xl text-center text-black">
                  szín
                </label>
                <input id="carColor"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="jármű színe"
                       v-model="color"
                       v-bind="colorProps">
                <FieldError :error="errors.color" v-if="errors.color && meta.touched"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="self-stretch mt-9 w-full bg-black min-h-[2px] max-md:max-w-full"
      ></div>
      <button type="button"
              @click="createVehicle"
              v-if="!createInProgress"
              class="justify-center items-center px-16 py-2 mt-7 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-black border-solid w-[403px] max-md:px-5"
      >Létrehozás
      </button>
      <div v-else class="flex items-center justify-center pt-2">
        <semipolar-spinner
          :animation-duration="2000"
          :size="40"
          color="#57A3EF"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {toTypedSchema} from "@vee-validate/yup";
import {object} from "yup";
import Validators from "@/utils/valdiators";
import {useI18n} from "vue-i18n";
import {useForm} from "vee-validate";
import {ref} from "vue";
import {SemipolarSpinner} from "epic-spinners";
import FieldError from "@/components/commons/FieldError.vue";
import VehicleService from "@/services/vehicleService";
import ToastConfigs from "@/utils/toastConfigs";
import {toast} from "vue3-toastify";

const {t} = useI18n()
const validators = new Validators(t)

const schema = toTypedSchema(object({
  seats: validators.minAmount(2),
  plateNum: validators.minLength(6),
  carType: validators.minLength(3),
  color: validators.minLength(3),
}));

const {errors, meta, defineField} = useForm({validationSchema: schema})
const [seats, seatsProps] = defineField('seats')
const [plateNum, plateNumProps] = defineField('plateNum')
const [carType, carTypeProps] = defineField('carType')
const [color, colorProps] = defineField('color')
const createInProgress = ref<boolean>(false)

async function createVehicle() {
  if (meta.value.valid) {
    createInProgress.value = true
    const newVehicle = await VehicleService.createVehicle(seats.value, plateNum.value, carType.value, color.value);
    createInProgress.value = false
    if (newVehicle !== undefined) {
      toast("Sikeres létrehozás", ToastConfigs.successToastConfig)
      return
    }
    toast("Sikertelen létrehozás", ToastConfigs.errorToastConfig)
  }
}


</script>
