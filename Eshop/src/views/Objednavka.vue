<template>
  <div class="order-container">
    <h1>Objednávka</h1>
    <div v-if="cartItems.length > 0">
      <h2>Produkty v košíku</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Množstvo</th>
            <th>Cena</th>
            <th>Celkom</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.quantity }}</td>
            <td>€{{ item.price }}</td>
            <td>€{{ item.price * item.quantity }}</td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <h3>Celková cena: €{{ totalPrice }}</h3>
      </div>
    </div>
    <div v-else>
      <p>Váš košík je prázdny.</p>
    </div>
    <h2>Objednávkový formulár</h2>
    <form @submit.prevent="submitOrder">
      <div class="form-group">
        <label for="name">Meno</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="address">Adresa</label>
        <input type="text" id="address" v-model="address" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="phone">Telefón</label>
        <input type="tel" id="phone" v-model="phone" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Odoslať objednávku</button>
    </form>
  </div>
</template>

<script>
import { useCartStore } from '../stores/kosik';
import { useOrderStore } from '../stores/objednavky';
import { useRouter } from 'vue-router';

export default {
  name: "Objednavka",
  data() {
    const cartStore = useCartStore();
    return {
      cartItems: cartStore.cartItems,
      totalPrice: cartStore.totalPrice,
      name: '',
      email: '',
      address: '',
      phone: '',
    };
  },
  methods: {
    submitOrder() {
      const cartStore = useCartStore();
      const orderStore = useOrderStore();
      const router = useRouter();

      const newOrder = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        address: this.address,
        phone: this.phone,
        items: cartStore.cartItems,
        totalPrice: cartStore.totalPrice,
      };
      orderStore.addOrder(newOrder);
      cartStore.clearCart();
      alert('Objednávka bola odoslaná!');
      this.$router.push('/kosik');
    },
  },
};
</script>