<script lang="ts" setup>
const searchInput = ref("");

const filteredItems = computed(() => {
  if (!searchInput.value.trim()) {
    return items;
  } else {
    return items.filter((item) => item.name.toLowerCase().includes(searchInput.value.toLowerCase()));
  }
});
</script>
<template>
  <div>
    <main class="">
      <h1 class="font-['DM_Serif_Display'] text-6xl text-center">Spinel</h1>
      <p class="text-lg sm:text-2xl text-justify mt-5">
        All your software, without any installer.
        <span class="font-semibold underline decoration-sky-500">Custom</span> &
        <span class="font-semibold underline decoration-green-500">Homemade</span>
        script for Chocolatey. Ninite on steroids
      </p>
      <div class="flex flex-col gap-2 mt-12">
        <input
          v-model="searchInput"
          type="text"
          class="rounded-md bg-white/40 placeholder:text-black/70 py-2 px-3 text-sm focus:ring-2 focus:ring-sky-500 outline-none placeholder:italic shadow-sm shadow-black/15 mb-2"
          placeholder="Search for an app..."
        />
        <div class="flex flex-col gap-4">
          <div v-for="category in new Set(filteredItems.map((e) => e.category))" class="">
            <div class="bg-white/25 rounded-md p-4 shadow-md shadow-black/10 gap-2 flex flex-col">
              <h3 class="font-semibold">{{ category.charAt(0).toLocaleUpperCase() + category.slice(1) }}</h3>
              <div class="flex gap-4 flex-wrap">
                <div
                  v-for="(item, index) in filteredItems.filter((item) => item.category === category)"
                  :key="item.name"
                  class=""
                >
                  <Card :item="item"></Card>
                </div>
              </div>
            </div>
          </div>
          <div v-if="filteredItems.find((e) => e.params)">
            <h2 class="font-bold text-xl my-2">Optional Params:</h2>
            <div class="flex gap-6 flex-col">
              <div v-for="item in filteredItems.filter((e) => e.params)">
                <OptionalParams :item="item"></OptionalParams>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
