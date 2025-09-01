<template>
  <div class="col-xl-6">

      <div class="project-card">
        <RouterLink :to="link" class="thumb d-block">

          <div class="post-thumb">
            <div class="post-thumb-inner">
              <img :src="img" alt="..." class="w-100 p-2" />
            </div>
          </div>
          <div class="post-thumb">
            <div class="post-thumb-inner">
              <img :src="img" alt="..." class="w-100 p-2" />
            </div>
          </div>
        </RouterLink>

        <div
          class="d-flex justify-content-between gap-2 align-items-center pt-2 px-3 px-md-6"
        >
          <div>
            <div class="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
              <RouterLink
                to="#"
                class="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
              >
                {{tag1}}
              </RouterLink>
              <RouterLink
                to="#"
                class="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
              >
                {{tag2}}
              </RouterLink>
              <RouterLink
                to="#"
                class="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
              >
                {{tag3}}
              </RouterLink>
            </div>
            <RouterLink
              :to="link"
              class="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
            >
              {{title}}
            </RouterLink>
            <RouterLink
              :to="link"
              class="n3-color fs-nine fw-regular d-block"
            >
              {{shortdesc}}
            </RouterLink>
          </div>
          <RouterLink
            :to="link"
            class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
          >
          <i class="ph-bold ph-arrow-up-right n5-color">
            <PhArrowUpRight />
          </i>
          </RouterLink>
        </div>
      </div>
  
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string | number;
  img: string;
  tag1: string;
  tag2: string;
  tag3: string;
  title: string;
  shortdesc: string;
  link: string;
}>();
import { PhArrowUpRight } from "@phosphor-icons/vue";
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
