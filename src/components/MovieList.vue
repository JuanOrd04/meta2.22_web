<template>
  <div>
    <h3 class="mb-4">Resultados ({{ movies.length }})</h3>
    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.imdbID"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="h-100 d-flex flex-column">
          <v-img
            :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'"
            height="300"
            cover
          ></v-img>
          
          <v-card-item>
            <v-card-title class="text-subtitle-1 font-weight-bold" style="white-space: normal; line-height: 1.2;">
              {{ movie.Title }}
            </v-card-title>
            <v-card-subtitle class="mt-1">
              {{ movie.Year }} &bull; {{ movie.Type }}
            </v-card-subtitle>
          </v-card-item>

          <v-spacer></v-spacer>

          <v-card-actions>
            <v-btn
              color="info"
              variant="text"
              @click="$emit('select-movie', movie.imdbID)"
            >
              VER DETALLES
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
defineProps({
  movies: {
    type: Array,
    required: true
  }
})

defineEmits(['select-movie'])
</script>
