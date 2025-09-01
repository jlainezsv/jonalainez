<template>
  <div
    class="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17"
  >
    <div class="d-flex align-items-center gap-2 gap-xl-4">
      <h2 class="display-two fw-semibold p1-color">
        <count-up :end-val="8" />
      </h2>
      <div class="line"></div>
      <span class="n5-color">Years in UX/UI Design</span>
    </div>
    <div class="d-flex align-items-center gap-2 gap-xl-4">
      <h2 class="display-two fw-semibold p1-color">
        <count-up :end-val="7" />
      </h2>
      <div class="line"></div>
      <span class="n5-color">Years in Front-End Collaboration</span>
    </div>
    <div class="d-flex align-items-center gap-2 gap-xl-4">
      <h2 class="display-two fw-semibold p1-color">
        <count-up :end-val="40" />
      </h2>
      <div class="line"></div>
      <span class="n5-color">Projects Delivered</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import CountUp from "vue-countup-v3";
</script>

<style scoped></style>
