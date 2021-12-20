<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useStore } from "../store/store";

const store = useStore();
const toast = useToast();

function test() {
  if (!store.getScript) {
    toast.error("Please select an item!", {
      // @ts-ignore
      position: "top-center", 
      timeout: 3000,
      closeOnClick: true,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: false,
      closeButton: "button",
      icon: true,
      rtl: false,
    });
  } else {
    console.log(store.getScript);
  }
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
