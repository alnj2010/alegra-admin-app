<script setup>
import { ref } from 'vue';
import getAllOrders from '@/services/getAllOrders'
import generateOrder from '@/services/generateOrder'

const orderStatuses = [{ text: 'pediente', value: 'pending' }, { text: 'servido', value: 'delivered' }, { text: 'todas', value: 'all' }]
const status = ref(orderStatuses[2]);

const loading = ref(true);

const itemsPerPage = ref(2);

const headers = ref([
  {
    title: 'Plato',
    align: 'center',
    sortable: false,
    key: 'recipe',
  },
  {
    title: 'Status',
    align: 'center',
    sortable: false,
    key: 'status',
  },
  {
    title: 'Fecha de orden',
    align: 'center',
    sortable: false,
    key: 'date',
  },
]);

const serverItems = ref([]);

const totalItems = ref(null);

async function loadItems(options) {
  loading.value = true
  const payload = await getAllOrders({status: status.value, ...options  });
  loading.value = false;

  serverItems.value = payload.data;
  totalItems.value = payload.total;
}

async function changeStatus() {

  await loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
}

async function order() {
  await generateOrder();
  await loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
}

</script>
<template>
  <v-data-table-server :itemsPerPageOptions="[1, 5, 10]" itemsPerPageText="Items perpage"
    v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems" :items-length="totalItems"
    :loading="loading" :search="search" item-value="name" @update:options="loadItems">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-select label="ordenes" item-title="text" :items="orderStatuses" variant="underlined" v-model="status"
          @update:modelValue="changeStatus"></v-select>
        <v-btn class="mb-2" color="primary" dark @click="order">
          generar orden
        </v-btn>
      </v-toolbar>
    </template>
  </v-data-table-server>
</template>