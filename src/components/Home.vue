<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Footer from "./Footer.vue";
import Intro from "./Intro.vue";
import ProductList from "./ProductList.vue";
import Generate from "./Generate.vue";
</script>

<template>
    <div
      class="flex flex-col mx-auto bg-white shadow-2xl bg-opacity-20 backdrop-filter backdrop-blur-3xl rounded-3xl max-w-[95%] xs:max-w-[90%] s:max-w-[85%] p-4 s:p-6"
    >
      <Intro />
      <ProductList class="my-5" />
      <Generate class="relative" />
      <Footer/>
    </div>
</template>


