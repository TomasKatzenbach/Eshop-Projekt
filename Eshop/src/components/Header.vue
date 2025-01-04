<template>
  <header class="bg-light py-3">
    <nav class="container d-flex justify-content-between">
      <div>
        <img src="@/assets/logo.webp" alt="Logo" class="logo">
      </div>
      <ul class="nav">
        <li v-for="category in categories" :key="category" class="nav-item">
          <a href="#" class="nav-link">{{ category }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const categories = ref(['Category 1', 'Category 2', 'Category 3']);
</script>

