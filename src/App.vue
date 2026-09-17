<template>
  <v-app>
    <v-app-bar color="grey-darken-4" title="Buscador de Películas">
      <template v-slot:prepend>
        <v-icon icon="mdi-movie-open-play"></v-icon>
      </template>

      <v-spacer></v-spacer>

      <v-btn to="/" text="Inicio"></v-btn>
      <v-btn to="/about" text="Acerca de"></v-btn>
    </v-app-bar>

    <v-main class="bg-grey-darken-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>
