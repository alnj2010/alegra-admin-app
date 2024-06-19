<template>
  <v-row>
    <v-col cols="3">
      <v-sheet rounded="lg">
        <v-list color="transparent">
          <div class="d-flex justify-center m-6">
            <div class="text-h6">
              Ingredientes disponibles
            </div>
          </div>

          <v-divider class="my-2"></v-divider>
          <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  Ingrediente
                </th>
                <th class="text-left">
                  Cantidad
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in ingredients" :key="item.id">
                <td>{{item.name_ingredient}}</td>
                <td>{{item.quantity}}</td>
              </tr>
            </tbody>
          </v-table>

        </v-list>
      </v-sheet>
    </v-col>

    <v-col>
      <v-sheet min-height="70vh" rounded="lg">
        <PurchasesTable></PurchasesTable>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
import getAllIngredients from '../services/getAllIngredients'
import PurchasesTable from '../components/PurchasesTable.vue'

const ingredients = ref([]);
getAllIngredients().then(data => {
  console.log(data);
  ingredients.value = data;
});
</script>