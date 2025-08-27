<script lang="ts" setup>
const props = defineProps<{ item: item; isSelected: boolean }>();
const emit = defineEmits<{ "toggle-selection": [chocoName: string] }>();
</script>
<template>
  <button
    @click="emit('toggle-selection', props.item.chocoName)"
    :class="props.isSelected ? 'ring-yellow-300 ring-4' : ''"
    class="select-none bg-gradient-to-b from-slate-700 to-slate-800 flex flex-col items-center px-2 pt-2 rounded-lg shadow-md shadow-black/30 w-[92px] h-[120px] text-white hover:text-black transition-all ease-in hover:shadow-black/60 hover:from-slate-200 hover:to-slate-400 focus:ring-4 focus:ring-white gap-1"
  >
    <div class="size-12 flex items-center justify-center p-1">
      <img
        v-if="props.item.iconName.startsWith('https')"
        :src="props.item.iconName"
        class="full"
        :alt="props.item.iconName"
      />
      <Icon
        v-else
        :name="props.item.iconName"
        :color="props.item.iconColor"
        :class="props.item.iconFlip ? '-scale-x-100' : ''"
        size="64"
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
