
<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60">
        <div class="page-heading">
          <h3
            class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
          >
            JS Tours & Travels
          </h3>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            Designed and led the front-end development of a corporate website for a U.S.-based tour company, focusing on conveying its brand energy and supporting partnerships with local vendors.
          </p>
          <RouterLink
            to="/contact"
            class="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
          >
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
                  Client:
                </span>
                <span class="n5-color fs-six fw-medium">JS Tours & Travels</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Role
                </span>
                <span class="n5-color fs-six fw-medium"> Web Designer </span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Technologies
                </span>
                <span class="n5-color fs-six fw-medium"> HTML5, CSS3, JavaScript, Bootstrap, and jQuery</span>
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
                 I designed and led the development of this website in 2018 for a U.S. company specializing in tours and travel. The main goal was to create an institutional digital presence that captured the company’s energy and essence, helping them establish partnerships with local providers in Maui. I actively contributed to the development process, writing approximately 30% of the front-end code. Additionally, I edited and optimized images to enhance their visual quality and ensure they were web-ready. The platform was built using HTML5, CSS3, JavaScript, Bootstrap 3, and jQuery.

                </p>
              </div>

              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Challenge
                </h2>
                <p class="text-seven n4-color">
                  To design an engaging and functional corporate website that embodied the energy and identity of a travel company, supporting their launch in Maui and facilitating partnerships with local vendors.
                </p>
              </div>
              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Process
                </h2>
                <p class="text-seven n4-color mb-5 mb-md-10">
                  I designed the site from the ground up, focusing on visual identity and usability. This included editing and optimizing images (light, composition, clarity), curating and structuring content, and collaborating with the team on development—contributing around 35% of the front-end code. I used Bootstrap for responsive layouts and jQuery for interactive components.
                </p>
              </div>

              <div data-aos="fade-up" class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Results
                </h2>
                <p data-aos="fade-up" class="text-seven n4-color">
                  A visually strong and brand-aligned corporate website that clearly communicated the company's values, improved communication with vendors and customers, and reinforced their online presence in a competitive tourism market.

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
import project1 from "@/assets/images/project-jstours.png"
</script>

<style scoped></style>
