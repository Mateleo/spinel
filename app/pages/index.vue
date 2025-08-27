<script lang="ts" setup>
import { items } from "~/composables/software";

const searchInput = ref("");
const display = ref(false);
const selectedItems = ref<Set<string>>(new Set());
const selectedParams = ref<Map<string, string>>(new Map());

const globalCount = computed(() => selectedItems.value.size);

const filteredItems = computed(() => {
  if (!searchInput.value.trim()) {
    return items;
  } else {
    return items.filter((item) => item.name.toLowerCase().includes(searchInput.value.toLowerCase()));
  }
});

const source = ref("Hello");
const { text, copy, copied, isSupported } = useClipboard({ source });

function toggleSelection(chocoName: string) {
  if (selectedItems.value.has(chocoName)) {
    selectedItems.value.delete(chocoName);
    selectedParams.value.delete(chocoName);
  } else {
    selectedItems.value.add(chocoName);
    selectedParams.value.set(chocoName, "");
  }
}

function updateParams({ name, params }: { name: string; params: string }) {
  selectedParams.value.set(name, params);
}

function generate() {
  const selectedList = Array.from(selectedItems.value);
  return `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'));\n${selectedList
    .map((name, index) => {
      const params = selectedParams.value.get(name) || "";
      if (params.length > 0) {
        return `${index !== 0 ? "-y ;" : ""}choco install ${name} --params \"${params}\" -y; ${
          index !== selectedList.length - 1 ? "choco install" : ""
        }`;
      } else if (index == 0) {
        return `choco install ${name}${index === selectedList.length - 1 ? " -y" : ""}`;
      } else {
        return `${name}${index === selectedList.length - 1 ? " -y" : ""}`;
      }
    })
    .join(" ")}`;
}
</script>
<template>
  <div>
    <main class="">
      <h1 class="font-['DM_Serif_Display'] text-6xl text-center">Spinel</h1>
      <p class="md:text-2xl text-center mt-5">
        All your software, without any installer.
        <span class="font-semibold underline decoration-sky-500">Custom</span> &
        <span class="font-semibold underline decoration-green-500">Homemade</span>
        script for Chocolatey. Ninite on steroids
      </p>
      <div class="flex flex-col gap-2 mt-12">
        <input
          v-model="searchInput"
          type="text"
          name="searchInput"
          class="rounded-xl bg-white/50 backdrop-blur-sm placeholder:text-black/70 py-3 px-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none placeholder:italic shadow-lg shadow-black/20 mb-2 border border-white/20 transition-all duration-200 hover:bg-white/60"
          placeholder="Search for an app..."
        />
        <div class="flex flex-col gap-4">
          <div v-for="category in new Set(filteredItems.map((e) => e.category))" class="">
            <div
              class="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-black/20 gap-3 flex flex-col border border-white/20"
            >
              <h2 class="font-semibold text-lg text-black/80">
                {{ category.charAt(0).toLocaleUpperCase() + category.slice(1) }}
              </h2>
              <div class="flex gap-4 flex-wrap">
                <div
                  v-for="(item, index) in filteredItems.filter((item) => item.category === category)"
                  :key="item.name"
                  class=""
                >
                  <LazyCard
                    :item="item"
                    :is-selected="selectedItems.has(item.chocoName)"
                    @toggle-selection="toggleSelection"
                  ></LazyCard>
                </div>
              </div>
            </div>
          </div>
          <div v-if="filteredItems.find((e) => e.params && selectedItems.has(e.chocoName))">
            <h3 class="font-bold text-xl my-2">Optional Params:</h3>
            <div class="flex gap-6 flex-col">
              <div v-for="item in filteredItems.filter((e) => e.params && selectedItems.has(e.chocoName))">
                <LazyOptionalParams
                  :item="item"
                  :current-params="selectedParams.get(item.chocoName) || ''"
                  @update-params="updateParams"
                ></LazyOptionalParams>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col" v-if="globalCount > 0">
        <button
          @click="display = true"
          class="mt-12 m-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl px-8 py-3 font-bold text-xl shadow-xl group hover:shadow-2xl hover:scale-105 transition-all ease-in duration-200 border border-white/20 backdrop-blur-sm"
        >
          GENERATE
        </button>
        <div v-if="display" class="shadow-2xl mt-4 flex-col rounded-xl overflow-hidden border border-white/20">
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-t-xl"></div>
          <div class="flex float-right flex-row-reverse items-center">
            <button
              @click="copy(generate())"
              class="group relative bg-slate-800 hover:bg-slate-700 text-white size-8 p-2 m-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex flex-col items-center justify-center"
              :title="copied ? 'Copied!' : 'Copy to clipboard'"
            >
              <Icon
                :name="copied ? 'mdi:check' : 'mdi:clipboard-outline'"
                class="size-full transition-colors duration-200"
                :class="copied ? 'text-green-400' : 'text-slate-300 group-hover:text-white'"
              />
              <span
                v-if="copied"
                class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded opacity-75 whitespace-nowrap"
              >
                Copied!
              </span>
            </button>
          </div>
          <p
            class="bg-gray-900 text-white font-dm font-light italic text-sm md:text-sm p-5 rounded-b-md whitespace-pre-line break-words"
          >
            {{ generate() }}
          </p>
        </div>
        <div v-if="display" class="shadow-2xl p-6 rounded-xl bg-white/40 backdrop-blur-sm my-5 border border-white/30">
          <h2 class="font-['DM_Serif_Display'] text-3xl text-black/80">How to use it ? 🤔</h2>
          <p class="font-dm text-lg mt-1">
            First open PowerShell in
            <span class="underline underline-offset-1 decoration-sky-500 decoration-2">administrator</span>. You can do
            it by pressing <kbd>Windows</kbd> + <kbd>R</kbd>, type
            <span class="font-semibold italic">powershell</span> and press <kbd>CTRL</kbd> + <kbd>Shift</kbd> +
            <kbd>Enter</kbd>.<br />
            Then copy the script. You can do it by clicking on the clipboard icon on the right.
            <br />
            Finally paste it using <kbd>CTRL</kbd> + <kbd>V</kbd> or right click with your mouse. It's done ! 🎉
          </p>
        </div>
      </div>
    </main>
  </div>
</template>
<style scoped>
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
