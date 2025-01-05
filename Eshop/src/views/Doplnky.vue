<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Doplnky</h1>
    <h2 class="text-center mb-4">Najpredávanejšie</h2>
    <div v-for="product in mostSoldProducts" :key="product.id" class="card mb-3">
      <div class="row g-0">
        <div class="col-2">
          <img :src="product.image" class="img-fluid rounded-start" :alt="product.name">
        </div>
        <div class="col-10">
          <div class="card-body p-1">
            <h6 class="card-title">{{ product.name }}</h6>
            <p class="card-text small">{{ product.description }}</p>
            <p class="card-text"><strong>€{{ product.price }}</strong></p>
            <button class="btn btn-primary btn-sm" @click="addToCart(product)">Do košíka</button>
          </div>
        </div>
      </div>
    </div>
    <div v-for="product in products" :key="product.id" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="product.image" class="img-fluid rounded-start" :alt="product.name">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text"><strong>€{{ product.price }}</strong></p>
            <button class="btn btn-primary" @click="addToCart(product)">Do košíka</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sipky",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Letky The Nuke Luke Littler Pro.Ultra No2",
          description: "Letky na šípky PRE ULTRA vo veľkosti No2. Plastové letky s hrúbkou 100 mikrónov. Obsah balenia: 1x sada letiek (3ks).",
          price: 60,
          image: "../../public/img/doplnky/lukenuke.webp"
        },
        {
          id: 2,
          name: "Hroty soft Mission Titan Pro",
          description: "Softové hroty od značky Mission Titan PRO so závitom 2BA, dĺžka hrotu je 26mm bez závitu. Tieto hroty sú vhodné predovšetkým pre elektronické komerčné šípkové automaty. Balenie obsahuje 50ks hrotov.",
          price: 2.50,
          image: "../../public/img/doplnky/hrotysoft.webp"
        },
        {
          id: 3,
          name: "Násadky na Šipky Aluminium ALU DARTS METAL",
          description: "Praktické hliníkové násadky na šípky vyrobené v 6 dĺžkach.Dĺžky násadok sú dávané bez závitu.Záviť násadok je klasický malý 2BA.Balenie obsahuje 3ks násadok.",
          price: 1.8,
          image: "../../public/img/doplnky/nasadkyalu.webp"
        },
        {
          id: 4,
          name: "Letky System K-Flex Small No6 Black",
          description: "Systém K-Flight. Vysoký výkon v jednom systéme letky a násadky s patentovaným twist systémom Target. Kľúčové vlastnosti precízne tvarovaného systému: - Ľahká váha: Letky K-System sú ľahšie ako iné lisované systémy na trhu, čo umožňuje konzistentnejšie hádzanie. Flex: Násadková časť K-Flex bola navrhnutá tak, aby sa pohla, pokiaľ je zasiahnutá ďalšia šípkou, čím sa znižuje možnosť odskočenia. - Presnosť 90 stupňov: Náš proces vstrekovania znamená, že letky sú v perfektnom uhle 90 stupňov po vybalení z krabice a počas ich hernej životnosti. odolnosť voči iným typom letiek.Dostupné vo veľkostiach short (19 mm), intermediate (26 mm) alebo medium (33 mm).U veľkosti sa meria dĺžka násadky bez závitu.Veľkosť letky No6.Obsah balenia: 1x sada letiek (3 ks).",
          price: 10,
          image: "../../public/img/doplnky/letkysystem.webp"
        },
        {
          id: 5,
          name: "Letky CARBON standard brown",
          description: "Letky CARBON sú vyrobené zo super laminátu, ktorý im dodáva výnimočnú silu a odolnosť. Hrúbka letiek je 100 mikrónov. Obsah balenia: 3ks letiek.",
          price: 1.4,
          image: "../../public/img/doplnky/letkycarbon.webp" 
        },
      ],
      mostSoldProducts: [
        {
          id: 3,
          name: "Násadky na Šipky Aluminium ALU DARTS METAL",
          description: "Praktické hliníkové násadky na šípky vyrobené v 6 dĺžkach.Dĺžky násadok sú dávané bez závitu.Záviť násadok je klasický malý 2BA.Balenie obsahuje 3ks násadok.",
          price: 1.8,
          image: "../../public/img/doplnky/nasadkyalu.webp"
        },
        {
          id: 5,
          name: "Letky CARBON standard brown",
          description: "Letky CARBON sú vyrobené zo super laminátu, ktorý im dodáva výnimočnú silu a odolnosť. Hrúbka letiek je 100 mikrónov. Obsah balenia: 3ks letiek.",
          price: 1.4,
          image: "../../public/img/doplnky/letkycarbon.webp" 
        },
        {
          id: 2,
          name: "Hroty soft Mission Titan Pro",
          description: "Softové hroty od značky Mission Titan PRO so závitom 2BA, dĺžka hrotu je 26mm bez závitu. Tieto hroty sú vhodné predovšetkým pre elektronické komerčné šípkové automaty. Balenie obsahuje 50ks hrotov.",
          price: 2.50,
          image: "../../public/img/doplnky/hrotysoft.webp"
        },
      ]
    };
  },
  methods: {
    addToCart(product) {
      console.log(`Added ${product.name} to cart`);
    }
  }
};
</script>
