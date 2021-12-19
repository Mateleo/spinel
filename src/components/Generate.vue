<script setup lang="ts">
import { useStore } from "../store/store";

const store = useStore();

function test(){
  console.log(store.getSelected)
}

</script>

<template>
  <div class="flex justify-center">
    <button
      @click="test"
      class="
        bg-yellow-500
        rounded-2xl
        p-3
        font-bold
        text-lg
        shadow-lg
        group
        hover:outline
        hover:outline-4
        hover:outline-red-200
        hover:bg-gradient-to-br
        hover:
        from-fuchsia-600
        hover:to-orange-600
        transition-all
        ease-in
        duration-75
      "
    >
      GENERATE
    </button>
    <p>{{}}</p>
  </div>
</template>
