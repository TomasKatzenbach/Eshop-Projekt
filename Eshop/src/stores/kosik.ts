import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface State {
  cartItems: Product[];
}

export const useCartStore = defineStore('cart', {
  state: (): State => ({
    cartItems: [],
  }),
  getters: {
    totalPrice: (state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product: Product) {
      const existingItem = this.cartItems.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId: number) {
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
    increaseQuantity(productId: number) {
      const item = this.cartItems.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(productId: number) {
      const item = this.cartItems.find(item => item.id === productId);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});