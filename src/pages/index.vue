<template>
  <v-row>
    <v-col cols="3">
      <v-sheet rounded="lg">
        <RecipeList></RecipeList>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <OrdersTable></OrdersTable>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import OrdersTable from '../components/OrdersTable.vue'
import RecipeList from '../components/RecipeList.vue'
export default {
  name: 'HomePage',
  components: {
    OrdersTable,
    RecipeList
  },
}
</script>