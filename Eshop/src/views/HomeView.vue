<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
      ],
    };
  },
  components: {
  },
});
</script>



<template>
  <main class="container mt-5">
    <div class="text-center">
      <img src="@/assets/logo.webp" alt="Logo" class="logo">
      <h4>TopDarts</h4>
    </div>
    <section class="mt-4">
      <h2 class="text-primary">Products</h2>
      <ul class="list-group">
        <li v-for="product in products" :key="product.id" class="list-group-item">
          {{ product.name }} - ${{ product.price }}
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
</style>