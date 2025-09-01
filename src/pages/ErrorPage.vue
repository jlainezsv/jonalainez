<template>
  <div
    class="d-flex justify-content-center align-items-center vh-100 text-center"
  >
    <div>
      <h2 class="p1-color">Page Not Found</h2>
      <p class="n4-color fs-seven mt-2 mt-md-3">
        The page you are looking for could not be found.
      </p>
      <RouterLink
        to="/"
        class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto w-max mt-3 mt-md-5"
        >Go Home</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
