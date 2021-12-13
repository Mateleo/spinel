<script setup lang="ts">
import ProductList from './ProductList.vue';
</script>

<template>
  <div class="flex">
    <div
      class="
        my-10
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
      <h1 class="font-dmserif text-7xl text-center mb-5">Spinel</h1>
      <p class="text-xl text-justify">
        <span class="font-semibold underline decoration-sky-500">Custom</span> &
        <span class="font-semibold underline decoration-green-500">Homemade</span>
         script for Chocolatey. Ninite on steroids
      </p>
          <ProductList class="mt-5"/>
    </div>
  </div>
</template>
