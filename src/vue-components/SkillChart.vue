<template>
  <div class="space-y-5">
    <div>
      <h3 class="font-display text-lg font-semibold text-slate-900 dark:text-white">{{ title }}</h3>
    </div>

    <div class="space-y-4">
      <div v-for="item in items" :key="item.name" class="space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="font-semibold text-slate-700 dark:text-slate-200">{{ item.name }}</span>
          <span class="text-slate-500 dark:text-slate-400">{{ item.value }}%</span>
        </div>
        <div class="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            class="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
            :style="{ width: animated[item.name] + '%' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Skill Progress',
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const animated = reactive({});

onMounted(() => {
  props.items.forEach((item, index) => {
    animated[item.name] = 0;
    window.setTimeout(() => {
      animated[item.name] = item.value;
    }, 160 * (index + 1));
  });
});
</script>
