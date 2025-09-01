// stores/cart.ts
import { defineStore } from 'pinia';
import { productsData } from '../data/AllData';

interface CartItem {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),

    subtotal: (state) =>
      state.items.reduce((total, item) => total + item.price * item.quantity, 0),

    formattedSubtotal(): string {
      return `$${this.subtotal.toFixed(2)} USD`;
    },

    cartItems: (state) => state.items,
  },

  actions: {
    addToCart(productId: number) {
      const product = productsData.find((p) => p.id === productId);
      if (!product) return;

      const existingItem = this.items.find((item) => item.id === productId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          img: product.img,
          price: Number(product.price),
          quantity: 1,
        });
      }
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },

    increaseQuantity(productId: number) {
      const item = this.items.find((item) => item.id === productId);
      if (item) item.quantity++;
    },

    decreaseQuantity(productId: number) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.quantity > 1 ? item.quantity-- : '';
      }
    },

    clearCart() {
      this.items = [];
    },
  },
});
