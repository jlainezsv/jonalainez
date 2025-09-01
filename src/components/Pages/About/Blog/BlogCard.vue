<template>
  <div class="col-sm-6 col-xxl-4">
    <RouterLink to="/blog_details" class="blog-card">
      <div class="blog-img rounded-3 overflow-hidden">
        <img :src="img" alt="blog" class="rounded-3 w-100" />
      </div>
      <div class="pt-4 pt-md-8 px-3 px-md-5">
        <div class="d-flex align-items-center gap-3 mb-2 mb-md-3">
          <span class="n4-color fs-eight">{{ date }}</span>
          <span class="p1-color fs-eight">/</span>
          <span class="n4-color fs-eight">{{ tag }}</span>
        </div>
        <h4 class="blog-title fs-five n5-color fw-semibold">{{ title }}</h4>
      </div>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  date: string;
  tag: string;
  title: string;
}>();
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
