<script setup lang="ts">
import Card from "./Card.vue";
import { useStore } from "../store/store";

const main = useStore();

const props = defineProps({
  category: String,
});
</script>
<template>
  <div class="shadow-xl p-3 rounded-xl bg-white/10">
    <h2 class="font-dm text-lg">{{ props.category }}</h2>
    <div class="flex flex-wrap">
      <div class="p-2" v-for="(software, index) in main.getByCategory(props.category)">
        <Card :software="software" />
      </div>
    </div>
  </div>
</template>
