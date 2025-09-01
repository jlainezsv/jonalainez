<template>
  <section class="pt-120 pb-120 br-bottom-n3">
    <div class="container">
      <div
        class="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15"
      >
        <div class="section-heading">
          <div class="d-flex align-items-center gap-2">
            <div class="title-line"></div>
            <h2 class="display-four n5-color fw-semibold">Featured Projects!!!!!!!!</h2>
          </div>
          <p class="fs-seven n4-color mt-2 mt-md-4">
            My step-by-step guide ensures a smooth project journey, from the
            initial consultation to the final delivery. I take care of every
            detail, allowing you to focus on what you do best.
          </p>
        </div>
        <RouterLink
          to="/portfolio"
          class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
        >
          <PhArrowRight />
          View Portfolio
        </RouterLink>
      </div>

      <div class="row g-5 g-md-10">
        <FeaturedCard
          v-for="item in featureds.slice(0, 4)"
          v-bind="{ ...item }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeaturedCard from "./FeaturedCard.vue";
import { featureds } from "../../../../data/AllData";
import { PhArrowRight } from "@phosphor-icons/vue";
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
