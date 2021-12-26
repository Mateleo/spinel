<script setup lang="ts">
import { useStore } from "../store/store";
import Category from "./Category.vue";

const main = useStore();
// main.lorem(40)
console.log(main.getSoftwareList)
</script>
<template>
  <div class="flex flex-col">
    <div v-for="(category, index) in main.getCategory">
      <Category :category="category" class="my-2"/>
    </div>
  </div>
</template>
