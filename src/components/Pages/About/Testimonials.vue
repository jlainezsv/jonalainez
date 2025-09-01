<template>
  <section class="pt-120 pb-120 br-bottom-n3">
    <div class="container">
      <div class="section-heading">
        <div class="d-flex align-items-center gap-2">
          <div class="title-line"></div>
          <h2 class="display-four n5-color fw-semibold">Testimonials</h2>
        </div>
        <p class="fs-seven n4-color mt-2 mt-md-4">
          See how I&apos;ve helped our clients succeed. IT’s a highly
          Customizable,creative, modern, visually stunning and Bootstrap5 HTML5
          Template.
        </p>
      </div>

      <div class="mt-8 mt-md-15 overflow-x-hidden">
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
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }"
          :modules="[Autoplay, Pagination]"
        >
          <swiper-slide
            v-for="{ id, img, name, des, country } in testimonials"
            :key="id"
          >
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
              <p class="n4-color fs-six">{{ des }}</p>
              <div class="d-flex gap-3 align-items-center mt-4 mt-md-7">
                <img :src="img" alt="testimonial" class="testimonial_img" />
                <div>
                  <span class="fs-eight d-block n5-color">{{ name }}</span>
                  <span class="fs-nine d-block n5-color"> {{ country }} </span>
                </div>
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../../data/AllData";
</script>

<style scoped></style>
