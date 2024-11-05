<script setup lang="ts">
import {SemipolarSpinner} from "epic-spinners";

defineProps({
  tableData: Array,
  headerClass: String,
  onDetailsClick: Function,
})
</script>
<template>
  <table v-if="tableData !== undefined && tableData.length > 0" class="border-2 border-collapse border-black w-full">
    <thead>
    <tr>
      <th
        v-for="(header, i) in Object.keys(tableData[0])"
        :key="`${header}${i}`"
        class="border-2 border-black"
      >
        {{ $t(`tableHeaders.${headerClass}.${header}`) }}
      </th>
      <th class="border-2 border-black"/>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="entity in tableData"
      :key="`entity-${entity.id}`"
      class="border-2 border-black"
    >
      <td v-for="(data, i) in entity" :key="`${data}-${i}`" class="border-2 border-black">
        {{ data }}
      </td>
      <td>
        <img src="../../assets/images/details_eye.png" @click="onDetailsClick(entity)" class="m-auto cursor-pointer">
      </td>
    </tr>
    </tbody>
  </table>
  <div v-else-if="tableData === undefined" class="flex items-center justify-center pt-2">
    <semipolar-spinner
      :animation-duration="2000"
      :size="80"
      color="#57A3EF"
    />
  </div>
</template>
