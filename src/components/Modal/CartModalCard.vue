<template>
  <div
    class="d-flex gap-2 align-items-center justify-content-between mb-3 mb-md-4"
  >
    <div class="d-flex gap-4 align-items-center">
      <img :src="img" alt="..." class="add-cart-img" />
      <div>
        <h5 class="fs-seven fw-medium n5-color mb-1">{{ title }}</h5>
        <span class="fs-eight p1-color d-block mb-1">${{ price }} USD</span>
        <button @click="$emit('remove')" class="text-danger">Remove</button>
      </div>
    </div>
    <div class="d-flex gap-1 align-items-center">
      <span @click="$emit('decrement')" class="fs-six n5-color cursor-pointer">
        <PhMinus weight="bold" />
      </span>
      <span class="product-count fs-six fw-semibold n5-color py-1 px-2 brn4">
        {{ count }}
      </span>
      <span @click="$emit('increment')" class="fs-six n5-color cursor-pointer">
        <PhPlus weight="bold" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhMinus, PhPlus } from "@phosphor-icons/vue";

defineProps<{
  img: string;
  title: string;
  price: number;
  count: number;
  id: number;
}>();

defineEmits(['increment', 'decrement', 'remove']);
</script>

<style scoped>
.add-cart-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
}
</style>