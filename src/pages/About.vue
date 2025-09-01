<template>
  <div>
    <section class="pt-120 pb-60 br-bottom-n3 mt-10 mt-lg-0">
      <div class="container">
        <Banner />
        <Counter />
      </div>
    </section>
    <WhatDo />
    <NextProject />
    <Featured />
    <!-- <Testimonials />
    <LatestBlog /> -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/Pages/About/Banner.vue";
// import LatestBlog from "../components/Pages/About/Blog/LatestBlog.vue";
import Counter from "../components/Pages/About/Counter.vue";
import Featured from "../components/Pages/About/Featured/Featured.vue";
import NextProject from "../components/Pages/About/NextProject.vue";
// import Testimonials from "../components/Pages/About/Testimonials.vue";
import WhatDo from "../components/Pages/About/WhatDo.vue";
import Footer from "../components/Shared/Footer.vue";
</script>

<style scoped></style>
