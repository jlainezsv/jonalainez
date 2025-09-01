<template>
      <footer class="container d-flex flex-wrap gap-3 gap-md-6 justify-content-center justify-content-sm-between align-items-center pb-4 pb-md-8 text-center mb-16 mb-lg-0">
      <span class="fs-eight fw-medium n5-color order-sm-2">
        Designed by
        <RouterLink
          to="https://themeforest.net/user/uiaxis"
          class="fs-eight fw-medium n5-color"
        >
          UIAXIS
        </RouterLink>
      </span>
      <span class="fs-eight fw-medium n5-color order-sm-1">
        Copyright © {{ new Date().getFullYear() }}
        <RouterLink to="/" class="fs-eight fw-medium n5-color">
          Portfolify
        </RouterLink>
        . All Rights Reserved.
      </span>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>