<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useStore } from "../store/store";

const store = useStore();
const toast = useToast();

let display = ref(false);
let staticText = ref("");
function copy() {
  navigator.clipboard.writeText(staticText.value);
}

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
    staticText.value = store.getScript.replaceAll(";", ";\n");
    console.log(staticText.value);
    display.value = true;
  }
}
</script>

<template>
  <div class="flex justify-center flex-col">
    <button
      @click="test"
      class="m-auto bg-yellow-500 rounded-2xl p-3 font-bold text-2xl shadow-lg group hover:outline hover:outline-4 hover:outline-red-200 hover:bg-gradient-to-br hover: from-fuchsia-600 hover:to-orange-600 hover:text-white transition-all ease-in duration-75"
    >
      GENERATE
    </button>
    <transition name="fade">
      <div v-if="display" class="shadow-lg mt-4 flex-col">
        <div class="bg-green-600 p-1 rounded-t-md"></div>
        <div class="flex float-right flex-row-reverse items-center">
          <button
            @click="copy"
            class="bg-gray-400 m-2 p-2 rounded-md hover:bg-gray-300 border-2 border-white focus:border-green-700 focus:outline-none"
          >
            <img class="w-[20px]" src="../assets/clipboard.svg" alt="copy icon" />
          </button>
        </div>
        <p
          class="bg-gray-900 text-white font-dm font-light italic text-sm md:text-sm p-5 rounded-b-md whitespace-pre-line break-words"
        >
          {{ staticText }}
        </p>
      </div>
    </transition>
  </div>
  <div v-if="display" class="shadow-xl p-3 rounded-md bg-white/30 my-5">
    <h2 class="font-dmserif text-3xl">How to use it ? 🤔</h2>
    <p class="font-dm text-lg mt-1">
      First open PowerShell in
      <span class="underline underline-offset-1 decoration-sky-500 decoration-2"
        >administrator</span
      >. You can do it by pressing <kbd>Windows</kbd> + <kbd>R</kbd>, type
      <span class="font-semibold italic">powershell</span> and press <kbd>CTRL</kbd> +
      <kbd>Shift</kbd> + <kbd>Enter</kbd>.<br />
      Then copy the script. You can do it by clicking on the clipboard icon on the right.
      <br />
      Finally paste it using <kbd>CTRL</kbd> + <kbd>V</kbd> or right click with your
      mouse. It's done ! 🎉
    </p>
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
kbd {
  background-color: #eee;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 2px 0 0 rgb(255 255 255 / 70%) inset;
  color: #333;
  display: inline-block;
  font-size: 0.95em;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
}
</style>
