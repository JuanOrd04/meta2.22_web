<template>
  <v-dialog :model-value="true" @update:model-value="$emit('close-details')" max-width="800">
    <v-card>
      <v-toolbar color="grey-darken-4" title="The Matrix">
        <template v-slot:title>
          {{ movie.Title }}
        </template>
        <v-btn icon="mdi-close" @click="$emit('close-details')"></v-btn>
      </v-toolbar>

      <v-card-text class="pa-4 bg-grey-darken-4">
        <v-row>
          <v-col cols="12" md="4">
            <v-img
              :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'"
              width="100%"
              class="rounded"
            ></v-img>
          </v-col>
          
          <v-col cols="12" md="8">
            <v-list bg-color="transparent">
              <v-list-item prepend-icon="mdi-calendar">
                <v-list-item-title class="font-weight-bold">Año</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-clock-outline">
                <v-list-item-title class="font-weight-bold">Duración</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Runtime }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-star">
                <v-list-item-title class="font-weight-bold">Calificación</v-list-item-title>
                <v-list-item-subtitle>{{ movie.imdbRating }}/10</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-account-group">
                <v-list-item-title class="font-weight-bold">Género</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Genre }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-movie-open-outline">
                <v-list-item-title class="font-weight-bold">Director</v-list-item-title>
                <v-list-item-subtitle>{{ movie.Director }}</v-list-item-subtitle>
              </v-list-item>

              <v-list-item prepend-icon="mdi-account-multiple">
                <v-list-item-title class="font-weight-bold">Actores</v-list-item-title>
                <v-list-item-subtitle style="white-space: normal;">{{ movie.Actors }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <div class="mt-4 px-4">
              <h4 class="mb-2">Sinopsis:</h4>
              <p class="text-body-2">{{ movie.Plot }}</p>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
})

defineEmits(['close-details'])
</script>
