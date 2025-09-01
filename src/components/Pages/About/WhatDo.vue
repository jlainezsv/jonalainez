<template>
  <section class="pt-120 pb-120">
    <div class="container">
      <div
        class="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end"
      >
        <div class="section-heading">
          <div class="d-flex align-items-center gap-2">
            <div class="title-line"></div>
            <h2 class="display-four n5-color fw-semibold">What I do</h2>
          </div>
          <p class="fs-seven n4-color mt-2 mt-md-4">

            I'm a UX/UI designer creating clean, responsive interfaces and scalable design systems. With strong front-end foundations, I deliver user-first experiences. I work remotely with clients worldwide, ensuring clear communication and reliable results.
            <RouterLink to="/resume" class="p1-color">
              online resume </RouterLink
            > and
            <RouterLink to="/portfolio" class="p1-color">
              project portfolio</RouterLink>.
          </p>
        </div>
        <RouterLink
          to="/price"
          class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
        >
          <PhArrowRight /> Services & Pricing
        </RouterLink>
      </div>

      <div class="row g-3 g-md-6 pt-60">
        <div
          :key="id"
          v-for="{ id, title, des, imgs } in services"
          class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
        >
          <div class="service-card px-4 px-lg-8 py-5 py-lg-10">
            <div class="d-flex align-items-center gap-3">
              <div :key="idx" v-for="(img, idx) in imgs">
                <img :src="img" alt="..." class="service-icon" />
              </div>
            </div>
            <h4 class="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
              {{ title }}
            </h4>
            <p class="fs-seven n4-color">{{ des }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import { RouterLink } from "vue-router";
import { services } from "../../../data/AllData";
</script>

<style scoped></style>
