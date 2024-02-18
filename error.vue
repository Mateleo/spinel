<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>
<template>
  <div>
    <div>
      <h1 class="font-['DM_Serif_Display'] text-6xl text-center">Spinel</h1>
      <div class="flex justify-center flex-col mt-12">
        <h2 class="text-center font-['DM SANS'] text-7xl">{{ error?.statusCode }}</h2>
        <p class="text-center font-['DM SANS'] text-2xl">Oops, this page does not exist !</p>
        <div class="flex justify-center">
          <button
          @click="clearError({ redirect: '/' })"
            class="my-5 mt-12 bg-yellow-500 rounded-2xl p-3 font-bold text-xl shadow-lg group hover:outline hover:outline-4 hover:outline-red-200 hover:bg-gradient-to-br hover: from-fuchsia-600 hover:to-orange-600 transition-all ease-in duration-75"
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
