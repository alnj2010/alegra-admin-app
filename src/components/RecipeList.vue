<template>
    <div>
        <v-list color="transparent">
            <div class="d-flex justify-center m-6">
                <div class="text-h6">
                    Recetas disponibles
                </div>
            </div>

            <v-divider class="my-2"></v-divider>
            <v-treeview :items="items"></v-treeview>

        </v-list>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import getAllRecipes from '../services/getAllRecipes'
const items = ref([]);
getAllRecipes().then(recipes => {
    items.value = recipes
});
</script>