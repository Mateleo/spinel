<script setup lang="ts">
import { ref } from "vue";

interface soft {
  name: String;
  id: number;
  logo: String;
  selected: boolean;
}

let size = ref(true);


const props = defineProps({
  software: {} as () => soft,
});


props.software!.name.length>=8 ? size.value = false : size.value = true



</script>

<template>
  <div
    @click="props.software!.selected = !props.software!.selected"
    :class="[props.software!.selected ? ['outline outline-4 outline-amber-400'] : ['']]"
    class="
      group
      flex flex-col
      pt-4
      bg-gradient-to-t
      from-[#0F2027]/90
      to-[#2C5364]/90
      shadow-2xl
      backdrop-filter backdrop-blur-3xl
      rounded-xl
      hover:from-white/60 hover:to-white/20
      w-[77px]
      h-[100px]
    "
  >
    <div class="">
      <img
        class="max-w-[44px] aspect-square m-auto"
        :src="'../src/assets/'+ props.software!.logo"
      />
      <h1 :class="[size ? ['text-lg'] : ['text-sm']]"
        class="font-dm text-center text-white group-hover:text-black"
      >
        {{props.software!.name}}
      </h1>
    </div>
  </div>
</template>

<style></style>
