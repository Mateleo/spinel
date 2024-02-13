<script lang="ts" setup>
const items = [{
    
}];
</script>
<template>
  <div>
    <main class="bg-white/20 rounded-2xl p-6 mt-12 flex flex-col">
      <h1 class="font-['DM_Serif_Display'] text-6xl text-center">Spinel</h1>
      <p class="text-lg sm:text-2xl text-justify mt-5">
        All your software, without any installer.
        <span class="font-semibold underline decoration-sky-500">Custom</span> &
        <span class="font-semibold underline decoration-green-500">Homemade</span>
        script for Chocolatey. Ninite on steroids
      </p>
      <div class="flex flex-col gap-2 mt-12">
        <input
          type="text"
          class="rounded-md bg-white/40 placeholder:text-black/70 py-2 px-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none placeholder:italic"
          placeholder="Search for an app..."
        />
      </div>
    </main>
  </div>
</template>
