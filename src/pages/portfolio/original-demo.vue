
<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60">
        <div class="page-heading">
          <h3
            class="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
          >
            Case Study: Project Jericho
          </h3>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            aqui una description, cambia o es la misma para todos?
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
                <span class="n5-color fs-six fw-medium">  Product Designer</span>
                <span class="n3-color fs-nine fw-regular d-block">
                  Branding & UI Focus
                </span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Team
                </span>
                <span class="n5-color fs-six fw-medium">Developers, Project Manager, Marketing Team</span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Product Type
                </span>
                <span class="n5-color fs-six fw-medium">Programming Language </span>
                <span class="n3-color fs-nine fw-regular d-block">
                  Brand Identity + Digital Presence
                </span>
              </div>
              <div>
                <span class="n4-color fs-eight fw-medium d-block">
                  Technologies
                </span>
                <span class="n5-color fs-six fw-medium">Figma, Bootstrap</span>
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
              <div data-aos="fade-up" class="my-8 my-md-15">
                <p class="text-seven n4-color">
                  Short description of the client and project requirements.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor.
                </p>
                <h3
                  class="fs-five n5-color fw-semibold mt-5 mt-md-10 mb-2 mb-md-4"
                >
                  Project Requirements
                </h3>
                <ul>
                  <li class="n4-color fs-seven mb-2 mb-md-3">
                    Requirement lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit.
                  </li>
                  <li class="n4-color fs-seven mb-2 mb-md-3">
                    Requirement donec pede justo, fringilla vel, aliquet nec.
                  </li>
                  <li class="n4-color fs-seven mb-2 mb-md-3">
                    Requirement phasellus ullamcorper ipsum rutrum nunc.
                  </li>
                </ul>
              </div>
              <div data-aos="fade-up" class="mb-8 mb-md-15">
                <h2 class="fs-one fw-semibold n5-color mb-2 mb-md-4">
                  Project Overview
                </h2>
                <p class="text-seven n4-color">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus.
                </p>
              </div>

              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Challenge
                </h2>
                <p class="text-seven n4-color">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus.
                </p>
              </div>
              <div class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Approach & Solution
                </h2>
                <p class="text-seven n4-color mb-5 mb-md-10">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus.
                </p>
                <div class="row g-3 g-md-6">
                  <div class="col-sm-6 overflow-hidden">
                    <img
                      :src="project2"
                      alt="project"
                      class="w-100 object-fit-cover portfolio-details-img"
                    />
                  </div>
                  <div class="col-sm-6 overflow-hidden">
                    <img
                      :src="project3"
                      alt="project"
                      class="w-100 object-fit-cover portfolio-details-img"
                    />
                  </div>
                </div>
                <p class="text-seven n4-color mt-5 mt-md-10">
                  Short description of the client and project requirements.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. Aenean commodo ligula eget
                  dolor.
                </p>
              </div>

              <div data-aos="fade-up" class="mb-8 mb-md-15">
                <h2 class="fs-two fw-semibold n5-color mb-2 mb-md-4">
                  The Results
                </h2>
                <div class="row g-3 g-md-5">
                  <div class="col-sm-6 col-xl-4 col-xxl-3">
                    <div class="bgn2-color brn4 p-3 p-md-5">
                      <span class="p1-color fs-six fw-medium mb-2 d-block">
                        Efficiency
                      </span>
                      <div class="d-flex align-items-end gap-1 mb-2 mb-md-3">
                        <h4 class="fs-three n5-color fw-semibold">20%</h4>
                        <span class="fs-six n4-color fw-medium"> up </span>
                      </div>
                      <p class="fs-eight n4-color">
                        Metric description lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4 col-xxl-3">
                    <div class="bgn2-color brn4 p-3 p-md-5">
                      <span class="p1-color fs-six fw-medium mb-2 d-block">
                        Customer Happy
                      </span>
                      <div class="d-flex align-items-end gap-1 mb-2 mb-md-3">
                        <h4 class="fs-three n5-color fw-semibold">14%</h4>
                        <span class="fs-six n4-color fw-medium"> up </span>
                      </div>
                      <p class="fs-eight n4-color">
                        Metric description lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4 col-xxl-3">
                    <div class="bgn2-color brn4 p-3 p-md-5">
                      <span class="p1-color fs-six fw-medium mb-2 d-block">
                        Sales Generated
                      </span>
                      <div class="d-flex align-items-end gap-1 mb-2 mb-md-3">
                        <h4 class="fs-three n5-color fw-semibold">$130K</h4>
                      </div>
                      <p class="fs-eight n4-color">
                        Metric description lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-6 col-xl-4 col-xxl-3">
                    <div class="bgn2-color brn4 p-3 p-md-5">
                      <span class="p1-color fs-six fw-medium mb-2 d-block">
                        Overall Cost
                      </span>
                      <div class="d-flex align-items-end gap-1 mb-2 mb-md-3">
                        <h4 class="fs-three n5-color fw-semibold">20%</h4>
                        <span class="fs-six n4-color fw-medium"> down </span>
                      </div>
                      <p class="fs-eight n4-color">
                        Metric description lorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p data-aos="fade-up" class="text-seven n4-color">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              </p>
            </div>
          </div>
        </div>
      </div>]
      
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
import project1 from "@/assets/images/project-boxlang.png"
import project2 from "@/assets/images/project2.png"
import project3 from "@/assets/images/project3.png"
</script>

<style scoped></style>
