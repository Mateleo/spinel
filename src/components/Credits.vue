<script setup lang="ts">
import Footer from "./Footer.vue";
</script>
<template>
  <div
    class="flex flex-col mx-auto bg-white shadow-2xl bg-opacity-20 backdrop-filter backdrop-blur-3xl rounded-3xl max-w-[95%] xs:max-w-[90%] s:max-w-[85%] p-4 s:p-6"
  >
    <h1 class="font-dmserif text-7xl text-center mb-5">Spinel</h1>
    <div>
      <h2 class="font-dmserif text-3xl">Credits and attributions</h2>
      <p class="font-dm">
        Vue.js, Vue Toastification, Pinia, Bootstrap Icons, Vue Router and
        Tailwind.css are licensed under the MIT License. / Widget button is
        created by Buy Me a Coffee
      </p>
    </div>
    <router-link
      to="/"
      tag="button"
      class="my-5 mx-auto bg-yellow-500 rounded-2xl p-3 font-bold text-xl shadow-lg group hover:outline hover:outline-4 hover:outline-red-200 hover:bg-gradient-to-br hover: from-fuchsia-600 hover:to-orange-600 transition-all ease-in duration-75"
    >
      HOME
    </router-link>

    <Footer class="my-5" />
  </div>
</template>
