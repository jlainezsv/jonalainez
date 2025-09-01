<template>
  <div class="brn4 p-3 p-md-5 rounded">
    <h5 class="fs-six fw-medium n5-color mb-3 mb-md-5">Shipping method</h5>

    <div
      class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100 mb-2 mb-md-3"
      :class="selectedOption === 'radio1' ? 'radio-active-bg' : ''"
    >
      <input
        type="radio"
        required
        class="brn4 p-3 n5-color my-2 my-md-3 w-max"
        id="radio1"
        name="radio"
        @change="handleOptionChange"
      />
      <label
        for="radio1"
        class="cursor-pointer n5-color d-flex justify-content-between align-items-center py-1 py-md-2 w-100"
      >
        Inside Dhaka City
        <span class="n5-color">Free</span>
      </label>
    </div>

    <div
      class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
      :class="selectedOption === 'radio2' ? 'radio-active-bg' : ''"
    >
      <input
        type="radio"
        required
        class="brn4 p-3 n5-color my-2 my-md-3 w-max"
        id="radio2"
        name="radio"
        @change="handleOptionChange"
      />
      <label
        for="radio2"
        class="cursor-pointer n5-color d-flex justify-content-between align-items-center py-1 py-md-2 w-100"
      >
        Outside Dhaka City
        <span class="n5-color">$20USD</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedOption = ref<string>("");

const handleOptionChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedOption.value = target.id;
};
</script>

<style scoped></style>
