
<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60">
        <div class="page-heading">
          <h3
            class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">
            Image Connections
          </h3>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            Redesigned and implemented a custom e-commerce platform to streamline product navigation and personalization for a U.S.-based uniform and apparel retailer.
          </p>
          <RouterLink
            to="/contact"
            class="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto">
            <PhPaperPlaneTilt />
            <i class="ph ph-paper-plane-tilt"></i>Hire Me
          </RouterLink>
        </div>
      </div>
      <div class="container my-8 my-md-15">
        <div class="row g-6">
          <div class="col-12 col-xl-3">
            <div class="d-flex flex-column gap-5 position-sticky top-5">
                <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Project With:
                </span>
                <span class="n5-color fs-six fw-medium">Ortus Solutions</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Client:
                </span>
                <span class="n5-color fs-six fw-medium">Image Connections</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Role
                </span>
                <span class="n5-color fs-six fw-medium">Product Designer & Front-End Developer </span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Technologies
                </span>
                <span class="n5-color fs-six fw-medium"> HTML5, CSS3, Bootstrap</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Website
                </span>
                <RouterLink
                  to="#"
                  class="n5-color fs-six fw-medium d-flex align-items-center gap-2"
                >
                  Live preview <PhArrowRight />
                  
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-9">
            <div class="project-details-content">
              <div class="overflow-hidden">
                <img
                  :src="project1"
                  alt="project"
                  class="w-100 portfolio-details-img"
                />
              </div>
              <div data-aos="fade-up" class="mb-8 mb-md-15">
                <h2 class="fs-one fw-semibold n5-color mb-2 mb-md-4">
                  Project Summary
                </h2>
                <p class="text-seven n4-color">
                 This project was divided into two key phases. In the first phase, I led the UX/UI redesign of the entire website. I began with a full review of the site's architecture and usability, identifying multiple opportunities to improve how product categories and information were displayed. A primary goal was to reduce the number of clicks needed to find and customize a product, making the experience smoother and more intuitive.
                </p>
                <p class="text-seven n4-color">
                A major contribution was the design of a vertical navigation system that supports a wide range of product categories. This expandable/collapsible menu included category-specific icons to aid recognition and enhance user comprehension.
                </p>
                <p class="text-seven n4-color">
                Another critical area of improvement was the customization process, which was previously managed in a multi-step flow within the cart. I redesigned this experience by shifting the customization options—placement, decoration method, file uploads, etc.—to the product detail page, dynamically adapting fields based on item type and availability. This change allowed us to simplify the cart from 6 pages to a single, clear summary with essential purchase, delivery, and payment details.
                </p>
                <p class="text-seven n4-color">
                 In the second phase, I transitioned into a Front-End Developer role, implementing the approved UI designs using HTML, CSS, and Bootstrap. I set up the front-end structure, ensured responsive behavior across devices, and shared the final codebase via a Git repository with the backend development team.
                </p>
              </div>

              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Challenge
                </h2>
                <p class="text-seven n4-color">
                  The existing website had a fragmented user experience with a cumbersome customization process and inefficient navigation. Users had to go through multiple steps in the cart to personalize products, and the category structure made it difficult to browse effectively—leading to friction, confusion, and unnecessary clicks.
                </p>
              </div>
              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Process
                </h2>
                <p class="text-seven n4-color mb-5 mb-md-10">
                  In the first phase, I led the complete UX/UI redesign of the website. I audited the site’s architecture and usability, redesigned the product navigation using a vertical expandable menu with category-specific icons, and relocated the customization options to the product detail page, enabling dynamic field updates based on item type and availability. 
                </p>
                <p class="text-seven n4-color mb-5 mb-md-10">
                    In the second phase, I transitioned into development, implementing the approved UI using HTML, CSS, and Bootstrap. I ensured responsive behavior, set up the front-end structure, and delivered the codebase through Git for integration with the backend team.
                </p>
              </div>

              <div data-aos="fade-up" class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Results
                </h2>
                <p data-aos="fade-up" class="text-seven n4-color">
                    The redesign significantly improved the user journey by reducing friction in navigation and customization. The new interface reduced the cart flow from 6 pages to a single-page summary and made the product personalization process more intuitive—ultimately supporting a smoother purchase experience and increasing user confidence.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <NextProject />
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { PhArrowRight, PhPaperPlaneTilt } from "@phosphor-icons/vue";
import NextProject from "../../components/Pages/About/NextProject.vue";
import { RouterLink } from "vue-router";
import Footer from "../../components/Shared/Footer.vue";
import project1 from "@/assets/images/project-image.png"
</script>

<style scoped></style>
