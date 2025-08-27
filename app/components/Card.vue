<script lang="ts" setup>
const props = defineProps<{ item: item; isSelected: boolean }>();
const emit = defineEmits<{ "toggle-selection": [chocoName: string] }>();
</script>
<template>
  <button
    @click="emit('toggle-selection', props.item.chocoName)"
    :class="
      props.isSelected
        ? 'ring-blue-400 ring-4 bg-gradient-to-b from-blue-600 to-blue-800'
        : 'bg-gradient-to-b from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-900'
    "
    class="select-none flex flex-col items-center px-3 pt-3 rounded-lg shadow-lg shadow-black/40 w-[100px] h-[130px] text-white hover:text-white transition-all ease-in-out hover:shadow-xl hover:scale-105 gap-2"
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
        :style="`color: ${props.item.iconColor}`"
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
