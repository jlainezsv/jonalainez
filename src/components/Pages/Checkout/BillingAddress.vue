<template>
  <div class="brn4 p-3 p-md-5 rounded">
    <h5 class="fs-six fw-medium n5-color mb-3 mb-md-5">Billing address</h5>
    <div class="d-flex flex-column gap-2 gap-md-3">
      <!-- Option 1 -->
      <div class="radio-wrapper position-relative">
        <div
          class="radioBtn active d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
          :class="selectedOption === 'py11' ? 'radio-active-bg' : ''"
        >
          <input
            type="radio"
            required
            id="py11"
            name="billing"
            class="billing brn4 p-3 n5-color my-2 my-md-3 w-max"
            checked
            @change="handleOptionChange"
          />
          <label for="py11" class="cursor-pointer n5-color py-1 py-md-2 w-100">
            Same as shipping address
          </label>
        </div>
      </div>

      <!-- Option 2 -->
      <div class="radio-wrapper position-relative">
        <div
          class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
          :class="selectedOption === 'py22' ? 'radio-active-bg' : ''"
        >
          <input
            type="radio"
            required
            id="py22"
            name="billing"
            class="billing brn4 p-3 n5-color my-2 my-md-3 w-max"
            @change="handleOptionChange"
          />
          <label for="py22" class="cursor-pointer n5-color py-1 py-md-2 w-100">
            Use a different billing address
          </label>
        </div>

        <AnimateHeight :duration="500" :height="selectedOption === 'py22' ? 'auto' : 0">
          <div class="radio-content p-3 rounded bgn2-color">
            <SelectCountry />

            <!-- Name -->
            <div class="d-flex flex-wrap flex-xxl-nowrap align-items-center gap-2 gap-md-3 my-2 my-md-3">
              <div class="w-100">
                <input
                  v-model="form.firstName"
                  type="text"
                  placeholder="First Name"
                  :class="['brn4 p-3 n5-color bgn1-color w-100', errors.firstName && 'border-danger']"
                />
                <p v-if="errors.firstName" class="text-danger small mt-1">{{ errors.firstName }}</p>
              </div>
              <div class="w-100">
                <input
                  v-model="form.lastName"
                  type="text"
                  placeholder="Last Name"
                  :class="['brn4 p-3 n5-color bgn1-color w-100', errors.lastName && 'border-danger']"
                />
                <p v-if="errors.lastName" class="text-danger small mt-1">{{ errors.lastName }}</p>
              </div>
            </div>

            <!-- Company -->
            <input
              v-model="form.company"
              type="text"
              placeholder="Company (optional)"
              class="brn4 p-3 n5-color my-2 my-md-3 bgn1-color w-100"
            />

            <!-- Address -->
            <div class="w-100">
              <input
                v-model="form.address"
                type="text"
                placeholder="Address"
                :class="['brn4 p-3 n5-color my-2 my-md-3 bgn1-color w-100', errors.address && 'border-danger']"
              />
              <p v-if="errors.address" class="text-danger small mt-1">{{ errors.address }}</p>
            </div>

            <!-- Apartment -->
            <input
              v-model="form.apartment"
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              class="brn4 p-3 n5-color my-2 my-md-3 bgn1-color w-100"
            />

            <!-- City + Postal Code -->
            <div class="d-flex flex-wrap flex-xxl-nowrap align-items-center gap-2 gap-md-3 my-2 my-md-3">
              <div class="w-100">
                <input
                  v-model="form.city"
                  type="text"
                  placeholder="City"
                  :class="['brn4 p-3 n5-color bgn1-color w-100', errors.city && 'border-danger']"
                />
                <p v-if="errors.city" class="text-danger small mt-1">{{ errors.city }}</p>
              </div>
              <input
                v-model="form.postalCode"
                type="text"
                placeholder="Postal Code (optional)"
                class="brn4 p-3 n5-color bgn1-color w-100"
              />
            </div>

            <!-- Phone -->
            <div class="w-100">
              <input
                v-model="form.phone"
                type="number"
                placeholder="Phone"
                :class="['brn4 p-3 n5-color my-2 my-md-3 bgn1-color w-100', errors.phone && 'border-danger']"
              />
              <p v-if="errors.phone" class="text-danger small mt-1">{{ errors.phone }}</p>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import AnimateHeight from "vue-animate-height";
import SelectCountry from "./SelectCountry.vue";

// Selected billing option
const selectedOption = ref<string>("py11");

// Form state
const form = reactive({
  firstName: "",
  lastName: "",
  company: "",
  address: "",
  apartment: "",
  city: "",
  postalCode: "",
  phone: "",
});

// Error messages
const errors = reactive<Record<string, string>>({});

// Radio button change
const handleOptionChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedOption.value = target.id;
};

// Validate fields
const validateForm = () => {
  if (selectedOption.value === "py11") return true;

  errors.firstName = !form.firstName ? "First name is required." : "";
  errors.lastName = !form.lastName ? "Last name is required." : "";
  errors.address = !form.address ? "Address is required." : "";
  errors.city = !form.city ? "City is required." : "";
  errors.phone = !form.phone ? "Phone is required." : "";

  return Object.values(errors).every((e) => !e);
};

// Expose to parent (optional)
defineExpose({ validateForm, form });
</script>

<style scoped>
.text-danger {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
.border-danger {
  border: 1px solid #dc3545 !important;
}
</style>
