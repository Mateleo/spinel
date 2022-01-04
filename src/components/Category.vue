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
      <div v-for="(software, index) in main.getByCategory(props.category)">
        <div class="p-2" v-if="main.getByCategorySearch(props.category).includes(software)">
          <Card :software="software" />
        </div>
      </div>
    </div>
  </div>
</template>
