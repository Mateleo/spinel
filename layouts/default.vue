<template>
  <div class="w-[95%] md:w-[90%] max-w-7xl m-auto bg-white/20 rounded-2xl p-4 md:p-6 my-12 flex flex-col">
    <slot>
    </slot>
    <div class="flex flex-wrap md:grid md:grid-cols-5 mt-12 font-medium text-xs md:text-sm justify-center gap-2">
      <p>v2.0</p>
      <div class="flex justify-center gap-2 col-span-3">
        <NuxtLink class="hidden md:block">© 2024 Spinel.ovh</NuxtLink> |
        <p>Made by <NuxtLink class="underline" to="https://mateo-siam.com" target="_blank">Mateleo</NuxtLink></p>
        |
        <NuxtLink to="/legal">Legal</NuxtLink>
      </div>
      <NuxtLink class="text-right" to="https://github.com/Mateleo/spinel" target="_blank">Github</NuxtLink>
    </div>
  </div>
</template>
