<script setup lang="ts">
import { ref } from "vue";


interface soft {
  name: String;
  id: number;
  logo: String;
  selected: boolean;
}

let size = ref();


const props = defineProps({
  software: {} as () => soft,
});

size.value = Math.max(...props.software!.name.split(' ').map(item => item.length))

// console.log(props.software!.name+ " " +size.value)


function getImageeUrl(logo:String){
  return new URL(`../../src/assets/${logo}`, import.meta.url).href
}

function getImageAlt(name:String){
  return name + " logo"
}


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
      w-[88px]
      h-[115px]
    "
  >
    <div class="cursor-pointer">
      <img
        class="max-w-[44px] aspect-square m-auto"
        :src="getImageeUrl(props.software!.logo)" :alt="getImageAlt(props.software!.name)"
      />
      <h1 :class="[size<=7 && props.software!.name.length<=15 ? ['text-lg'] : [`text-[15px] mt-[14px]`]]"
        class=" font-dm text-center text-white group-hover:text-black leading-none mt-[11px]"
      >
        {{props.software!.name}}
      </h1>
    </div>
  </div>
</template>

<style></style>
