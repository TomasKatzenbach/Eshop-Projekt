<template>
  <div class="cart-container">
    <h1>Košík</h1>
    <div v-if="cartItems.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Množstvo</th>
            <th>Cena</th>
            <th>Celkom</th>
            <th>Akcia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <button class="btn btn-secondary btn-sm" @click="decreaseQuantity(item.id)">-</button>
              {{ item.quantity }}
              <button class="btn btn-secondary btn-sm" @click="increaseQuantity(item.id)">+</button>
            </td>
            <td>€{{ item.price }}</td>
            <td>€{{ item.price * item.quantity }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeFromCart(item.id)">Odstrániť</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <h3>Celková cena: €{{ totalPrice }}</h3>
        <button class="btn btn-primary" @click="proceedToCheckout">Pokračovať k platbe</button>
      </div>
    </div>
    <div v-else>
      <p>Váš košík je prázdny.</p>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/kosik';

export default {
  name: "Kosik",
  data() {
    const cartStore = useCartStore();
    return {
      cartItems: cartStore.cartItems,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    increaseQuantity(productId) {
      const cartStore = useCartStore();
      cartStore.increaseQuantity(productId);
    },
    decreaseQuantity(productId) {
      const cartStore = useCartStore();
      cartStore.decreaseQuantity(productId);
    },
    removeFromCart(productId) {
      const cartStore = useCartStore();
      cartStore.removeFromCart(productId);
    },
    proceedToCheckout() {
      this.$router.push('/objednavka');
    },
  },
};
</script>