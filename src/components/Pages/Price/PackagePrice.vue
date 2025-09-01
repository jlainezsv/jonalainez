<template>
  <div class="row g-6">
    <div
      class="col-sm-6 col-xl-4"
      :key="id"
      v-for="{ id, title, price, time, services, btn } in packagesPrice"
    >
      <div
        class="pricing-card bgn2-color brn4 px-3 px-md-6 py-4 py-md-8 text-center overflow-hidden position-relative"
      >
        <div
          v-if="title === 'Standard'"
          class="popular-price px-2 px-md-5 py-1 py-md-3 py-xl-2 py-xxl-3"
        >
          <span class="fs-seven n1-color">Most popular</span>
        </div>

        <span class="fs-eight n5-color">{{ title }}</span>
        <h3 class="p1-color fs-two">${{ price }}</h3>
        <span class="fs-eight n5-color">{{ time }}</span>
        <div class="line-divider my-4 my-md-7"></div>
        <ul>
          <li
            v-for="(service, idx) in services"
            :key="idx"
            class="d-flex gap-3 align-items-center n5-color mb-2 mb-md-3"
          >
            <i class="fs-six p1-color">
              <PhCheckCircle weight="fill" />
            </i>
            {{ service }}
          </li>
        </ul>

        <button
          class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto mt-5 mt-md-10"
        >
          <PhArrowRight />
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowRight, PhCheckCircle } from "@phosphor-icons/vue";
import { packagesPrice } from "../../../data/AllData";
</script>

<style scoped></style>
