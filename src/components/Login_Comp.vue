<template>
  <div
      class="flex flex-col justify-center items-center px-16 py-12 max-md:px-5"
  >
    <div class="flex w-[351px] max-w-full flex-col mt-7 mb-40 max-md:mb-10">
      <img
          loading="lazy"
          srcSet="@/assets/images/logo.svg"
          class="aspect-square object-contain object-center w-[319px] overflow-hidden self-center max-w-full"
      />
      <div
          class="text-black text-sm self-center whitespace-nowrap mt-14 max-md:mt-10"
      >
        Felhasználónév
      </div>
      <div
          class="shadow-sm bg-white self-stretch flex shrink-0 h-12 flex-col mt-3.5 rounded-3xl border-2 border-solid border-black"
      ></div>
      <div class="text-black text-sm self-center whitespace-nowrap mt-9">
        Jelszó
      </div>
      <div
          class="shadow-sm bg-white self-stretch flex shrink-0 h-12 flex-col mt-3 rounded-3xl border-2 border-solid border-black"
      ></div>
      <div
          class="text-black text-sm whitespace-nowrap justify-center items-center bg-white self-center w-[269px] max-w-full mt-8 px-16 py-1.5 rounded-3xl border-2 border-solid border-black max-md:px-5"
      >
        Belépés
      </div>
      <div
          class="text-black text-sm underline self-center whitespace-nowrap mt-14 max-md:mt-10"
      >
        Elfelejtett jelszó
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login_Comp"
}
</script>

<style scoped>

</style>