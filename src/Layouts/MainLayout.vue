<template>
  <div class="d-flex">
    <div>
      <Sidebar v-bind="{ sidebarOpen, toggleSidebar }" />
      <TopBar v-bind="{ sidebarOpen, toggleSidebar }" />
      <ColorPicker />
    </div>
    <div class="main-content w-100">
      <slot />
    </div>
    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "../components/Shared/Sidebar.vue";
import TopBar from "../components/Shared/TopBar.vue";
import ColorPicker from "../components/Shared/ColorPicker.vue";
import BottomNav from "../components/Shared/BottomNav.vue";

const sidebarOpen = ref(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>
