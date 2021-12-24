<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Footer from "./components/Footer.vue";
import Intro from "./components/Intro.vue";
import ProductList from "./components/ProductList.vue";
import Generate from "./components/Generate.vue";
import Embed from "./assets/spinel.jpeg"
</script>

<template>
  <div
    class="
      flex flex-col
      mx-auto
      bg-white
      shadow-2xl
      bg-opacity-20
      backdrop-filter backdrop-blur-3xl
      rounded-3xl
      max-w-[80%]
      p-6
    "
  >
    <Intro />
    <ProductList class="my-5" />
    <Generate class="relative" />
    <Footer class="mt-5" />
  </div>
</template>

<style>
#app {
  padding: 50px 0 50px 0;
  background: #8a2387; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f27121,
    #e94057,
    #8a2387
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f27121,
    #e94057,
    #8a2387
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
