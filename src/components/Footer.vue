<script setup lang="ts"></script>

<template>
<footer class="mt-6 mb-0">
  <div class="hidden sm:grid sm:grid-cols-4 font-dm text-base">
    <p>v 1.0.1</p>
    <p class="text-center col-span-2">
      &copy; 2022 <router-link to="/">Spinel.ovh</router-link> | All rights reserved |
      <router-link to="/legal">Legal</router-link> |
      <router-link to="/credits">Credits and attributions</router-link>
    </p>
    <div class="text-right">
    <a href="https://github.com/Mateleo/spinel" class="text-right">Github</a>
    </div>
  </div>
  <div>
    <p class="text-base font-dm text-center sm:hidden">
      v 1.0.1 | &copy; 2022 <router-link to="/">Spinel.ovh</router-link> |
      <router-link to="/legal">Legal</router-link> |
      <router-link to="/credits">Credits</router-link> |
      <a href="https://github.com/Mateleo/spinel" class="text-right">Github</a>
    </p>
  </div>
  </footer>
</template>
