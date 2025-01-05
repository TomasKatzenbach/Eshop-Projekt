<script setup lang="ts">
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Carousel from './components/Carousel.vue';
import Historia from './components/Historia.vue';

const route = useRoute();
</script>

<template>
  <Header />
  <div v-if="route.path === '/'">
    <Carousel />
    <Historia />
  </div>
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>