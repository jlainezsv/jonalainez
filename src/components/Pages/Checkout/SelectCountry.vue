<script setup lang="ts">
import { PhCaretDown } from "@phosphor-icons/vue";
import { ref } from "vue";

const Countries = [
  { id: 1, name: "Bangladesh" },
  { id: 2, name: "Austrila" },
  { id: 3, name: "India" },
  { id: 4, name: "USA" },
  { id: 5, name: "Canada" },
];

const selectedCountry = ref(Countries[0]);
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectCountry = (country: { id: number; name: string }) => {
  selectedCountry.value = country;
  isOpen.value = false;
};
</script>

<template>
  <div class="position-relative">
    <div
      class="d-flex justify-content-between align-items-center w-100 n5-color brn4 rounded-2 p-3 cursor-pointer"
      @click="toggleDropdown"
    >
      {{ selectedCountry.name }}
      <span>
        <PhCaretDown weight="bold" />
      </span>
    </div>
    <div
      v-if="isOpen"
      class="bgn1-color p-3 brn4 w-100 position-absolute rounded-2 fs-eight"
    >
      <div
        v-for="country in Countries"
        :key="country.id"
        @click="selectCountry(country)"
        :class="[
          'cursor-pointer py-1 fs-eight',
          country.id === selectedCountry.id ? 'p1-color' : 'n5-color',
        ]"
      >
        {{ country.name }}
      </div>
    </div>
  </div>
</template>
