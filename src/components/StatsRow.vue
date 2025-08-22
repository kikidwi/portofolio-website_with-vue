<template>
  <ul class="grid grid-cols-3 gap-4 list-none p-0">
    <li
      v-for="s in stats"
      :key="s.label"
      class="bg-[#17181a] border border-[#242528] rounded-xl p-4 text-center"
    >
      <div class="text-2xl font-bold text-[#e8e8ea]">{{ s.value }}</div>
      <div class="text-[13px] text-[#a6adbb] mt-1">{{ s.label }}</div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  stats: { type: Array, default: () => [] },
});
</script>
