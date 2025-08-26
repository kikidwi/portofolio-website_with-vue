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

      <!-- Grid -->
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <ProjectCard v-for="p in filtered" :key="p.id" :project="p" @open="openProject" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, shallowRef, reactive } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
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

/* Data dari Home (shared) */
const projects = shallowRef(allProjects);

/* Kategori dinamis: All + hasil mapping dari data */
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

/* Open action (bisa diarahkan ke repo / detail) */
function openProject(p) {
  const url = p.repo || "https://github.com/kikidwi";
  window.open(url, "_blank", "noopener");
}
</script>
