<template>
  <main
    class="min-h-screen mt-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
    :style="styleVars"
  >
    <section class="max-w-6xl mx-auto px-6 py-8 mt-20">
      <!-- Title row -->
      <div class="flex items-center gap-2.5">
        <h1 class="text-2xl md:text-3xl font-bold tracking-tight">Projects</h1>
        <span
          class="text-xs px-3 py-1.5 rounded-full border text-[var(--text-secondary)] border-[var(--border-primary)] bg-[var(--bg-muted)]"
        >
          {{ active }}
        </span>
      </div>

      <!-- Filters card -->
      <div class="my-3">
        <div
          class="rounded-xl p-3 md:p-4 border bg-[var(--bg-muted)] border-[var(--border-primary)]"
        >
          <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <!-- Dynamic chips -->
            <div class="flex flex-wrap gap-2">
              <button
                v-for="c in categories"
                :key="c"
                class="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
                :class="
                  active === c
                    ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                    : 'border-[var(--border-primary)] bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                "
                :style="active === c ? chipActiveStyle : null"
                @click="active = c"
              >
                {{ c }}
              </button>
            </div>

            <!-- Search -->
            <input
              v-model="q"
              type="text"
              placeholder="Search projects…"
              class="px-3 py-2 rounded-xl min-w-[220px] bg-[var(--bg-muted)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-opacity-40 focus:border-[var(--accent-primary)]"
            />
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="!filtered.length" class="py-8 text-[var(--text-secondary)]">
        No projects found.
      </div>

      <!-- Grid: kartu mengikuti style HomePage -->
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div
          v-for="(p, idx) in filtered"
          :key="p.id"
          class="cursor-target group bg-gradient-to-br from-[#1a1b20] to-[#0f0f10] border border-[#242528] rounded-xl overflow-hidden hover:border-[#5c7cfa]/50 hover:shadow-lg hover:shadow-[#5c7cfa]/20 transition-all duration-300"
        >
          <div class="aspect-video overflow-hidden" @click="openDetails(p)">
            <img
              :src="p.thumb"
              :alt="p.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
              loading="lazy"
              decoding="async"
              :fetchpriority="idx < 2 ? 'high' : 'low'"
            />
          </div>

          <div class="p-6">
            <h4 class="text-lg font-bold mb-2 group-hover:text-[#5c7cfa] transition-colors">
              {{ p.title }}
            </h4>
            <p class="text-[var(--text-secondary)] text-sm mb-4">{{ p.subtitle }}</p>

            <div class="flex flex-wrap gap-2 mb-4" v-if="p.tags?.length">
              <span
                v-for="tag in p.tags"
                :key="tag"
                class="text-xs px-2.5 py-1 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Actions -->
            <div class="mt-4 flex flex-wrap gap-3">
              <button
                @click="openDetails(p)"
                class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-400/60 text-emerald-300 hover:text-white hover:bg-emerald-500/15 hover:border-emerald-400 transition"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Details
              </button>

              <a
                :href="p.repo || fallbackGithub"
                target="_blank"
                rel="noopener"
                @click.stop
                class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-indigo-400/60 text-indigo-300 hover:text-white hover:bg-indigo-500/15 hover:border-indigo-400 transition"
              >
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 2.99-.4s2.03.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"
                  />
                </svg>
                View Source
              </a>

              <a
                v-if="p.demo"
                :href="p.demo"
                target="_blank"
                rel="noopener"
                @click.stop
                class="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-600/60 text-slate-300 hover:text-white hover:bg-slate-700/50 hover:border-slate-500 transition"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail Modal (mengikuti HomePage) -->
    <div
      v-if="selected"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click="closeDetails"
    >
      <div
        class="relative max-w-4xl w-full max-h-[88vh] bg-[#0f0f10] border border-slate-700/50 rounded-xl overflow-hidden mt-[80px]"
        @click.stop
      >
        <!-- Close -->
        <button
          @click="closeDetails"
          class="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-600/50 text-slate-400 hover:text-white hover:bg-slate-700 transition flex items-center justify-center"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="overflow-y-auto max-h-[90vh]">
          <!-- Hero -->
          <div class="aspect-video overflow-hidden">
            <img :src="selected.thumb" :alt="selected.title" class="w-full h-full object-cover" />
          </div>

          <!-- Body -->
          <div class="p-6 sm:p-8">
            <div class="mb-6">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {{ selected.title }}
                  </h3>
                  <p class="text-slate-400">{{ selected.subtitle }}</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mb-6" v-if="selected.tags?.length">
                <span
                  v-for="tag in selected.tags"
                  :key="tag"
                  class="text-xs px-3 py-1.5 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="mb-6" v-if="selected.description">
              <h4 class="text-lg font-semibold text-white mb-3">Project Overview</h4>
              <p class="text-slate-300 leading-relaxed">
                {{ selected.description }}
              </p>
            </div>

            <div class="mb-6" v-if="selected.features?.length">
              <h4 class="text-lg font-semibold text-white mb-3">Key Features</h4>
              <ul class="space-y-2">
                <li
                  v-for="f in selected.features"
                  :key="f"
                  class="flex items-start gap-3 text-slate-300"
                >
                  <div class="w-1.5 h-1.5 bg-[#5c7cfa] rounded-full mt-2 shrink-0"></div>
                  {{ f }}
                </li>
              </ul>
            </div>

            <div class="mb-8" v-if="selected.techStack?.length">
              <h4 class="text-lg font-semibold text-white mb-3">Tech Stack</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="t in selected.techStack"
                  :key="t"
                  class="px-3 py-1.5 text-sm rounded-lg border border-slate-600/50 text-slate-300 bg-slate-800/50"
                >
                  {{ t }}
                </span>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a
                :href="selected.repo || fallbackGithub"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-indigo-400/60 text-indigo-300 hover:text-white hover:bg-indigo-500/15 hover:border-indigo-400 transition"
              >
                <svg viewBox="0 0 24 24" class="w-4 h-4" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.31.76-1.61-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 2.99-.4s2.03.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"
                  />
                </svg>
                View Source Code
              </a>
              <a
                v-if="selected.demo"
                :href="selected.demo"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-emerald-400/60 text-emerald-300 hover:text-white hover:bg-emerald-500/15 hover:border-emerald-400 transition"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, shallowRef, reactive, onMounted, onBeforeUnmount } from "vue";
