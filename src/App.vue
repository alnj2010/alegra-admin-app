<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32"> <img width="33px" src="./assets/logo.png"></v-avatar>


        <RouterLink style="text-decoration: none; color: inherit;" :to="link.page" v-for="link in links"
          :key="link.title">
          <v-btn text>{{ link.title }} </v-btn>
        </RouterLink>


        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const links = [
  { title: 'Jornada de almuerzo', page: "/" },
  { title: 'Bodega', page: "/store" },
]
</script>
