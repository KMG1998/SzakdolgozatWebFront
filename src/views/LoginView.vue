<template>
    <div
        class="flex flex-col justify-center items-center px-16 py-12 max-md:px-5 bg-gradient-to-b from-taxi-blue via-taxi-to-color via-75% to-white"
    >
      <div class="flex w-[351px] max-w-full flex-col items-center mt-7">
        <img
            loading="lazy"
            src="../assets/images/magantaxi_logo.png"
            class="aspect-square object-contain object-center w-[319px] max-w-full"
        />
        <Form @submit="auth">
          <div>
            <label for="email" class="text-black text-sm mt-14 max-md:mt-10">E-mail</label>
            <input id="email"
                   class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                   type="text"
                   placeholder="Email"
                   aria-describedby="emailHelp"
                   v-model="email">
          </div>
          <div>
            <label for="password" class="text-black text-sm mt-14 max-md:mt-10">Jelszó</label>
            <input id="password"
                   class="text-center shadow-sm bg-white self-stretch flex shrink-0 h-12 w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black"
                   type="password"
                   aria-describedby="passwordHelp"
                   v-model="password">
          </div>
          <input type="submit" value="Belépés" class="cursor-pointer text-black text-sm justify-center items-center bg-white w-[269px] max-w-full mt-8 px-16 py-1.5 rounded-3xl border-2 border-solid border-black max-md:px-5 hover:shadow-lg">
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

export default defineComponent({
  name: "LoginView",
  methods:{
    auth(){
      if(UserService.login(this.email,this.password) != null){
        router.push('syshome')
      }
    }
  },data: function (){
    return {
      email:'',
      password:''
    }
  }
})
</script>

<style scoped>

</style>