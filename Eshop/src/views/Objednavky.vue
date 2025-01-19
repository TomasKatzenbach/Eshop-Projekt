<template>
  <div class="orders-container">
    <h1>Objednávky</h1>
    <div v-if="orders.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Meno</th>
            <th>Email</th>
            <th>Adresa</th>
            <th>Telefón</th>
            <th>Produkty</th>
            <th>Celková cena</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.name }}</td>
            <td>{{ order.email }}</td>
            <td>{{ order.address }}</td>
            <td>{{ order.phone }}</td>
            <td>
              <ul>
                <li v-for="item in order.items" :key="item.id">
                  {{ item.name }} ({{ item.quantity }} x €{{ item.price }})
                </li>
              </ul>
            </td>
            <td>€{{ order.totalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Žiadne objednávky.</p>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from '../stores/objednavky';

export default {
  name: "Objednavky",
  data() {
    const orderStore = useOrderStore();
    return {
      orders: orderStore.orders,
    };
  },
};
</script>
