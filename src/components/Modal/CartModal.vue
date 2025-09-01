<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bgn1-color">
        <div class="modal-header bg1-color br-bottom-n5">
          <h1 class="modal-title n11-color fs-five fw-medium" id="exampleModalLabel">
            Your Cart ({{ cartStore.totalItems }})
          </h1>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body p-3 p-md-5">
          <CartModalCard
            v-for="item in cartStore.cartItems"
            :key="item.id"
            :id="item.id"
            :img="item.img"
            :title="item.title"
            :price="item.price"
            :count="item.quantity"
            @increment="cartStore.increaseQuantity(item.id)"
            @decrement="cartStore.decreaseQuantity(item.id)"
            @remove="cartStore.removeFromCart(item.id)"
          />
          <div v-if="cartStore.cartItems.length === 0" class="text-center n5-color py-4">
            <p>Your cart is empty</p>
          </div>
        </div>

        <div class="modal-footer br-top-n5" v-if="cartStore.cartItems.length > 0">
          <div class="w-full d-flex gap-2 align-items-center justify-content-between mb-2 mb-md-3">
            <h5 class="fs-seven fw-medium n5-color">Sub-total:</h5>
            <span class="fs-six n5-color">{{ cartStore.formattedSubtotal }}</span>
          </div>
          <button
            @click="initiateNavigation"
            class="p-btn bg1-color w-100 rounded-pill text-center n11-color fw-medium py-3 d-block"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../../stores/cart';
import CartModalCard from './CartModalCard.vue';

const cartStore = useCartStore();
import { useRouter } from 'vue-router'

const router = useRouter()
const initiateNavigation = () => {
  const modal = document.querySelector('.modal')
  modal!.addEventListener('hidden.bs.modal', () => {
    router.push('/checkout')
  }, { once: true })
}
</script>
