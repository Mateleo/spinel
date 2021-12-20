<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useStore } from "../store/store";

const store = useStore();
const toast = useToast();

let display = ref(false);
let staticText = ref("");

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
    display.value = false;
  } else {
    staticText.value = store.getScript;
    console.log(store.getScript);
    display.value = true;
  }
}
</script>

<template>
  <div class="flex justify-center flex-col">
    <button
      @click="test"
      class="
        m-auto
        bg-yellow-500
        rounded-2xl
        p-3
        font-bold
        text-2xl
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
    <transition name="fade">
      <div v-if="display" class="shadow-lg mt-4">
        <div class="bg-green-600 p-1 rounded-t-md"></div>
        <p
          class="
            bg-gray-900
            text-white
            font-dm font-light
            italic
            text-sm
            p-5
            rounded-b-md
          "
        >
          {{ staticText }}
        </p>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active{
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
