<template>
  <div class="mt-8 mt-md-15">
    <swiper
      :spaceBetween="30"
      :speed="2500"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        type: 'bullets',
        bulletClass: 'swiper-custom-bullet',
        bulletActiveClass: 'swiper-custom-bullet-active',
        clickable: true,
      }"
      :autoplay="{
        delay: 2500,
      }"
      :modules="[Autoplay, Pagination]"
    >
      <swiper-slide :key="id" v-for="{ id, img, name, des } in testimonials">
        <div
          class="px-3 px-md-6 py-5 py-md-10 bgn2-color box-shadow1 br-left-p1"
        >
          <div class="d-flex gap-1 mb-2 mb-md-3">
            <i class="ph-fill ph-star y1-color fs-six"></i>
            <i class="ph-fill ph-star y1-color fs-six"></i>
            <i class="ph-fill ph-star y1-color fs-six"></i>
            <i class="ph-fill ph-star y1-color fs-six"></i>
            <i class="ph-fill ph-star y1-color fs-six"></i>
          </div>
          <p class="n4-color fs-six">{{des}}</p>
          <div class="d-flex gap-3 align-items-center mt-4 mt-md-7">
            <img :src="img" alt="testimonial" class="testimonial_img" />

            <span class="fs-eight d-block n5-color">{{name}}</span>
          </div>
        </div>
      </swiper-slide>
    
      <div class="relative mt-15">
        <div
          class="swiper-pagination d-flex allign-items-center justify-content-center gap-2"
        ></div>
      </div>
      <div class="relative mt-15">
        <div
          class="swiper-pagination d-flex allign-items-center justify-content-center gap-2"
        ></div>
      </div>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../../data/AllData";
</script>

<style scoped></style>
