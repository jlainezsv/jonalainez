<template>
  <div>
    <section class="pt-120 pb-120 mt-10 mt-lg-0">
      <div class="container">
        <div class="row g-6 g-xxl-12">
          <div class="col-lg-6 order-2">
            <form class="d-flex flex-column gap-4 gap-md-8">
              <div class="brn4 p-3 p-md-5 rounded">
                <h5 class="fs-six fw-medium n5-color mb-3 mb-md-5">Contact</h5>
                <input type="text" placeholder="Email or mobile number" required
                  class="brn4 p-3 n5-color mb-2 mb-md-3" />
                <div class="d-flex align-items-center gap-2">
                  <input type="checkbox" id="check" class="cursor-pointer fs-six" />
                  <label htmlFor="check" class="n4-color fs-eight cursor-pointer">
                    Email me with news and offers
                  </label>
                </div>
              </div>
              <Delivery />
              <Shipping />
              <Payment />
              <BillingAddress ref="billingRef" />

              <button class="p-btn bg1-color w-100 py-3 py-md-4" @click="handleSubmit">
                Complete Order
              </button>
            </form>
          </div>

          <div class="col-lg-6 order-1 order-lg-2">
            <div class="bgn2-color p-3 p-sm-6 p-md-10 h-100 br-left-n4 rounded">
              <div class="checkout-right brn4 p-3 p-md-5 rounded">
                <div v-for="{ id, img, title, price, quantity } in cartItems"
                  class="d-flex align-items-start gap-4 mb-3 mb-md-5">
                  <img :src="img" alt="..." class="add-cart-img" />
                  <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between w-100">
                    <div>
                      <h5 class="fs-seven fw-medium n5-color mb-2">{{ title }}</h5>
                      <div class="d-flex gap-1 align-items-center">
                        <button @click="decreaseQuantity(id)" class="fs-eight n5-color cursor-pointer">
                          <PhMinus />
                        </button>
                        <span class="product-count fs-eight fw-semibold n5-color py-1 px-2 brn4 rounded">
                          {{ quantity }}
                        </span>
                        <button @click="increaseQuantity(id)" class="fs-eight n5-color cursor-pointer">
                          <PhPlus />
                        </button>
                      </div>
                    </div>
                    <div class="d-flex flex-column align-items-end gap-1">
                      <span class="fs-eight p1-color d-block">${{ price * quantity }} USD</span>
                      <button class="text-danger fs-5" @click="removeFromCart(id)">
                        <PhTrash />
                      </button>
                    </div>
                  </div>
                </div>

                <form
                  class="d-flex flex-wrap flex-sm-nowrap flex-lg-wrap flex-xl-nowrap align-items-center gap-2 mt-3 mt-md-6">
                  <input type="text" class="brn4 p-3 n5-color" placeholder="Discount code" />
                  <button class="p-3 bg1-color rounded n11-color">Apply</button>
                </form>
                <div class="mt-3 mt-md-6">
                  <span class="d-flex align-items-center gap-2 justify-content-between mb-1">
                    <span class="n5-color">Subtotal:</span>
                    <span class="n5-color">${{ subtotal }} USD</span>
                  </span>
                  <span class="d-flex align-items-center gap-2 justify-content-between">
                    <span class="n5-color">Shipping:</span>
                    <span class="n5-color">Free</span>
                  </span>
                  <span class="line-divider"></span>
                  <span class="d-flex align-items-center gap-2 justify-content-between">
                    <span class="fw-medium fs-five n5-color">Total:</span>
                    <span class="n5-color fw-medium">${{ subtotal }} USD</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { PhMinus, PhPlus, PhTrash } from "@phosphor-icons/vue";
import BillingAddress from "../components/Pages/Checkout/BillingAddress.vue";
import Delivery from "../components/Pages/Checkout/Delivery.vue";
import Payment from "../components/Pages/Checkout/Payment.vue";
import Shipping from "../components/Pages/Checkout/Shipping.vue";
import Footer from "../components/Shared/Footer.vue";
import { useCartStore } from "../stores/cart";
import { ref } from "vue";

const { cartItems, subtotal, decreaseQuantity, increaseQuantity, removeFromCart } = useCartStore()
const billingRef = ref();

const handleSubmit = () => {
  if (billingRef.value.validateForm()) {
    console.log("Form is valid!", billingRef.value.form);
  } else {
    console.log("Form is invalid.");
  }
};
</script>

<style scoped></style>
