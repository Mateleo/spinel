<script lang="ts" setup>
const selected = ref(false);
const props = defineProps<{ item: item }>();
const state = useState(props.item.name, () => selected.value);
const globalState = useState("global", () => 0);
const stringSoftware = useState<string[]>("softwareString");

selected.value = state.value;
</script>
<template>
  <button
    @click="
      selected = !selected;
      state = selected;
      globalState = globalState + (!selected ? -1 : +1);
      selected && !stringSoftware.includes(props.item.chocoName)
        ? stringSoftware.push(props.item.chocoName)
        : stringSoftware = stringSoftware.filter((e) => e !== props.item.chocoName);
    "
    :class="selected ? 'ring-yellow-300 ring-4' : ''"
    class="bg-gradient-to-b from-slate-500 to-slate-800 flex flex-col items-center px-2 pt-2 rounded-lg shadow-md shadow-black/30 w-[88px] h-[115px] text-white hover:text-black transition-all ease-in hover:shadow-black/60 hover:from-slate-200 hover:to-slate-400"
  >
    <div class="size-12 flex items-center justify-center p-1">
      <Icon :name="props.item.iconName" class="size-full"></Icon>
    </div>
    <p
      class="font-semibold leading-5"
      :class="Math.max(...props.item.name.split(' ').map((e) => e.length)) > 13 ? 'text-[12px]' : ''"
    >
      {{ props.item.name }}
    </p>
  </button>
</template>
