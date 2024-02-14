<script lang="ts" setup>
const selected = ref(false);
const props = defineProps<{ item: item }>();
const state = useState(props.item.name);
</script>
<template>
  <div class="flex flex-col" v-if="state && props.item.params">
    <div class="flex items-center gap-2">
      <p class="font-medium text-lg underline">{{ props.item.name }}:</p>
      <!-- <div class="flex size-6">
        <Icon :name="props.item.iconName" class="h-full w-full"></Icon>
      </div> -->
    </div>
    <div class="flex flex-col gap-1">
      <div v-for="param in props.item.params" class="flex gap-2 items-start">
        <div class="mt-[2px]">
          <input type="checkbox" name="" id="test" value="" class="accent-blue-600" />
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
