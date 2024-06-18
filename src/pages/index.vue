<script setup>
import { ref } from 'vue';
const desserts = [
  {
    recipe: 'Frozen Yogurt',
    is_delivered: false,
  },
  {
    recipe: 'Jelly bean',
    is_delivered: false,
  },
  {
    recipe: 'KitKat',
    is_delivered: false,
  },
]

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    console.log({ page, itemsPerPage, sortBy })
    return new Promise(resolve => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage
        const end = start + itemsPerPage
        const items = desserts.slice()

        if (sortBy.length) {
          const sortKey = sortBy[0].key
          const sortOrder = sortBy[0].order
          items.sort((a, b) => {
            const aValue = a[sortKey]
            const bValue = b[sortKey]
            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue
          })
        }

        const paginated = items.slice(start, end)

        resolve({ items: paginated, total: items.length })
      }, 500)
    })
  },
}


const itemsPerPage = ref(1);

const headers = ref([
  {
    title: 'Plato',
    align: 'start',
    sortable: false,
    key: 'recipe',
  },
  {
    title: 'Status',
    align: 'start',
    sortable: false,
    key: 'is_delivered',
  },
]);

const serverItems = ref([]);
const loading = ref(true);
const totalItems = ref(3);

function loadItems({ page, itemsPerPage, sortBy }) {
  console.log({ page, itemsPerPage, sortBy })
  loading.value = true
  FakeAPI.fetch({ page, itemsPerPage, sortBy }).then((res) => {
    serverItems.value = res.items;
    totalItems.value = res.total;
    loading.value = false;
  })

}
</script>
<template>
  <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems"
    :items-length="totalItems" :loading="loading" :search="search" item-value="name"
    @update:options="loadItems"></v-data-table-server>
</template>