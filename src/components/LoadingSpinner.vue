<template>
  <div v-if="loading" class="d-flex justify-center my-8">
    <v-progress-circular
      indeterminate
      color="info"
      size="64"
    ></v-progress-circular>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>
