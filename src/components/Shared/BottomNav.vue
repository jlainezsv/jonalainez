<template>
  <div
    class="w-100 bgn1-color p-3 position-fixed z-3 bottom-0 d-block d-lg-none br-top-n5 box-shadow1"
  >
    <div class="header-bottom-menu w-full">
      <ul class="d-flex gap-1 align-items-center justify-content-between">
        <li v-for="{ id, url, name, icon, numbers } in sidebarsData" :key="id">
          <RouterLink
            :to="url"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center gap-2 fs-eight p-2">
              <span
                class="fs-five d-flex align-items-center justify-content-center"
              >
                <component :is="icon" :size="20" weight="fill"/>
              </span>
              <span class="d-none d-md-block">{{ name }}</span>
            </div>

            <span
              class="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3 d-none d-md-block"
              v-if="numbers"
            >
              {{ numbers }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { sidebarsData } from "../../data/Sidebar.ts";
</script>

<style scoped>
.router-link-exact-active {
  background-color: rgba(var(--p1), 1);
  border-radius: 8px;
  color: rgba(var(--n11), 1);
}
</style>
