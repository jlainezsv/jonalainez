
<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60">
        <div class="page-heading">
          <h3
            class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
          >
            Into The Box 2023
          </h3>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            Modernized the event website with a scalable CMS-driven structure, improving content management and development speed for future editions.
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
                  Project With:
                </span>
                <span class="n5-color fs-six fw-medium">Ortus Solutions</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Role
                </span>
                <span class="n5-color fs-six fw-medium"> Designer and Project Coordinator </span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Technologies
                </span>
                <span class="n5-color fs-six fw-medium"> HTML5, CSS3, CMS, Bootstrap</span>
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
                    Into The Box is an annual developer conference hosted by Ortus Solutions in the United States. For the 10th anniversary edition in 2023, I led the complete redesign of the website to modernize its structure and streamline future updates.                </p>
                <p class="text-seven n4-color">
                    The project involved implementing ContentBox CMS to replace hardcoded pages, enabling easy content management and preserving access to past editions via an archive system. I also developed a clean, reusable style guide and led the design direction to ensure consistency and scalability.                </p>
                <p class="text-seven n4-color">
                    This foundation allowed us to launch the 2024 site in record time—focusing only on content and styling—demonstrating the long-term value of the structural and design decisions made in 2023.                </p>
              </div>

              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Challenge
                </h2>
                <p class="text-seven n4-color">
                  Previous editions were built as static sites, making annual updates time-consuming and error-prone. The lack of a CMS also limited collaboration and content flexibility.
                </p>
              </div>
              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Process
                </h2>
                <ul>
                    <li>Audited past event sites and identified content overlap</li>
                    <li>Proposed and implemented ContentBox CMS</li>
                    <li>Designed and coded a modular, reusable template</li>
                    <li>Defined a scalable stylesheet and design system</li>
                    <li>Led design and dev collaboration across teams</li>
                </ul>
              </div>

              <div data-aos="fade-up" class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Results
                </h2>
                <ul>
                    <li>Improved content editing workflow via CMS</li>
                    <li>Reduced annual launch time from months to under 4 weeks</li>
                    <li>Created a flexible system supporting yearly redesigns without starting from scratch</li>
                </ul>
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
import project1 from "@/assets/images/project-itb23.png"
</script>

<style scoped></style>
