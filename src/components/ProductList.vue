<script setup lang="ts">
import { useStore } from "../store/store";
import Card from "./Card.vue";

const main = useStore();
console.log(main.getSoftwareList)
</script>

<template>
  <div class="flex">
    <div v-for="software in main.getSoftwareList">
      <Card :software="software"/>
    </div>
  </div>
</template>
