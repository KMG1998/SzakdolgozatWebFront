<script setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>
<template>
  <table v-if="tableData != undefined">
    <tr>
      <th
          v-for="(header, i) in Object.keys(tableData)"
          :key="`${header}${i}`"
          class="header-item"
      >
        {{ t("`tableHeaders.${headerClass}.${header}`") }}
      </th>
    </tr>
    <tr
        v-for="entity in tableData"
        :key="`entity-${entity.id}`"
        class="table-rows"
    >
      <td
          v-for="(userData, i) in Object.keys(entity)"
          :key="`${userData}-${i}`"
      >
        {{ userData }}
      </td>
    </tr>
  </table>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "dataTable",
  props: {
    tableData: Object,
    headerClass: String
  },
  beforeMount() {
    console.log(this.tableData)
  }
})
</script>