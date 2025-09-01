<template>
  <div
    class="color-switcher"
    :class="{ opened: isOpened }"
    @click="toggleSwitcher"
  >
    <button class="switcher-btn">
      <PhGearSix />
    </button>
    <div class="pallates box-shadow2 brn4 d-flex flex-column gap-2">
      <div class="d-flex gap-2">
        <button
          v-for="(color, index) in colors"
          :key="index"
          class="color-btn"
          :class="`bg-color${index + 1}`"
          :data-color="color"
          @click="setColor(color)"
        ></button>
      </div>
      <div class="d-flex gap-2">
        <button
          v-for="(color, index) in colors2"
          :key="index"
          class="color-btn"
          :class="`bg-color${index + 4}`"
          :data-color="color"
          @click="setColor(color)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhGearSix } from "@phosphor-icons/vue";
import { ref, onMounted } from "vue";

const isOpened = ref(false);
const colors = ref<string[]>([
  "120, 171, 168",
  "255, 145, 251",
  "253, 187, 46",
]);
const colors2 = ref<string[]>(["82, 113, 255", "0, 255, 255", "84, 182, 137"]);

const toggleSwitcher = () => {
  isOpened.value = !isOpened.value;
};

const setColor = (color: string) => {
  document.documentElement.style.setProperty("--p1", color);
  localStorage.setItem("primary-color", color);
};

onMounted(() => {
  const colorBg = localStorage.getItem("primary-color");
  if (colorBg) {
    document.documentElement.style.setProperty("--p1", colorBg);
  }
});
</script>
