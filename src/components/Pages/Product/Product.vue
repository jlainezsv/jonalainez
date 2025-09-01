<template>
  <div class="container mt-8 mt-md-15">
    <TabGroup>
      <TabList
        class="d-flex gap-3 gap-md-7 align-items-center justify-content-center"
      >
        <Tab as="template" v-slot="{ selected, hover }">
          <button
            class="fs-seven fw-medium n3-color"
            :class="{ ' tab-active': selected, 'p1-color': hover }"
          >
            All
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected, hover }">
          <button
            class="fs-seven fw-medium n3-color"
            :class="{ ' tab-active': selected, 'p1-color': hover }"
          >
            E-books
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected, hover }">
          <button
            class="fs-seven fw-medium n3-color"
            :class="{ ' tab-active': selected, 'p1-color': hover }"
          >
            Courses
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected, hover }">
          <button
            class="fs-seven fw-medium n3-color"
            :class="{ ' tab-active': selected, 'p1-color': hover }"
          >
            Assets
          </button>
        </Tab>
      </TabList>
      <TabPanels class="mt-5 mt-md-10">
        <TabPanel>
          <div class="row g-5 g-md-10">
            <ProductCard
              v-for="products in productsData"
              :key="products.id"
              v-bind="{ ...products }"
            />
          </div>
        </TabPanel>

        <TabPanel>
          <div class="row g-5 g-md-10">
            <ProductCard
              v-for="products in productsData.slice(2, 6)"
              :key="products.id"
              v-bind="{ ...products }"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div class="row g-5 g-md-10">
            <ProductCard
              v-for="products in productsData.slice(1, 5)"
              :key="products.id"
              v-bind="{ ...products }"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div class="row g-5 g-md-10">
            <ProductCard
              v-for="products in productsData.slice(3, 6)"
              :key="products.id"
              v-bind="{ ...products }"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>

    <!--  Modal start -->
    <CartModal />
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { productsData } from "../../../data/AllData";
import ProductCard from "./ProductCard.vue";
import CartModal from "../../Modal/CartModal.vue";
</script>

<style scoped></style>
