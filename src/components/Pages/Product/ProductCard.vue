<template>
  <div class="col-sm-6 col-xxl-4">
    <div class="product-card">
      <RouterLink to="/products_details" class="thumb d-block">
        <div class="post-thumb">
          <div class="post-thumb-inner">
            <img :src="img" alt="..." class="product-img w-100 p-2" />
          </div>
        </div>
        <div class="post-thumb">
          <div class="post-thumb-inner">
            <img :src="img" alt="..." class="product-img w-100 p-2" />
          </div>
        </div>
      </RouterLink>
      <div class="px-2">
        <RouterLink
          to="/products_details"
          class="project-title fs-six fw-semibold n5-color mt-3 mt-md-5 mb-2 d-block"
        >
          {{ title }}
        </RouterLink>
        <p class="fs-six n3-color">{{ des }}</p>

        <span class="n5-color fs-seven fw-medium mt-2 mt-md-3">
          Price: ${{ price }} USD
        </span>
        <div class="d-flex gap-3 gap-md-4 align-items-center mt-3 mt-md-5">
          <button
            type="button"
            class="p-btn bg1-color px-3 py-2 rounded n11-color"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="addToCart(id)"
          >
            Add to Cart
          </button>
          <RouterLink
            to="/products_details"
            class="project-link d-flex align-items-center justify-content-center flex-shrink-0"
          >
            <i class="n5-color">
              <PhArrowUpRight weight="bold" />
            </i>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowUpRight } from '@phosphor-icons/vue';
import { useCartStore } from '../../../stores/cart';

defineProps<{
  id: number;
  img: string;
  title: string;
  des: string;
  price: string;
}>();
const {addToCart} = useCartStore()
</script>

<style scoped></style>
