<template>
  <div v-if="visiblityVariable" class="fixed z-10 w-full h-full flex items-center justify-center">
    <div @click="$emit('toggle')" class="flex items-center justify-center bg-gray-500 opacity-60 w-full h-full z-20"/>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "PopUp",
  emits: [
    'toggle'
  ],
  props:{
    visiblityVariable: Boolean
  },
  data: function () {
    return {
      isDetailsPopUpVisible:false
    }
  },
  beforeMount() {
  }
}
</script>