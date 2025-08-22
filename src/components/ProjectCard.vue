<template>
  <article
    role="button"
    tabindex="0"
    @click="handleOpen"
    @keydown.enter.prevent="handleOpen"
    class="group cursor-pointer rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800/70 hover:border-indigo-400/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
  >
    <!-- Thumbnail -->
    <div class="aspect-video overflow-hidden bg-[#0f0f10]">
      <img
        v-if="project.thumb"
        :src="project.thumb"
        :alt="altText"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div v-else class="w-full h-full grid place-items-center text-slate-500 text-sm">
        No preview
      </div>
    </div>

    <!-- Body -->
    <div class="p-5">
      <h4
        class="text-base md:text-lg font-semibold mb-1 transition-colors group-hover:text-indigo-400"
      >
        {{ project.title || "Untitled Project" }}
      </h4>
      <p v-if="project.subtitle" class="text-slate-400 text-sm mb-3">
        {{ project.subtitle }}
      </p>

      <!-- Tags -->
      <div v-if="project.tags && project.tags.length" class="flex flex-wrap gap-2">
        <span
          v-for="(tag, i) in project.tags"
          :key="i"
          class="text-xs px-2.5 py-1 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const emit = defineEmits(["open"]);

const altText = computed(() =>
  props.project?.title ? `Preview: ${props.project.title}` : "Project preview"
);

function handleOpen() {
  emit("open", props.project);
}
</script>
