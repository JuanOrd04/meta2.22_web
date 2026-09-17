<template>
  <v-card class="pa-4">
    <v-card-title class="px-0 pt-0 pb-4">
      <v-icon icon="mdi-magnify" class="mr-2"></v-icon>
      Buscar Películas
    </v-card-title>

    <v-form @submit.prevent="submitSearch">
      <v-text-field
        v-model="searchParams.query"
        label="Título de la película"
        variant="filled"
        density="comfortable"
        required
      ></v-text-field>

      <v-select
        v-model="searchParams.type"
        :items="['movie', 'series', 'episode']"
        label="Tipo"
        variant="filled"
        density="comfortable"
      ></v-select>

      <v-text-field
        v-model="searchParams.year"
        label="Año"
        variant="filled"
        density="comfortable"
        type="number"
      ></v-text-field>

      <v-btn
        color="info"
        block
        class="mb-2"
        type="submit"
        prepend-icon="mdi-magnify"
      >
        BUSCAR
      </v-btn>

      <v-btn
        color="grey-darken-3"
        block
        variant="outlined"
        @click="clearSearch"
        prepend-icon="mdi-close"
      >
        LIMPIAR
      </v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['search-movies', 'clear-results'])

const searchParams = reactive({
  query: '',
  type: 'movie',
  year: ''
})

const submitSearch = () => {
  if (searchParams.query.trim()) {
    emit('search-movies', { ...searchParams })
  }
}

const clearSearch = () => {
  searchParams.query = ''
  searchParams.type = 'movie'
  searchParams.year = ''
  emit('clear-results')
}
</script>
