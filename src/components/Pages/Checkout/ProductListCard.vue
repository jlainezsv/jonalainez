<template>
  <div class="d-flex align-items-start gap-4 mb-3 mb-md-5">
    <img :src="img" alt="..." class="add-cart-img" />
    <div
      class="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100"
    >
      <div>
        <h5 class="fs-seven fw-medium n5-color mb-2">{{ title }}</h5>
        <div class="d-flex gap-1 align-items-center">
          <button @click="decreaseQuantity(id)" class="fs-eight n5-color cursor-pointer">
            <PhMinus />
          </button>
          <span
            class="product-count fs-eight fw-semibold n5-color py-1 px-2 brn4 rounded"
          >
            {{ totalItems}}
          </span>
          <button @click="increaseQuantity(id)" class="fs-eight n5-color cursor-pointer">
            <PhPlus />
          </button>
        </div>
      </div>
      <span class="fs-eight p1-color d-block">${{ price }} USD</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number;
  img: string;
  title: string;
  price: number;
}>();

import { PhMinus, PhPlus } from '@phosphor-icons/vue';
import { useCartStore } from '../../../stores/cart';
const cartStore = useCartStore();

const {
  totalItems,
  increaseQuantity,
  decreaseQuantity,
} = cartStore;
</script>

<style scoped></style>
