<template>
  <div
    class="flex flex-col h-[100vh] pb-10 justify-start items-center max-md:px-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white"
  >
    <img
      loading="lazy"
      src="../assets/images/magantaxi_logo.png"
      class="object-contain object-center mt-7 w-[319px] max-w-full"
    />
    <form @submit.prevent>
      <div class="flex flex-col items-center justify-center mt-2">
        <label for="email" class="text-black text-m mt-14 max-md:mt-10">E-mail</label>
        <input name="email"
               class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
               type="text"
               placeholder="Email"
               v-model="email"
               v-bind="emailProps"
        />
        <FieldError :error="errors.email" v-if="errors.email && meta.touched"/>
      </div>
      <div class="flex flex-col items-center justify-center mt-4">
        <label for="password" class="text-black text-m">Jelszó</label>
        <input id="password"
               name="password"
               class="text-center shadow-sm bg-white self-stretch flex shrink-0 h-12 w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black"
               type="password"
               v-model="password"
               v-bind="passwordProps"/>
        <FieldError :error="errors.password" v-if="errors.password && meta.touched"/>
      </div>
      <button
        class="cursor-pointer text-black text-sm justify-center items-center bg-white w-[269px] max-w-full mt-8 px-16 py-1.5 rounded-3xl border-2 border-solid border-black max-md:px-5 hover:shadow-lg"
        v-if="!authInProgress"
        @click="auth">Belépés
      </button>
      <div v-else class="flex items-center justify-center pt-2">
        <semipolar-spinner
          :animation-duration="2000"
          :size="40"
          color="#57A3EF"
        />
      </div>
    </form>
    <div
      class="text-black text-sm underline whitespace-nowrap mt-14 max-md:mt-10"
    >
      Elfelejtett jelszó
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {SemipolarSpinner} from 'epic-spinners'
import {Form, useForm} from "vee-validate"
import {toTypedSchema} from '@vee-validate/yup';
import Validators from "@/utils/valdiators"
import {useI18n} from "vue-i18n"
import {object} from "yup"
import UserService from "@/services/userService";
import router from "@/router";
import FieldError from "@/components/commons/FieldError.vue";

const {t} = useI18n()
const authInProgress = ref(false)
const validators = new Validators(t)
const schema = toTypedSchema(object({
  email: validators.emailValidator(),
  password: validators.passwordValidator(),
}));

const {errors, meta, defineField} = useForm({validationSchema: schema})
const [email, emailProps] = defineField('email');
const [password, passwordProps] = defineField('password');

async function auth() {
  if (meta.value.valid) {
    authInProgress.value = true
    const loginSuccess = await UserService.login(email.value, password.value)
    if (loginSuccess === true) {
      await router.push('home')
    }
    authInProgress.value = false
  }
}

async function resetPass() {

}

</script>
