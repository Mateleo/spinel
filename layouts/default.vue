<template>
  <div class="w-[95%] md:w-[90%] max-w-7xl m-auto bg-white/20 rounded-2xl p-6 mt-12 flex flex-col">
    <slot></slot>
    <div class="grid grid-cols-5 mt-12 font-medium">
      <p>v2.0</p>
      <div class="flex justify-center gap-2 col-span-3">
        <NuxtLink>© 2024 Spinel.ovh</NuxtLink> |
        <p>Made by Mateleo</p> |
        <NuxtLink to="/legal">Legal</NuxtLink>
      </div>
      <NuxtLink class="text-right" to="https://github.com/Mateleo/spinel">Github</NuxtLink>
    </div>
  </div>
</template>