<template>
  <header class="py-3">
    <nav class="container d-flex justify-content-between align-items-center">
      <div>
        <img src="../../public/img/logo.webp" alt="Logo" class="logo">
      </div>
      <div class="contact-info text-center text-white">
        <p class="mb-0">
          <i class="fas fa-phone-alt"></i> +421 555 666
        </p>
        <p class="mb-0">
          <i class="fas fa-envelope"></i> topdarts@topdarts.sk
        </p>
      </div>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <i class="fas fa-home"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sipky" class="nav-link">Šípky</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/terce" class="nav-link">Terče</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/doplnky" class="nav-link">Doplnky k šípkam</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>