import { projects as allProjects, categoryOf } from "@/assets/project.js";

/* Palette (konsisten) */
const colors = reactive({
  background: { primary: "#0a0a0a", card: "#242528", muted: "#1a1b20" },
  text: { primary: "#e8e8ea", secondary: "#a6adbb", muted: "#6b7280" },
  accent: { primary: "#5c7cfa", secondary: "#4c63d2", light: "#b5aaff" },
  border: { primary: "#3a3a3a", muted: "#6b728050", light: "#ffffff10", accent: "#ffffff20" },
});
const styleVars = computed(() => ({
  "--bg-primary": colors.background.primary,
  "--bg-card": colors.background.card,
  "--bg-muted": colors.background.muted,
  "--text-primary": colors.text.primary,
  "--text-secondary": colors.text.secondary,
  "--text-muted": colors.text.muted,
  "--accent-primary": colors.accent.primary,
  "--accent-secondary": colors.accent.secondary,
  "--accent-light": colors.accent.light,
  "--border-primary": colors.border.primary,
  "--border-muted": colors.border.muted,
  "--border-light": colors.border.light,
  "--border-accent": colors.border.accent,
}));
const chipActiveStyle = {
  background: "color-mix(in srgb, var(--accent-primary) 12%, transparent)",
};

/* State filter */
const q = ref("");
const active = ref("All");

/* Data shared */
const projects = shallowRef(allProjects);

/* Kategori dinamis */
const categories = computed(() => {
  const set = new Set(projects.value.map(categoryOf));
  return ["All", ...set];
});

/* Filter & search */
const filtered = computed(() => {
  const kw = q.value.trim().toLowerCase();
  return projects.value.filter((p) => {
    const cat = categoryOf(p);
    const matchCat = active.value === "All" || cat === active.value;
    const hay = [p.title, p.subtitle, ...(p.tags || [])].join(" ").toLowerCase();
    const matchKw = !kw || hay.includes(kw);
    return matchCat && matchKw;
  });
});

/* Modal detail (HomePage style) */
const selected = ref(null);
function openDetails(p) {
  selected.value = p;
  document.body.style.overflow = "hidden";
}
function closeDetails() {
  selected.value = null;
  document.body.style.overflow = "auto";
}
function onEsc(e) {
  if (e.key === "Escape" && selected.value) closeDetails();
}
onMounted(() => window.addEventListener("keydown", onEsc));
onBeforeUnmount(() => window.removeEventListener("keydown", onEsc));

/* Fallback GitHub */
const fallbackGithub = "https://github.com/kikidwi";
</script>
