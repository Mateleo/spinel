<script lang="ts" setup>
const searchInput = ref("");
const display = ref(false);
const globalState = useState<number>("global");
const softwareString = useState<{ name: string; params: string }[]>("softwareString", () => []);

const filteredItems = computed(() => {
  if (!searchInput.value.trim()) {
    return items;
  } else {
    return items.filter((item) => item.name.toLowerCase().includes(searchInput.value.toLowerCase()));
  }
});

const source = ref("Hello");
const { text, copy, copied, isSupported } = useClipboard({ source });

function generate() {
  return `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'));\n${softwareString.value
    .map((e, index) => {
      if (e.params.length > 0) {
        return `${index !== 0 ? "-y ;" : ""}choco install ${e.name} --params \"${e.params}\" -y; ${
          index !== softwareString.value.length - 1 ? "choco install" : ""
        }`;
      } else if (index == 0) {
        return `choco install ${e.name}${index === softwareString.value.length - 1 ? " -y" : ""}`;
      } else {
        return `${e.name}${index === softwareString.value.length - 1 ? " -y" : ""}`;
      }
    })
    .join(" ")}`;
}
</script>
<template>
  <div>
    <main class="">
      <h1 class="font-['DM_Serif_Display'] text-6xl text-center">Spinel</h1>
      <p class="md:text-2xl text-justify mt-5">
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
          class="rounded-md bg-white/40 placeholder:text-black/70 py-2 px-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none placeholder:italic shadow-sm shadow-black/15 mb-2"
          placeholder="Search for an app..."
        />
        <div class="flex flex-col gap-4">
          <div v-for="category in new Set(filteredItems.map((e) => e.category))" class="">
            <div class="bg-white/25 rounded-md p-4 shadow-md shadow-black/10 gap-2 flex flex-col">
              <h2 class="font-semibold">{{ category.charAt(0).toLocaleUpperCase() + category.slice(1) }}</h2>
              <div class="flex gap-4 flex-wrap">
                <div
                  v-for="(item, index) in filteredItems.filter((item) => item.category === category)"
                  :key="item.name"
                  class=""
                >
                  <LazyCard :item="item"></LazyCard>
                </div>
              </div>
            </div>
          </div>
          <div v-if="filteredItems.find((e) => e.params)">
            <h3 class="font-bold text-xl my-2">Optional Params:</h3>
            <div class="flex gap-6 flex-col">
              <div v-for="item in filteredItems.filter((e) => e.params)">
                <LazyOptionalParams :item="item"></LazyOptionalParams>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col" v-if="globalState > 0">
        <button
          @click="display = true"
          class="mt-12 m-auto bg-yellow-500 rounded-2xl px-4 py-2 font-bold text-xl shadow-lg group hover:outline hover:outline-4 hover:outline-red-200 hover:bg-gradient-to-br hover: from-fuchsia-600 hover:to-orange-600 hover:text-white transition-all ease-in duration-75"
        >
          GENERATE
        </button>
        <div v-if="display" class="shadow-lg mt-4 flex-col">
          <div class="bg-green-600 p-1 rounded-t-md"></div>
          <div class="flex float-right flex-row-reverse items-center">
            <button
              @click="copy(generate())"
              class="bg-gray-400 size-9 p-1 m-2 focus:bg-white rounded-md hover:bg-gray-300 border-2 border-white focus:border-green-600 focus:outline-none transition-all ease-in"
            >
              <Icon name="mdi:clipboard-outline" class="size-full opacity-80 pointer-events-none"></Icon>
            </button>
          </div>
          <p
            class="bg-gray-900 text-white font-dm font-light italic text-sm md:text-sm p-5 rounded-b-md whitespace-pre-line break-words"
          >
            {{ generate() }}
          </p>
        </div>
        <div v-if="display" class="shadow-xl p-3 rounded-md bg-white/30 my-5">
          <h2 class="font-['DM_Serif_Display'] text-3xl">How to use it ? 🤔</h2>
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
