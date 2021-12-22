<script setup lang="ts">
import { useStore } from "../store/store";
import Category from "./Category.vue";

const main = useStore();
main.lorem(40)
console.log(main.getSoftwareList)
</script>

<!-- :class="[(index+1)%3==0 ? ['justify-end'] : (index)%3==0 ? ['']: ['justify-center']]" -->

<template>
  <div class="flex flex-col">
    <div v-for="(category, index) in main.getCategory">
      <Category :category="category" class="my-2"/>
    </div>
  </div>
</template>
