<script setup>
import {useI18n} from 'vue-i18n'

const {t} = useI18n()
</script>
<template>
  <table>
    <tr>
      <th
          v-for="(header, i) in headers"
          :key="`${header}${i}`"
          class="header-item"
      >
        {{ t('tableHeaders.userTable.' + header) }}
      </th>
    </tr>
    <tr
        v-for="entity in data"
        :key="`entity-${entity.id}`"
        class="table-rows"
    >
      <td
          v-for="(userData, i) in [entity.id,entity.name,entity.typeId,entity.email]"
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
  },
  beforeMount() {
    console.log(this.tableProps)
  }
})
</script>