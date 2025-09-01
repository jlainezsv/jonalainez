<template>
    <div class="brn4 p-3 p-md-5 rounded">
      <h5 class="fs-six fw-medium n5-color mb-3 mb-md-5">Delivery</h5>
      <SelectCountry />

      <div class="d-flex flex-wrap flex-xxl-nowrap align-items-center gap-2 gap-md-3 my-2 my-md-3 my-2 my-md-3">
        <input
          type="text"
          placeholder="First Name"
          class="brn4 p-3 n5-color"
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          class="brn4 p-3 n5-color"
        />
      </div>
      <input
        type="text"
        placeholder="Company (optional)"
        class="brn4 p-3 n5-color my-2 my-md-3"
      />
      <input
        type="text"
        placeholder="Address"
        required
        class="brn4 p-3 n5-color my-2 my-md-3"
      />
      <input
        type="text"
        placeholder="Apartment, suite, etc. (optional)"
        class="brn4 p-3 n5-color my-2 my-md-3"
      />
      <div class="d-flex flex-wrap flex-xxl-nowrap align-items-center gap-2 gap-md-3 my-2 my-md-3 my-2 my-md-3">
        <input
          type="text"
          placeholder="City"
          required
          class="brn4 p-3 n5-color"
        />
        <input
          type="text"
          placeholder="Postal Code (optional)"
          class="brn4 p-3 n5-color"
        />
      </div>
      <input
        type="number"
        placeholder="Phone"
        required
        class="brn4 p-3 n5-color my-2 my-md-3"
      />
      <div class="d-flex align-items-center gap-2">
        <input type="checkbox" id="check1" class="cursor-pointer fs-six" />
        <label
          for="check1"
          class="n4-color fs-eight cursor-pointer d-block mt-1"
        >
          Save this information for next time
        </label>
      </div>
    </div>
</template>

<script setup lang="ts">
import SelectCountry from './SelectCountry.vue';


</script>

<style scoped>

</style>