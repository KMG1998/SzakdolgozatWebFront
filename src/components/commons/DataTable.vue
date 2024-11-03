<template>
  <table v-if="tableData !== undefined && tableData.length > 0">
    <thead>
    <tr>
      <th
        v-for="(header, i) in Object.keys(this.tableData[0])"
        :key="`${header}${i}`"
        class="header-item"
      >
        {{ $t(`tableHeaders.${headerClass}.${header}`) }}
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="entity in tableData"
      :key="`entity-${entity.id}`"
      class="table-rows"
    >
      <td v-for="(data, i) in entity" :key="`${data}-${i}`">
        {{ data }}
      </td>
      <td>
        <img src="../../assets/images/details_eye.png" @click="onDetailsClick(entity)">
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

<script>
import {defineComponent} from "vue";
import {SemipolarSpinner} from "epic-spinners";

export default defineComponent({
  name: "dataTable",
  components: {SemipolarSpinner},
  props: {
    tableData: Array,
    headerClass: String,
    onDetailsClick: Function,
  },
})
</script>
