<script lang="ts" setup>
const params = ref<string[]>([]);
const props = defineProps<{ item: item }>();
const state = useState(props.item.name);
const softwareString = useState<{ name: string; params: string }[]>("softwareString");
</script>
<template>
  <div class="flex flex-col" v-if="state && props.item.params">
    <div class="flex items-center gap-2">
      <p class="font-medium text-lg underline">{{ props.item.name }}:</p>
    </div>
    <div class="flex flex-col gap-1">
      <div @click="" v-for="param in props.item.params" class="flex gap-2 items-start">
        <div class="mt-[3px] flex gap-2">
          <input
            @click="
              params.includes(param.name) ? params = params.filter((e) => e !== param.name) : params.push(param.name);
              softwareString.find((e) => e.name === props.item.chocoName)
                ? (softwareString[softwareString.findIndex((e) => e.name === props.item.chocoName)].params = params.join(' '))
                : '';
            "
            type="checkbox"
            :id="param.name"
            value=""
            class="relative peer shrink-0 accent-blue-600 appearance-none size-5 border-2 rounded-sm bg-white/50 shadow-sm shadow-black/30 border-white/60 checked:bg-blue-800 checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100"
          />
          <svg
            class="absolute size-5 hidden peer-checked:block text-white/80 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <p>
          <span class="font-semibold">{{ param.name }}</span> {{ param.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.test {
  text-anchor: start;
  x: 100%;
}
</style>
