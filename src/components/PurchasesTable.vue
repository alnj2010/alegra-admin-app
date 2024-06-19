<template>
    <v-data-table-server :itemsPerPageOptions="perPage" itemsPerPageText="Compras por pagina"
        no-data-text="No se ha realizado compras en el mercado" loading-text="Cargando compras..." v-model:items-per-page="itemsPerPage" :headers="headers"
        :items="serverItems" :items-length="totalItems" :loading="loading" item-value="name"
        @update:options="loadItems">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Historial de compras en el Mercado</v-toolbar-title>

            </v-toolbar>
        </template>
    </v-data-table-server>
</template>

<script setup>
import { ref } from 'vue';
import getAllPurchases from '@/services/getAllPurchases'

const perPage = ref([1, 5, 10]);
const totalItems = ref(0);
const loading = ref(true);
const itemsPerPage = ref(10);
const serverItems = ref([]);

async function loadItems(options) {
    loading.value = true
    const payload = await getAllPurchases(options);
    loading.value = false;

    serverItems.value = payload.data;
    totalItems.value = payload.total;
}


const headers = ref([
    {
        title: 'Ingrediente',
        align: 'center',
        sortable: false,
        key: 'name',
    },
    {
        title: 'Unidades Comprada',
        align: 'center',
        sortable: false,
        key: 'quantity',
    },
    {
        title: 'Fecha de compra',
        align: 'center',
        sortable: false,
        key: 'date',
    },
]);
</script>