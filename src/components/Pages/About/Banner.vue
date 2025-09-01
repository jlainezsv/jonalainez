<template>
  <div
    class="d-flex flex-wrap gap-9 gap-md-12 align-items-center justify-content-between"
  >
    <div class="banner-content">
      <span class="n5-color fs-five">HI, I&apos;M A DIGITAL NOMAD</span>
      <TypingText />
      <p class="fs-seven n5-color">
        I&apos;m a UX/UI designer crafting user-first interfaces with strong front-end foundations.
        <RouterLink to="/portfolio" class="p1-color">
          project portfolio
        </RouterLink>
        and
        <RouterLink to="/resume" class="p1-color"> online resume </RouterLink>
        .
      </p>
      <div
        class="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8"
      >
        <RouterLink
          to="/portfolio"
          class="p-btn n11-color bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
        >
          <PhArrowRight />
          View Portfolio
        </RouterLink>
        <RouterLink
          to="/resume"
          class="p-btn n11-color bgn51-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
        >
          <img :src="resumeIcon" alt="icon" />
          View Resume
        </RouterLink>
      </div>
    </div>

    <div class="position-relative profile-img">
      <div class="user-bg"></div>
      <div class="bg-white">
        <img :src="userImg" alt="user" class="user-img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhArrowRight } from "@phosphor-icons/vue";
import { RouterLink } from "vue-router";
import TypingText from "../../TypingEffect/TypingText.vue";
import userImg from "@/assets/images/user.jpg"
import resumeIcon from "@/assets/images/resume-icon.png"
</script>

<style scoped></style>
