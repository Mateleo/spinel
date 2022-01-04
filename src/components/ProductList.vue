<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "../store/store";
import Category from "./Category.vue";

const main = useStore();
// main.lorem(40)
console.log(main.getSoftwareList);

let message = ref("");
let re = /[^A-Z]/gi

function test() {
  message.value = message.value.replace(re, '')
  main.setSearch(message.value);
}
</script>
<template>
  <div class="w-full flex justify-center sm:justify-end">
    <input
      class="w-full sm:w-[35%] bg-white shadow-2xl bg-opacity-50 backdrop-filter backdrop-blur-3xl rounded-md py-2 px-2 text-sm font-dm placeholder:italic placeholder:text-black/50 placeholder:text-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2"
      type="text"
      placeholder="Search an item"
      v-model="message"
      @input="test"
    />
  </div>
  <div class="flex flex-col">
    <div v-for="(category, index) in main.getCategory">
      <Category
        v-if="main.getByCategorySearch(category).length != 0"
        :category="category"
        class="my-2"
      />
    </div>
  </div>
</template>
