<template>
    <div
        class="flex flex-col h-[100vh] pb-10 justify-center items-center max-md:px-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white"
    >
      <div class="flex w-[351px] max-w-full flex-col items-center mt-7">
        <img
            loading="lazy"
            src="../assets/images/magantaxi_logo.png"
            class="aspect-square object-contain object-center w-[319px] max-w-full"
        />
        <Form>
          <div class="mt-2">
            <label for="email" class="text-black text-sm mt-14 max-md:mt-10">E-mail</label>
            <input id="email"
                   class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                   type="text"
                   placeholder="Email"
                   aria-describedby="emailHelp"
                   v-model="email">
          </div>
          <div class="mt-2">
            <label for="password" class="text-black text-sm mt-14 max-md:mt-10">Jelszó</label>
            <input id="password"
                   class="text-center shadow-sm bg-white self-stretch flex shrink-0 h-12 w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black"
                   type="password"
                   aria-describedby="passwordHelp"
                   v-model="password">
          </div>
          <input type="submit" value="Belépés" class="cursor-pointer text-black text-sm justify-center items-center bg-white w-[269px] max-w-full mt-8 px-16 py-1.5 rounded-3xl border-2 border-solid border-black max-md:px-5 hover:shadow-lg"
                 v-if="!authInProgress"
                 v-on:click="this.auth">
          <div v-else class="flex items-center justify-center pt-2">
            <semipolar-spinner
                :animation-duration="2000"
                :size="40"
                color="#57A3EF"
            />
          </div>
        </Form>
        <div
            class="text-black text-sm underline whitespace-nowrap mt-14 max-md:mt-10"
        >
          Elfelejtett jelszó
        </div>
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import UserService from "@/services/userService";
import router from "@/router";
import { SemipolarSpinner } from 'epic-spinners'
import {Form} from 'vee-validate'

export default defineComponent({
  name: "LoginView",
  components:{
    SemipolarSpinner,
    Form
  },
  methods:{
    async auth(){
      this.authInProgress = true
      console.log(this.email+','+this.password)
      const loginSuccess = await UserService.login(this.email,this.password)
      if(loginSuccess === true){
        this.authInProgress = false
        await router.push('home')
        return
      }
      this.authInProgress = false
    }
  },data: function (){
    return {
      email:'',
      password:'',
      authInProgress: false,
    }
  }
})
</script>
