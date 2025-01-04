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
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../public/img/takoma.webp" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../public/img/robcross.webp" class="d-block w-100" alt="...">
        </div>  
        <div class="carousel-item">
          <img src="../../public/img/winmauban.webp" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../../public/img/littler_prodigy.webp" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="text-center mt-4">
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