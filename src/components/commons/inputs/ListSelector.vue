<template>
  <label v-if="props.label != undefined" class="mt-6 text-xl text-center text-black">
    {{ props.label }}
  </label>
  <select
    class="shadow-sm bg-white self-stretch flex shrink-0 h-12  w-full rounded-3xl border-2 border-solid border-black text-center"
    :id=props.fieldId
    v-bind="$attrs"
    :value="props.modelValue"
    @input="$emit('update:modelValue',$event.target.value)"
  >
    <option v-for="(data) in props.elements" :value="data['value']">{{ data['label'] }}</option>
  </select>
  <FieldError :error="error" v-if="error && meta.touched"/>
</template>

<script setup lang="ts">
import FieldError from "@/components/commons/FieldError.vue";

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  fieldId: string,
  label: undefined | string
  modelValue: any
  elements: { value: any, label: string }[]
  error: string | undefined
  meta: object
}>()

defineEmits(['update:modelValue']);
</script>
