<template>
  <div class="fixed top-[15%] left-[25%] flex flex-col items-center py-4 bg-white rounded-3xl z-100">
    <Form @submit="createUser">
    <div class="w-full min-w-[500px] max-w-[1100px] max-md:max-w-full px-[10px]">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch text-center">
        <div
            class="flex flex-col items-stretch w-[100%] min-w-[450px] max-md:ml-0 max-md:w-full"
        >
          <div class="flex flex-col grow items-stretch max-md:mt-10">
            <p class="text-xl text-black">új felhasználó adatai</p>
            <div class="flex flex-col items-stretch mt-9 max-md:pl-5">
              <label
                  for="email"
                  class="self-center text-xl text-center text-black whitespace-nowrap"
              >
                felhasználó e-mail
              </label>
              <input id="email"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="text"
                     placeholder="E-mail"
                     aria-describedby="emailHelp"
                     v-model="email">
              <label for="name" class="self-center mt-6 text-xl text-center text-black whitespace-nowrap">
                felhasználó neve
              </label>
              <input id="name"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="text"
                     placeholder="név"
                     aria-describedby="nameHelp"
                     v-model="nameOfUser">
              <label
                  class="self-center mt-6 text-xl text-center text-black whitespace-nowrap"
              >
                első jelszó
              </label>
              <input id="passw"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="password"
                     placeholder="jelszó"
                     aria-describedby="passwordHelp"
                     v-model="passw">
              <label for="userType" class="self-center mt-6 text-xl text-center text-black">
                típus
              </label>
              <select id="userType"
                      class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full rounded-3xl border-2 border-solid border-black text-center"
                      v-model="userType"
                      required>
                <option disabled value=0>Kérjük válasszon típust</option>
                <option value=1>Rendszer adminisztrátor</option>
                <option value=2>Céges adminisztrátor</option>
                <option value=3>Magán sofőr</option>
                <option value=4>Céges sofőr</option>
                <option value=5>Utas</option>
              </select>
            </div>
          </div>
        </div>
        <div
            class="flex flex-col items-stretch ml-5 w-[50%] min-w-[450px] max-md:ml-0 max-md:w-full"
            v-if="userType === 3"
        >
          <div class="flex flex-col items-stretch max-md:mt-10">
            <div class="text-xl text-black">új jármű adatai</div>
            <div class="flex flex-col items-center mt-9 max-md:pl-5">
                <label
                    for="seats"
                    class=" text-xl text-center text-black whitespace-nowrap"
                >
                  ülések száma
                </label>
                <input id="seats"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 px-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="number"
                       placeholder="ülések száma"
                       aria-describedby="seatsHelp"
                       v-model="seats">
                <label for="plateNum" class="mt-6 text-xl text-center text-black">
                  rendszám
                </label>
                <input id="plateNum"
                       class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                       type="text"
                       placeholder="rendszám"
                       aria-describedby="plateNumHelp"
                       v-model="plateNum">
              <label for="carType" class="mt-6 text-xl text-center text-black">
                típus
              </label>
              <input id="carType"
                     class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full flex-col mt-3 rounded-3xl border-2 border-solid border-black text-center"
                     type="text"
                     placeholder="jármű típus"
                     aria-describedby="carTypeHelp"
                     v-model="carType">
                <label for="airCond" class="mt-6 text-xl text-center text-black">
                  légkondi
                </label>
                <div
                    id="airCond"
                    class="flex gap-10 justify-center items-stretch mt-5 max-w-full"
                >
                  <div>
                    <label for="airCondYes" class="mt-6 text-xl text-center text-black">
                      Igen
                    </label>
                    <input id="airCondYes" type="radio" :value=1 name="airCond" class="h-[15px] w-[15px]" v-model="airCond">
                  </div>
                  <div>
                    <label for="airCondNo" class="mt-6 text-xl text-center text-black">
                      Nem
                    </label>
                    <input id="airCondNo" type="radio" :value=0 name="airCond" class="h-[15px] w-[15px]" v-model="airCond">
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="self-stretch mt-9 w-full bg-black min-h-[2px] max-md:max-w-full"
    ></div>
    <input type="submit"
           name="Létrehozás"
        class="justify-center items-center px-16 py-2 mt-7 max-w-full text-xl text-black bg-white rounded-3xl border-2 border-black border-solid w-[403px] max-md:px-5"
    >
    </Form>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import UserService from "@/services/userService";
import VehicleService from "@/services/vehicleService";

export default defineComponent({
  name: "CreateUserPopUp",
  methods:{
    async createUser(){
      let newUser = await UserService.createUser(this.email,this.passw,this.nameOfUser,this.userType);
      console.log(newUser)
      if(this.userType === 3 && newUser !== undefined){
        let newVehicle = await VehicleService.createVehicle(this.seats,this.plateNum,this.carType,this.airCond);
        if(newVehicle !== undefined){
          let resp = await VehicleService.connectUserToVehicle(newUser.id,newVehicle.id)
          if(resp === 200){
            alert("Sikeres létrehozás")
          }
        }
      }
    }
  },
  data: function () {
    return {
      userType: 0,
      passw: "",
      email: "",
      nameOfUser: "",
      seats: null,
      plateNum:"",
      carType:"",
      airCond:-1,
    }
  }
})
</script>