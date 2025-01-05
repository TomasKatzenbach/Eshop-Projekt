<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Terče</h1>
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
          name: "Sisalový terč BLADE 6 Professional Dartboard",
          description: "Terč má rozmery 450mm priemer a hrúbka 38mm. Balenie obsahuje: terč 1ks, sada systému na zavesenie (3x aretačné skrutky, stredová skrutka, plechový záves).",
          price: 60,
          image: "../../public/img/terce/blade6.webp"
        },
        {
          id: 2,
          name: "Sada PDC Surround Set - Blade 6 + Surround + Šípky",
          description: "Ohromujúca športová dizajnová sada PDC značky Winmau, ktorá prináša kúzlo televíznych šípok, ktoré sú pripravené k hre od okamihu, keď ich vybalíte z krabice. s oceľovým hrotom,odhodovú čiaru s logom PDC,kartičku s hodnotami zatvárania súťažnej hry.",
          price: 110,
          image: "../../public/img/terce/sadapdc.webp"
        },
        {
          id: 3,
          name: "Terč SAMURAI + okružie a 2x Šípky",
          description: "Štartovacia sada pre hráčov šípok, ktorá obsahuje terč Samurai so žiletkovými drôtmi, okružia, odhodovú čiaru a 2 sady mosadzných šípok. Balenie obsahuje: Terč SAMURAI + záves na terč, okružie - Surround čierne, 2 sady šípok steel, odhodovú čiaru.",
          price: 75,
          image: "../../public/img/terce/samurai.webp"
        },
        {
          id: 4,
          name: "Sisalový terč Shot Michael Smith Bully Boy Bristle Dartboard",
          description: "Sisalový terč Shot ponúka odolný Africký sisal, s motívmi hráča Michaela Smitha. Zloženie vlákien je s vysokou hustotou pre väčšiu odolnosť. Balenie obsahuje: 1x Terč, 1x záves na stenu.",
          price: 40,
          image: "../../public/img/terce/michaelsmith.webp"
        },
        {
          id: 5,
          name: "Elektronický terč Bull's Universum Intro Blue/Red",
          description: "Kvalitný elektronický terč od Bulls Benelux.Terč je určený až pre 8 hráčov.Obsahuje 36 typov hier v až 580 kombinácií hier. skrutky na uchytenie",
          price: 110,
          image: "../../public/img/terce/elektronicky.webp" 
          },
        ],
        mostSoldProducts: [
        {
          id: 1,
          name: "Sisalový terč BLADE 6 Professional Dartboard",
          description: "Terč má rozmery 450mm priemer a hrúbka 38mm. Balenie obsahuje: terč 1ks, sada systému na zavesenie (3x aretačné skrutky, stredová skrutka, plechový záves).",
          price: 60,
          image: "../../public/img/terce/blade6.webp"
        },
        {
          id: 4,
          name: "Sisalový terč Shot Michael Smith Bully Boy Bristle Dartboard",
          description: "Sisalový terč Shot ponúka odolný Africký sisal, s motívmi hráča Michaela Smitha. Zloženie vlákien je s vysokou hustotou pre väčšiu odolnosť. Balenie obsahuje: 1x Terč, 1x záves na stenu.",
          price: 40,
          image: "../../public/img/terce/michaelsmith.webp"
        },
        {
          id: 3,
          name: "Terč SAMURAI + okružie a 2x Šípky",
          description: "Štartovacia sada pre hráčov šípok, ktorá obsahuje terč Samurai so žiletkovými drôtmi, okružia, odhodovú čiaru a 2 sady mosadzných šípok. Balenie obsahuje: Terč SAMURAI + záves na terč, okružie - Surround čierne, 2 sady šípok steel, odhodovú čiaru.",
          price: 75,
          image: "../../public/img/terce/samurai.webp"
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
