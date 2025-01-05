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
        <button class="btn btn-primary">Pokračovať k platbe</button>
      </div>
    </div>
    <div v-else>
      <p>Váš košík je prázdny.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Kosik",
  data() {
    return {
      cartItems: [
        { id: 1, name: "Produkt 1", quantity: 2, price: 10 },
        { id: 2, name: "Produkt 2", quantity: 1, price: 20 },
        { id: 3, name: "Produkt 3", quantity: 3, price: 15 },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    increaseQuantity(id) {
      const item = this.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(id) {
      const item = this.cartItems.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped></style>