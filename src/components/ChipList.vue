<template>
  <div class="flex flex-wrap items-center gap-2">
    <span
      v-for="(t, i) in tags"
      :key="i"
      class="text-xs px-3 py-1.5 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/40 hover:bg-slate-700/60 transition-colors"
    >
      {{ t }}
    </span>

    <button
      v-if="allowAdd"
      type="button"
      @click="$emit('add')"
      class="text-xs px-3 py-1.5 rounded-full border border-dashed border-slate-500/60 text-slate-400 hover:text-indigo-400 hover:border-indigo-400/60 bg-transparent transition-colors"
    >
      + New
    </button>
  </div>
</template>

<script setup>
defineProps({
  tags: { type: Array, default: () => [] },
  allowAdd: { type: Boolean, default: false },
});
defineEmits(["add"]);
</script>
