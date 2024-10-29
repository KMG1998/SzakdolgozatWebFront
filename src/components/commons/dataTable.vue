<template>
  <table v-if="tableData !== undefined">
    <thead>
    <tr>
      <th
        v-for="(header, i) in Object.keys(this.tableData[0])"
        :key="`${header}${i}`"
        class="header-item"
      >
        {{this.$t(`tableHeaders.${headerClass}.${header}`) }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="entity in tableData"
      :key="`entity-${entity.id}`"
      class="table-rows"
    >
      <td
        v-for="(userData, i) in entity"
        :key="`${userData}-${i}`"
      >
        {{ userData }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "dataTable",
  props: {
    tableData: Array,
    headerClass: String
  },
})
</script>
