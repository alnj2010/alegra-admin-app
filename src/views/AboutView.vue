<script setup lang="ts">
import { ref } from 'vue';

const test = ref(import.meta.env.VITE_API_URL)
</script>

<template>
  <div class="about">
    <h1>This is an about pageeeee {{ test }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
