<script setup lang="ts">
import { useStore } from "../store/store";
import Card from "./Card.vue";

const main = useStore();
main.lorem(20)
console.log(main.getSoftwareList)
</script>

<!-- :class="[(index+1)%3==0 ? ['justify-end'] : (index)%3==0 ? ['']: ['justify-center']]" -->

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-7 justify-items-stretch">
    <div class="flex" v-for="(software, index) in main.getSoftwareList">
      <Card :software="software"/>
    </div>
  </div>
</template>
