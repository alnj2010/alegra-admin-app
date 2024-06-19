<template>
    <v-data-table-server :itemsPerPageOptions="perPage" itemsPerPageText="Ordenes por pagina"
        v-model:items-per-page="itemsPerPage" :headers="headers" :items="serverItems" :items-length="totalItems"
        :loading="loading" item-value="name" @update:options="loadItems">
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title class="d-flex justify-center">
                    <v-btn color="primary" dark @click="order">
                        generar orden
                    </v-btn>
                </v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer class="my-0">
                    <v-select label="Filtra tus ordenes" item-title="text" :items="orderStatuses" variant="underlined"
                        single-line v-model="status" @update:modelValue="changeStatus"></v-select>
                </v-spacer>


            </v-toolbar>
        </template>
    </v-data-table-server>
</template>

<script setup>
import { ref } from 'vue';
import getAllOrders from '@/services/getAllOrders'
import generateOrder from '@/services/generateOrder'
import { ORDER_STATUS_PARAMS } from '@/constants'



const perPage = ref([1, 5, 10]);
const totalItems = ref(0);
const loading = ref(true);
const itemsPerPage = ref(10);
const serverItems = ref([]);



async function loadItems(options) {
    loading.value = true
    const payload = await getAllOrders({ status: status.value, ...options });
    loading.value = false;

    serverItems.value = payload.data;
    totalItems.value = payload.total;
}


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

const orderStatuses = [
    { text: 'PENDIENTES', value: ORDER_STATUS_PARAMS.pending },
    { text: 'SERVIDAS', value: ORDER_STATUS_PARAMS.delivered },
    { text: 'TODAS', value: ORDER_STATUS_PARAMS.all }
]
const status = ref(null);

async function changeStatus() {

    await loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
}

async function order() {
    await generateOrder();
    await loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
}

</script>