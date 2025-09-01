<template>
  <div class="container">
    <ProductDetailsBanner />
    <section class="pt-60">
      <div class="row g-3 g-md-6">
        <div
          v-for="{ id, heading } in cardsData"
          :key="id"
          class="col-sm-6 col-xl-4 col-xxl-3"
        >
          <div class="bgn2-color brn4 p-3 p-md-5 rounded">
            <span class="fs-five p1-color d-block">
              <PhSealCheck weight="fill" />
            </span>
            <span class="fs-five fw-medium n5-color mt-1 mt-md-2">
              {{ heading }}
            </span>
          </div>
        </div>
      </div>
    </section>
    <ProductDetailsDescription />
    <section class="pb-120">
      <h3 class="fs-two n5-color mb-5 mb-md-10">Check out similar products</h3>
      <div class="row g-6 g-md-8">
        <ProductCard
          v-for="products in productsData.slice(3, 6)"
          :key="products.id"
          v-bind="{ ...products }"
        />
      </div>
    </section>
    <Footer />
    <CartModal />
  </div>
</template>

<script setup lang="ts">
import { PhSealCheck } from "@phosphor-icons/vue";
import Footer from "../components/Shared/Footer.vue";
import { productsData } from "../data/AllData";
import ProductCard from "../components/Pages/Product/ProductCard.vue";
import ProductDetailsBanner from "../components/Pages/ProductDetails/ProductDetailsBanner.vue";
import ProductDetailsDescription from "../components/Pages/ProductDetails/ProductDetailsDescription.vue";
import CartModal from "../components/Modal/CartModal.vue";

const cardsData = [
  {
    id: 1,
    heading: "Hands-On Creativity Challenges",
  },
  {
    id: 2,
    heading: "Personal Project Guidance",
  },
  {
    id: 3,
    heading: "Interactive Exercises and Coding Playground",
  },
  {
    id: 4,
    heading: "Inspiration Hub - Stories and Interviews",
  },
];
</script>

<style scoped></style>
