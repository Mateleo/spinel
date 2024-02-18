<script lang="ts" setup>
const selected = ref(false);
const props = defineProps<{ item: item }>();
const state = useState(props.item.name, () => selected.value);
const globalState = useState("global", () => 0);
const stringSoftware = useState<{ name: string; params: string }[]>("softwareString");

selected.value = state.value;
</script>
<template>
  <button
    @click="
      selected = !selected;
      state = selected;
      globalState = globalState + (!selected ? -1 : +1);
      selected && !stringSoftware.map((e) => e.name).includes(props.item.chocoName)
        ? stringSoftware.push({ name: props.item.chocoName, params: '' })
        : (stringSoftware = stringSoftware.filter((e) => e.name !== props.item.chocoName));
    "
    :class="selected ? 'ring-yellow-300 ring-4' : ''"
    class="select-none bg-gradient-to-b from-slate-700 to-slate-800 flex flex-col items-center px-2 pt-2 rounded-lg shadow-md shadow-black/30 w-[88px] h-[115px] text-white hover:text-black transition-all ease-in hover:shadow-black/60 hover:from-slate-200 hover:to-slate-400 focus:ring-4 focus:ring-white"
  >
    <div class="size-12 flex items-center justify-center p-1">
      <img v-if="props.item.iconName.startsWith('https')" :src="props.item.iconName" class="full contrast-125" />
      <Icon
        v-else
        :name="props.item.iconName"
        class="size-full contrast-125"
        :color="props.item.iconColor"
        :class="props.item.iconFlip ? '-scale-x-100' : ''"
      ></Icon>
    </div>
    <p
      class="font-semibold leading-4"
      :class="Math.max(...props.item.name.split(' ').map((e) => e.length)) > 9 ? 'text-[14px]' : ''"
    >
      {{ props.item.name }}
    </p>
  </button>
</template>
