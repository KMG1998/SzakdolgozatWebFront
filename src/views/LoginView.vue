<template>
    <div
        class="flex flex-col justify-center items-center px-16 py-12 max-md:px-5"
    >
      <div class="flex w-[351px] max-w-full flex-col items-center mt-7">
        <img
            loading="lazy"
            src="../assets/images/magantaxi_logo.png"
            class="aspect-square object-contain object-center w-[319px] max-w-full"
        />
        <div class="text-black text-sm mt-14 max-md:mt-10">E-mail</div>
        <div
            class="shadow-sm bg-white self-stretch flex shrink-0 h-12 flex-col mt-3 rounded-3xl border-2 border-solid border-black"
        ></div>
        <div class="text-black text-sm mt-9">Jelszó</div>
        <div
            class="shadow-sm bg-white self-stretch flex shrink-0 h-12 flex-col mt-3 rounded-3xl border-2 border-solid border-black"
        ></div>
        <div
            class="text-black text-sm justify-center items-center bg-white w-[269px] max-w-full mt-8 px-16 py-1.5 rounded-3xl border-2 border-solid border-black max-md:px-5"
        >
          Belépés
        </div>
        <div
            class="text-black text-sm underline whitespace-nowrap mt-14 max-md:mt-10"
        >
          Elfelejtett jelszó
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style scoped>

</style>