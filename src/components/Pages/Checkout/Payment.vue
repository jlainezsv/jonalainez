<script setup lang="ts">
import { ref } from "vue";
import AnimateHeight from "vue-animate-height";

const selectedOption = ref<string>("py1");
const handleOptionChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selectedOption.value = target.id;
};
</script>

<template>
  <div class="brn4 p-3 p-md-5 rounded">
    <h5 class="fs-six fw-medium n5-color">Payment</h5>
    <p class="n4-color fs-eight mb-3 mb-md-5">
      All transactions are secure and encrypted.
    </p>

    <div class="d-flex flex-column gap-2 gap-md-3">
      <!-- {/* Radio Option 1 */} -->
      <div class="radio-wrapper position-relative">
        <div
          class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
          :class="{'radio-active-bg': selectedOption === 'py1' }"
        >
          <input
            type="radio"
            required
            class="payment brn4 p-3 n5-color my-2 my-md-3 w-max"
            id="py1"
            name="pay"
            defaultChecked
            @change="handleOptionChange"
          />
          <label for="py1" class="cursor-pointer n5-color py-1 py-md-2 w-100">
            Cash on Delivery (COD)
          </label>
        </div>
        <AnimateHeight
          :duration="500"
          :height="selectedOption === 'py1' ? 'auto' : 0"
        >
          <div class="radio-content p-2 rounded bgn2-color">
            <p class="n5-color text-center">
              Only applicable INSIDE DHAKA CITY
            </p>
          </div>
        </AnimateHeight>
      </div>

      <!-- {/* Radio Option 2 */} -->
      <div class="radio-wrapper position-relative">
        <div
          class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
          :class="{ 'radio-active-bg': selectedOption === 'py2' }"
        >
          <input
            type="radio"
            required
            class="payment brn4 p-3 n5-color my-2 my-md-3 w-max"
            id="py2"
            name="pay"
            @change="handleOptionChange"
          />
          <label for="py2" class="cursor-pointer n5-color py-1 py-md-2 w-100">
            Bkash Payment
          </label>
        </div>
        <AnimateHeight
          :duration="500"
          :height="selectedOption === 'py2' ? 'auto' : 0"
        >
          <div class="radio-content p-2 rounded bgn2-color">
            <span class="n5-color d-block"> Pay with your bkash wallet </span>
            <span class="n5-color d-block">
              4004911111 - Merchant Account (Make Payment)
            </span>
            <span class="n5-color d-block">
              Put your order ID as reference number
            </span>
          </div>
        </AnimateHeight>
      </div>

      <!-- Radio Option 3  -->
      <div class="radio-wrapper position-relative">
        <div
          class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
          :class="{ 'radio-active-bg': selectedOption === 'py3' }"
        >
          <input
            type="radio"
            required
            class="payment brn4 p-3 n5-color my-2 my-md-3 w-max"
            id="py3"
            name="pay"
            @change="handleOptionChange"
          />
          <label for="py3" class="cursor-pointer n5-color py-1 py-md-2 w-100">
            Bank Transfer - BEFTN/NPSB
          </label>
        </div>
        <AnimateHeight
          :duration="500"
          :height="selectedOption === 'py3' ? 'auto' : 0"
        >
          <div class="radio-content p-2 rounded bgn2-color">
            <span class="n5-color d-block">
              You can transfer the invoice amount to following Bank Account:
            </span>
            <span class="n5-color d-block">
              Bank Name: City Bank Bangladesh
            </span>
            <span class="n5-color d-block">
              Account Name: GRID Ventures Ltd
            </span>
            <span class="n5-color d-block">
              Account Number: 1003615365001
            </span>
            <span class="n5-color d-block"> Branch Name: Banani Branch </span>
            <span class="n5-color d-block">
              Please call us at 014044-330 to confirm the payment after the
              transfer.
            </span>
          </div>
        </AnimateHeight>
      </div>

      <!-- {/* Radio Option 4 */} -->
      <div class="radio-wrapper position-relative">
        <div
          class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
          :class="{ 'radio-active-bg': selectedOption === 'py4' }"
        >
          <input
            type="radio"
            required
            class="payment brn4 p-3 n5-color my-2 my-md-3 w-max"
            id="py4"
            name="pay"
            @change="handleOptionChange"
          />
          <label for="py4" class="cursor-pointer n5-color py-1 py-md-2 w-100">
            Cash On Delivery - Outside Dhaka
          </label>
        </div>
        <AnimateHeight
          :duration="500"
          :height="selectedOption === 'py4' ? 'auto' : 0"
        >
          <div class="radio-content p-2 rounded bgn2-color">
            <p class="n5-color d-block">
              Minimum 10% of total invoice amount + shipping charge needs to be
              paid in Advance.
            </p>
          </div>
        </AnimateHeight>
      </div>

      <!-- {/* Radio Option 5 */} -->
      <div class="radio-wrapper position-relative">
        <div
          class="radioBtn d-flex gap-2 align-items-center brn4 px-2 px-md-3 rounded w-100"
          :class="{ 'radio-active-bg': selectedOption === 'py5' }"
        >
          <input
            type="radio"
            required
            class="payment brn4 p-3 n5-color my-2 my-md-3 w-max"
            id="py5"
            name="pay"
            @change="handleOptionChange"
          />
          <label for="py5" class="cursor-pointer n5-color py-1 py-md-2 w-100">
            EMI - Credit Card
          </label>
        </div>
        <AnimateHeight
          :duration="500"
          :height="selectedOption === 'py5' ? 'auto' : 0"
        >
          <div class="radio-content p-2 rounded bgn2-color">
            <span class="n5-color d-block">
              EMI available for following bank credit card:
            </span>
            <span class="n5-color d-block">Eastern Bank Limited</span>
            <span class="n5-color d-block"> LankaBangla Finance Limited </span>
            <span class="n5-color d-block">United Commercial Bank</span>
            <span class="n5-color d-block">Dutch Bangla Bank Ltd.</span>
            <span class="n5-color d-block">BRAC Bank</span>
          </div>
        </AnimateHeight>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
