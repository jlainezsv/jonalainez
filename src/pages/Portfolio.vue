<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="pb-60 br-bottom-n3">
        <div class="page-heading">
          <h3
            class="page-title n5-color fs-onefw-semibold n5-color mb-2 mb-md-3 text-center"
          >
            A collection of my best projects
          </h3>
          <p class="fs-seven n5-color mb-4 mb-md-8 text-center">
            I design thoughtful, user-focused digital experiences for clients around the world. From intuitive interfaces to scalable design systems, this portfolio showcases the projects that reflect my approach to design, strategy, and seamless execution.
          </p>
          <RouterLink
            to="/contact"
            class="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
          >
            <PhPaperPlaneTilt /> Hire Me
          </RouterLink>
        </div>
      </div>

      <div class="container mt-8 mt-md-15">
        <TabGroup>
          <TabList
            class="d-flex gap-3 gap-md-7 align-items-center justify-content-center"
          >
            <Tab as="template" v-slot="{ selected }">
              <button
                class="fs-seven fw-medium n3-color"
                :class="{ 'p1-color tab-active': selected }"
              >
                All
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                class="fs-seven fw-medium n3-color"
                :class="{ 'p1-color tab-active': selected }"
              >
                UX & Interaction Design
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                class="fs-seven fw-medium n3-color"
                :class="{ 'p1-color tab-active': selected }"
              >
                Product Design
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                class="fs-seven fw-medium n3-color"
                :class="{ 'p1-color tab-active': selected }"
              >
                Front-End Development
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                class="fs-seven fw-medium n3-color"
                :class="{ 'p1-color tab-active': selected }"
              >
                Branding & Visual Identity
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                class="fs-seven fw-medium n3-color"
                :class="{ 'p1-color tab-active': selected }"
              >
                Digital Marketing Assets
              </button>
            </Tab>
          </TabList>


          <TabPanels class="mt-8 mt-md-15">
            <TabPanel>
              <div class="row g-5 g-md-10 ">
                <FeaturedCard v-for="item in featureds" :key="item.id" v-bind="{ ...item }" />
              </div>
            </TabPanel>
            <TabPanel>
              <div class="row g-5 g-md-10">
                <FeaturedCard
                  v-for="item in featureds.slice(2, 6)"
                  v-bind="{ ...item }"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div class="row g-5 g-md-10 ">
                <FeaturedCard
                  v-for="item in featureds.slice(1, 5)"
                  v-bind="{ ...item }"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div class="row g-5 g-md-10">
                <FeaturedCard
                  v-for="item in featureds.slice(3, 7)"
                  v-bind="{ ...item }"
                />
              </div>
            </TabPanel>
            <TabPanel>
              <div class="row g-5 g-md-10">
                <FeaturedCard
                  v-for="item in featureds.slice(3, 6)"
                  v-bind="{ ...item }"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { PhPaperPlaneTilt } from "@phosphor-icons/vue";
import Footer from "../components/Shared/Footer.vue";
import { featureds } from "../data/AllData";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import FeaturedCard from "../components/Pages/About/Featured/FeaturedCard.vue";
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
