<script setup lang="ts">
import { ref } from "vue";

interface soft {
  name: String;
  id: number;
  logo: String;
  selected: boolean;
}

const props = defineProps({
  software: {} as () => soft,
});

let selection = ref(false);
</script>

<template>
  <div
    @click="selection = !selection"
    :class="[selection ? ['outline outline-4 outline-amber-400'] : ['']]"
    class="
      group
      flex-col
      bg-gradient-to-t
      from-[#0F2027]/90
      to-[#2C5364]/90
      shadow-2xl
      backdrop-filter backdrop-blur-3xl
      rounded-xl
      p-4
      hover:from-white/60 hover:to-white/20
      max-w-[110px]
      w-full
    "
  >
    <img :src="'../src/assets/'+ props.software!.logo" />
    <h1
      class="
        font-dm
        text-xl
        leading-6
        text-center text-white
        group-hover:text-black
      "
    >
      {{props.software!.name}}
    </h1>
  </div>
</template>
