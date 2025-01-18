<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Šípky</h1>
    
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

    <h2 class="text-center mb-4">Všetky produkty</h2>
    <div v-for="product in sipky" :key="product.id" class="card mb-3">
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
import { useCartStore } from '../stores/kosik';
export default {
  name: "Sipky",
  data() {
    return {
      sipky: [
        {
          id: 1,
          name: "Thunder Series 3- Brass",
          description: "Unikátna sada steelových šípok a doplnkov so 4 sadami šípok v hmotnostiach od 21g do 24g.Obsah balenia: 4x sada šípok 21g-24g (12 ks), 4x sada náhradných letiek (12 ks), 4x sada náhradných násadok (12 ks), 16x náhradné plastové protektory, 1x brúsik na steelové hroty.",
          price: 20,
          image: "../../public/img/sipky/Thunder3.webp"
        },
        {
          id: 2,
          name: "Šípky Steel Luke Humphries World Champion Brass 22g",
          description: "Špeciálna edícia brassových šípok od Luka Humphiresa ponúka víťazný výkon, či už pre súťažnú hru alebo rodinnú zábavu.Obsah balenia: 1x sada šípok (3 ks).",
          price: 20,
          image: "../../public/img/sipky/lukehumphries.webp"
        },
        {
          id: 3,
          name: "Javelin Steel 85% 22g",
          description: "S 54 mm ide o našu najdlhšiu šípku od značky Red Dragon s hladkým strieborným designom barrelu pre moderný záber a vynikajúci výkon.Obsah balenia: 1x sada šípok (3 ks).",
          price: 32,
          image: "../../public/img/sipky/javelinsteel.webp"
        },
        {
          id: 4,
          name: "Luker Littler G1 Prodigy SP Steel 90% 23g",
          description: "Predstavujeme Luke Littler Generation One, Prodigy Edition, ktorý sa môže pochváliť úžasným dizajnom so zlatými škvrnami, odrážajúce eleganciu a exkluzivitu, inšpirovanú svetom zberateľských kariet.Vytvorené v spojení s The Nuke, aby splnilo jeho presné požiadavky a špecifikácie.Šípky s vysokou hustotou 90% volfrámu sú precízne skonštruované a starostlivo prepracované tak, aby vytvorili zložitú kombinovanú šípku, ktorá zahŕňa technológiu rukoväte Pixel.Obsahuje povrchovú úpravu bodovým UV žiarením a akcentmi fólie, povrchovú úpravu na zvýšenie odolnosti a vizuálnej estetiky.Sada šípok je dodávaná v elegantnej čiernej plechovej krabičke Target Darts.Závit hrotov: Swiss.Obsah balenia: 1x sada šípok (3 ks), 1x sada hrotov 30mm Gold Swiss DX, 1x sada Premium Gold Swiss Point Keyring Tool (3 ks) a 1x pelchová krabičk",
          price: 151,
          image: "../../public/img/sipky/littlersteel.webp"
        },
        {
          id: 5,
          name: "Šípky Steel Assassin 80% 19g",
          description: "Svetovo najobľúbenejšie volfrámové šípky. Rad Assassin 80% ponúka plne komplexný výber štýlov a gramáží, ktoré dohromady tvoria rad radikálnych a veľmi obľúbených modelov. Obsah balenia: 1x sada šípok (3 ks).",
          price: 40,
          image: "../../public/img/sipky/assassinsteel.webp"
        },
        {
          id: 6,
          name: "Hornet DW Steel Brass 18g",
          description: "Sortiment šípok Hornet čerpá inšpiráciu z divokej a obratnej povahy sršného hmyzu, ktorý je známy svojou rýchlosťou, presnosťou a smrtiacou presnosťou pri zameriavaní svojej koristi, čo je ideálny symbol pre hráčov šípok, ktorí chcú ovládnuť hraciu plochu. Tieto výrazné a vzrušujúce šípky sa vyznačujú jedinečnými letkami v tvare krídiel, ktoré sú navrhnuté tak, aby pripomínali skutočné krídla sršne, a dodávajú vašim hrám so šípkami ďalšiu vrstvu zábavy. , 1x sada náhradných letiek (3 ks), 1x malé koženkové puzdro.",
          price: 16,
          image: "../../public/img/sipky/hornetsteel.webp"
        },
      ],
      mostSoldProducts: [
        {
          id: 1,
          name: "Thunder Series 3- Brass",
          description: "Unikátna sada steelových šípok a doplnkov so 4 sadami šípok v hmotnostiach od 21g do 24g.Obsah balenia: 4x sada šípok 21g-24g (12 ks), 4x sada náhradných letiek (12 ks), 4x sada náhradných násadok (12 ks), 16x náhradné plastové protektory, 1x brúsik na steelové hroty.",
          price: 20,
          image: "../../public/img/sipky/Thunder3.webp"
        },
        {
          id: 2,
          name: "Šípky Steel Luke Humphries World Champion Brass 22g",
          description: "Špeciálna edícia brassových šípok od Luka Humphiresa ponúka víťazný výkon, či už pre súťažnú hru alebo rodinnú zábavu.Obsah balenia: 1x sada šípok (3 ks).",
          price: 20,
          image: "../../public/img/sipky/lukehumphries.webp"
        },
        {
          id: 3,
          name: "Javelin Steel 85% 22g",
          description: "S 54 mm ide o našu najdlhšiu šípku od značky Red Dragon s hladkým strieborným designom barrelu pre moderný záber a vynikajúci výkon.Obsah balenia: 1x sada šípok (3 ks).",
          price: 32,
          image: "../../public/img/sipky/javelinsteel.webp"
        }
      ]
    };
  },
  methods: {
    addToCart(product) {
      const cartStore = useCartStore();
      cartStore.addToCart(product);
    }
  }
};
</script>