<template>
  <section class="next-project pt-120 pb-120">
    <div
      class="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center"
    >
      <div class="next-project-content">
        <h3 class="display-four n11-color fw-semibold mb-2 mb-md-4">
          Let’s Work together on your next Project
        </h3>
        <p class="fs-seven n11-color">
          I am available for freelance projects. Hire me and get your project
          done.
        </p>
      </div>
      <RouterLink
        to="/contact"
        class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
      >
        <PhArrowRight />
        Let’s get in touch
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
