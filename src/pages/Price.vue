<template>
  <div>
    <section class="pt-120 pb-120 br-bottom-n3 mt-10 mt-lg-0">
      <div class="pb-60 br-bottom-n3">
        <div class="page-heading">
          <h3
            class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
          >
            Services & Pricing
          </h3>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            I have 10+ years of development experience building software for the
            web and mobile devices. You can take a look at my
            <RouterLink to="/resume" class="p1-color">
              online resume </RouterLink
            >and
            <RouterLink to="/portfolio" class="p1-color">
              project portfolio
            </RouterLink>
            to find out more about my skills and experiences.
          </p>

          <RouterLink
            to="/contact"
            class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto w-max"
          >
            <PhPaperPlaneTilt />
            Hire Me
          </RouterLink>
        </div>
      </div>

      <div class="container mt-8 mt-md-15">
        <div class="section-heading">
          <div class="d-flex align-items-center gap-2">
            <div class="title-line"></div>
            <h2 class="display-four n5-color fw-semibold">Service Packages</h2>
          </div>
          <p class="fs-seven n4-color mt-2 mt-md-4">
            Explore the range of services I provide to help bring your projects
            to life. From initial concept to final delivery, I am committed to
            delivering high-quality results tailored to your needs.
          </p>
        </div>

        <section class="mt-8 mt-md-15">
          <PackagePrice />
        </section>

        <div data-aos="zoom-in" class="hire-content mt-8 mt-md-15">
          <h4 class="n5-color fs-three fw-semibold text-center mb-2 mb-md-4">
            Want to hire me for custom package?
          </h4>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <RouterLink
            to="/contact"
            class="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
          >
            <PhPaperPlaneTilt />
            Hire Me
          </RouterLink>
        </div>
      </div>
    </section>
    <Faqs />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import Footer from "../components/Shared/Footer.vue";
import PackagePrice from "../components/Pages/Price/PackagePrice.vue";
import Faqs from "../components/Pages/Price/Faqs.vue";
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";
</script>

<style scoped></style>
