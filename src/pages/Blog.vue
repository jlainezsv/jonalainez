<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60 br-bottom-n3">
        <div class="container">
          <div class="page-heading">
            <h3
              class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
            >
              A Blog About Software Development And Life
            </h3>
            <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
              Welcome to my blog. Subscribe and get my latest blog post in your
              inbox.
            </p>
            <div class="d-flex flex-wrap flex-sm-nowrap gap-3 gap-md-6">
              <input
                placeholder="Enter your email"
                class="brn4 px-4 px-md-8 py-2 py-md-4 rounded-pill n5-color"
              />
              <button
                class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto h-100 flex-shrink-0"
              >
                <PhPaperPlaneTilt /> Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- blog card  -->
      <div class="container">
        <div class="row g-5 g-md-10 mt-5">
          <BlogCard v-for="item in blogs" v-bind="{ ...item }" />
        </div>

        <div
          data-aos="zoom-in-up"
          class="d-flex gap-4 gap-md-8 justify-content-center mt-8 mt-md-15"
        >
          <div class="pagination-countainer brn4 n5-color">
            <PhCaretLeft weight="bold" />
          </div>
          <div class="d-flex gap-2 align-items-center">
            <div class="pagination-countainer brn4 n5-color pagination-active">01</div>
            <div class="pagination-countainer brn4 n5-color">02</div>
            <div class="pagination-countainer brn4 n5-color">03</div>
          </div>
          <div class="pagination-countainer brn4 n5-color">
            <PhCaretRight weight="bold" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import {
  PhCaretLeft,
  PhCaretRight,
  PhPaperPlaneTilt,
} from "@phosphor-icons/vue";
import Footer from "../components/Shared/Footer.vue";
import BlogCard from "../components/Pages/About/Blog/BlogCard.vue";
import { blogs } from "../../src/data/AllData";
</script>

<style scoped></style>
