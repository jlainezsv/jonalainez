
<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60">
        <div class="page-heading">
          <h3
            class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
          >
            BlueCherry 
          </h3>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            Led UI redesign and Design System creation for an enterprise ERP platform, improving key workflows, modernizing legacy patterns, and enhancing cross-team design consistency.          </p>
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
                <span class="n5-color fs-six fw-medium">CGS Inc</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Role
                </span>
                <span class="n5-color fs-six fw-medium"> Senior UI Designer </span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Team
                </span>
                <span class="n5-color fs-six fw-medium">Cross-functional team (Product Managers, Developers, QA, Designers)</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Product Type
                </span>
                <span class="n5-color fs-six fw-medium">Enterprise SaaS (ERP Software)</span>
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
                  Project Overview
                </h2>
                <p class="text-seven n4-color">
                  At CGS, I've been leading the UI redesign efforts for BC Next (Blue Cherry Next)—an enterprise-level ERP solution—for one year. My role involves rethinking and refining key workflows, modernizing legacy UI patterns, and improving user experience across various modules within the system.

                </p>
                <p class="text-seven n4-color">
                  One of the most impactful contributions has been the redesign of the Report Builder, a previously complex and overwhelming interface. I proposed and implemented a 5-step modal-based workflow that simplifies the user journey by focusing on one task at a time—starting with data selection, applying filters, and ending with the preferred report visualization (table, graph, or matrix).

                </p>
                <p class="text-seven n4-color">
                  In parallel, I've been working on the creation and implementation of a Design System tailored for BC Next. This includes component standardization, accessibility improvements, and a comprehensive UI documentation system to ensure design consistency and support cross-team collaboration between developers and designers.

                </p>
              </div>

              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Challenge
                </h2>
                <p class="text-seven n4-color">
                  Modernize a legacy ERP interface and simplify complex workflows to improve usability and reduce user friction, particularly in high-impact modules like the Report Builder.
                </p>
              </div>
              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Process
                </h2>
                <p class="text-seven n4-color mb-5 mb-md-10">
                  Led a full UI redesign across key modules, including the creation of a step-by-step workflow for the Report Builder. Defined scalable UI patterns, improved accessibility, and collaborated closely with product and engineering teams. Built a custom Design System to unify design practices and accelerate future development.
                </p>
              </div>

              <div data-aos="fade-up" class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Results
                </h2>
                <p data-aos="fade-up" class="text-seven n4-color">
                Delivered a cleaner, more intuitive ERP experience that reduces cognitive load for users and supports productivity. The Design System laid the foundation for long-term consistency, accessibility, and design scalability across the platform.
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
import project1 from "@/assets/images/project-cgs.png"
</script>

<style scoped></style>
