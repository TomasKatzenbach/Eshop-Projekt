<script setup lang="ts">
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Carousel from './components/Carousel.vue';
import Historia from './components/Historia.vue';
import Sponzor from './components/Sponzor.vue';

const route = useRoute();
</script>

<template>
  <Header />
  <RouterView />
  <div v-if="route.path === '/'">
    <Carousel />
    <Historia />
  </div>
  <div v-if="route.path === '/kosik'">
    <Sponzor />
  </div>
  <div v-if="route.path !== '/objednavky'">
    <Footer />
  </div>
</template>

<style scoped>

</style>