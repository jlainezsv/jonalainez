<template>
  <div class="side-menu" :class="{ 'active open': sidebarOpen }">
    <div
      @click="toggleSidebar"
      class="sidebar-btn close-btn cursor-pointer d-block d-lg-none"
    >
      <i class="fs-two p1-color">
        <PhX />
      </i>
    </div>

    <div class="d-flex">
      <div class="side-menu-left">
        <div>
          <div
            class="d-flex flex-column gap-8 justify-content-center align-items-center mt-6"
          >
            <!-- <RouterLink to="/" class="side-icon p1-color bgn2-color brn4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="15"
                viewBox="0 0 11 15"
                fill="none"
              >
                <g clipPath="url(#clip0_3569_434)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.69145 8.43063L1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L5.69145 10.9887V8.43063Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L1.72801 5.49387Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.86328 6.5702L8.82672 9.5065L4.86328 12.4606V15.0004L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.86328 6.5702L8.82672 9.5065L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.72466 2.00391C9.52091 2.00391 10.1657 2.64912 10.1657 3.44491C10.1657 4.24115 9.52091 4.88591 8.72466 4.88591C7.92841 4.88591 7.2832 4.2407 7.2832 3.44491C7.2832 2.64912 7.92841 2.00391 8.72466 2.00391Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.83013 12.9972C1.03388 12.9972 0.388672 12.352 0.388672 11.5562C0.388672 10.7604 1.03388 10.1152 1.82967 10.1152C2.62546 10.1152 3.27067 10.76 3.27067 11.5562C3.27067 12.3525 2.62592 12.9972 1.82967 12.9972H1.83013Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath>
                    <rect width="10.5561" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </RouterLink>
            <RouterLink to="#" class="position-relative">
              <div class="side-icon bg1-color">
                <i class="n11-color">
                  <PhShoppingCart />
                </i>
              </div>
              <div class="cart-counter">
                <span class="n1-color">{{ cartItems.length }}</span>
              </div>
            </RouterLink> -->
            <div class="d-flex flex-column align-items-center gap-1">
              <!-- <span class="toggle_name fs-eleven n5-color" v-if="isDark"
                >Light</span
              >
              <span class="toggle_name fs-eleven n5-color" v-else
                >Dark</span
              > -->
              <div class="side-icon bg1-color" @click="toggleDark()">
                <span
                  v-if="isDark"
                  class="dark_btn d-flex justify-content-center align-items-center n11-color"
                >
                  <PhMoon weight="fill" />
                </span>
                <span
                  v-else
                  class="dark_btn d-flex justify-content-center align-items-center n11-color"
                >
                  <PhSun weight="fill" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="side-menu-right overflow-y-auto">
        <div
          class="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100"
        >
          <div class="">
            <div class="sidebar-profile">
              <div class="position-relative">
                <div
                  class="profile-img1 d-flex justify-content-center overflow-hidden mx-auto"
                >
                  <img :src="profile" alt="user" class="" />
                </div>
                <span class="thumb">👋</span>
              </div>
              <h4 class="n5-color fw-semibold fs-five mt-2 text-center">
                Jonathan Lainez
              </h4>
              <span class="n5-color fs-nine d-block text-center">
                Digital Nomad
              </span>
              <div
                class="d-flex justify-content-center gap-2 align-items-center mt-4"
              >
                <!-- <RouterLink to="#" class="social-icon">
                  <i class="p1-color">
                    <PhFacebookLogo />
                  </i>
                </RouterLink>
                <RouterLink to="#" class="social-icon">
                  <i class="p1-color">
                    <PhInstagramLogo />
                  </i>
                </RouterLink>
                <RouterLink to="#" class="social-icon">
                  <i class="p1-color">
                    <PhX />
                  </i>
                </RouterLink>
                -->
                <a
                  href="https://github.com/jlainezsv"
                  target="_blank"
                  rel="noopener"
                  class="social-icon"
                >
                  <i class="p1-color">
                    <PhGithubLogo />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jelainez/"
                  target="_blank"
                  rel="noopener"
                  class="social-icon"
                >
                  <i class="p1-color">
                    <PhLinkedinLogo />
                  </i>
                </a>
              </div>
            </div>
            <div class="line-divider my-4 my-md-8"></div>
            <div class="menu-list">
              <ul class="d-flex flex-column gap-3">
                <li
                  :key="id"
                  v-for="{ id, url, name, icon, numbers } in sidebarsData"
                  class="rounded-3"
                >
                  <RouterLink
                    :to="url"
                    class="d-flex justify-content-between align-items-center n5-color rounded-3"
                  >
                    <div
                      class="menu-item d-flex align-items-center gap-2 fs-eight px-3 py-2"
                    >
                      <component :is="icon" :size="20" />
                      {{ name }}
                    </div>
                    <span
                      v-if="numbers"
                      class="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3"
                    >
                      {{ numbers }}
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <RouterLink
            to="/contact"
            class="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
          >
            <PhPaperPlaneTilt />
            Hire Me
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  // PhFacebookLogo,
  // PhInstagramLogo,
  PhLinkedinLogo,
  PhMoon,
  PhPaperPlaneTilt,
  PhGithubLogo,
  // PhShoppingCart,
  PhSun,
  PhX,
} from "@phosphor-icons/vue";
import { sidebarsData } from "../../data/Sidebar.ts";
defineProps<{ sidebarOpen: boolean; toggleSidebar: () => void }>();
// const {cartItems} = useCartStore()
import { useDark, useToggle } from "@vueuse/core";
import { RouterLink } from "vue-router";
// import { useCartStore } from "../../stores/cart.ts";
const isDark = useDark();
const toggleDark = useToggle(isDark);
import profile from "@/assets/images/profile.png";
</script>


