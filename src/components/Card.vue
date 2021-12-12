<script setup lang="ts">
interface soft {
  name: String;
  id: number;
  logo: String;
  selected: boolean;
}

const props = defineProps({
  software: {} as () => soft,
});

// console.log(software)
</script>

<template>
  <div
    class="
      flex-col
      bg-gradient-to-t
      from-[#0F2027]/90
      to-[#2C5364]/90
      shadow-2xl
      backdrop-filter backdrop-blur-3xl
      rounded-xl
      p-4
    "
  >
    <img :src="'../src/assets/'+ props.software!.logo" />
    <h1 class="font-dm text-xl text-center text-white">{{props.software!.name}}</h1>
  </div>
</template>
