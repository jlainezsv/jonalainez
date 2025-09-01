<template>
  <section class="pt-120 mt-10 mt-lg-0">
    <div
      class="row g-6 g-sm-12 g-xl-20 align-items-center justify-content-between"
    >
      <div class="col-xl-6">
        <h2 class="fs-two n4-color">React Dashboard Template</h2>
        <p class="n3-color fs-six mt-3 mt-xl-6">
          Embark on a journey through the ever-evolving landscape of software
          development. Unlock the full potential of your data with this powerful
          React dashboard template. Tailored for developers and businesses, this
          template offers a seamless blend of functionality and design.
          Customize it to fit your needs and start making data-driven decisions
          with ease.
        </p>
        <div class="d-flex align-items-center gap-3 gap-md-4 mt-5 mt-xl-10">
          <span class="fs-five fw-semibold n5-color">$120.00 USD</span>
          <button
            type="button"
            class="p-btn bg1-color p-3 rounded n11-color"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div class="col-xl-6 d-flex align-items-center justify-content-center">
        <div class="overflow-hidden">
          <img :src="product" alt="..." class="product-details-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import product from "@/assets/images/react-dashboard.png";
</script>

<style scoped></style>
