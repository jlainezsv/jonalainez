<template>
  <section class="pt-120 pb-120">
    <div class="container">
      <div
        class="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15"
      >
        <div class="section-heading">
          <div class="d-flex align-items-center gap-2">
            <div class="title-line"></div>
            <h2 class="display-four n5-color fw-semibold">Latest Blog Posts</h2>
          </div>
          <p class="fs-seven n4-color mt-2 mt-md-4">
            More than 1500+ agencies using Portfolify
          </p>
        </div>
        <RouterLink
          to="/blog"
          class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill text-nowrap"
        >
          See All Articles
        </RouterLink>
      </div>

      <div class="row g-5 g-md-10">
        <BlogCard v-for="item in blogs.slice(0, 3)" v-bind="{ ...item }" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import BlogCard from "./BlogCard.vue";
import { blogs } from "../../../../data/AllData";
</script>

<style scoped></style>
