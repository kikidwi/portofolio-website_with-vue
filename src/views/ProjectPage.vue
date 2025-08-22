<template>
  <main
    class="min-h-screen mt-12 bg-[var(--bg-primary)] text-[var(--text-primary)]"
    :style="styleVars"
  >
    <section class="max-w-6xl mx-auto px-6 py-8">
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
            <!-- Chips -->
            <div class="flex flex-wrap gap-2">
              <!-- All -->
              <button
                class="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
                :class="
                  active === 'All'
                    ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                    : 'border-[var(--border-primary)] bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                "
                :style="active === 'All' ? chipActiveStyle : null"
                @click="active = 'All'"
              >
                All
              </button>

              <!-- Web -->
              <button
                class="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
                :class="
                  active === 'Web'
                    ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                    : 'border-[var(--border-primary)] bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                "
                :style="active === 'Web' ? chipActiveStyle : null"
                @click="active = 'Web'"
              >
                Web
              </button>

              <!-- Brand -->
              <button
                class="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
                :class="
                  active === 'Brand'
                    ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                    : 'border-[var(--border-primary)] bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                "
                :style="active === 'Brand' ? chipActiveStyle : null"
                @click="active = 'Brand'"
              >
                Brand
              </button>

              <!-- Motion -->
              <button
                class="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200"
                :class="
                  active === 'Motion'
                    ? 'border-[var(--accent-primary)] text-[var(--accent-primary)]'
                    : 'border-[var(--border-primary)] bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                "
                :style="active === 'Motion' ? chipActiveStyle : null"
                @click="active = 'Motion'"
              >
                Motion
              </button>
            </div>

            <!-- Search -->
            <input
              v-model="q"
              placeholder="Search projects…"
              class="px-3 py-2 rounded-xl min-w-[220px] bg-[var(--bg-muted)] border border-[var(--border-primary)] text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] focus:ring-opacity-40 focus:border-[var(--accent-primary)]"
              type="text"
            />
          </div>
        </div>
      </div>

      <!-- States -->
      <div v-if="loading" class="py-8 text-[var(--text-secondary)]">Loading projects…</div>
      <div v-else-if="!filtered.length" class="py-8 text-[var(--text-secondary)]">
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
import { ref, computed, onMounted, onBeforeUnmount, shallowRef, reactive } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";

/* Pakai palette yang kamu kirim */
const colors = reactive({
  background: { primary: "#0a0a0a", card: "#242528", muted: "#1a1b20" },
  text: { primary: "#e8e8ea", secondary: "#a6adbb", muted: "#6b7280" },
  accent: { primary: "#5c7cfa", secondary: "#4c63d2", light: "#b5aaff" },
  border: { primary: "#3a3a3a", muted: "#6b728050", light: "#ffffff10", accent: "#ffffff20" },
});

/* Ikat ke CSS vars agar konsisten di Tailwind arbitrary values */
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

/* Tint halus untuk chip aktif (hindari /opacity di arbitrary color) */
const chipActiveStyle = {
  background: "color-mix(in srgb, var(--accent-primary) 12%, transparent)",
};

const q = ref("");
const active = ref("All");

/* Data & logic tetap sama */
const projects = shallowRef([]);
const loading = ref(false);
let controller;

async function fetchProjects() {
  loading.value = true;
  controller?.abort();
  controller = new AbortController();
  try {
    projects.value = [
      {
        id: 1,
        title: "Universal UI Kit (Web)",
        subtitle: "Universal UI kit for Figma",
        tags: ["UX", "UI", "Motion"],
        cat: "Web",
        thumb:
          "https://images.unsplash.com/photo-1559027615-47f13b833b5f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "Data Visualization",
        subtitle: "Charts and infographics",
        tags: ["Brand", "Motion"],
        cat: "Brand",
        thumb:
          "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Icon Set",
        subtitle: "1900+ vector icons",
        tags: ["UI", "Web"],
        cat: "Web",
        thumb:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Project Management",
        subtitle: "Control your projects",
        tags: ["Product", "UX"],
        cat: "Motion",
        thumb:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
      },
    ];
  } finally {
    loading.value = false;
  }
}

onMounted(fetchProjects);
onBeforeUnmount(() => controller?.abort());

const filtered = computed(() => {
  const kw = q.value.trim().toLowerCase();
  return projects.value.filter((p) => {
    const matchCat = active.value === "All" || p.cat === active.value;
    const hay = [p.title, p.subtitle, ...(p.tags || [])].join(" ").toLowerCase();
    const matchKw = !kw || hay.includes(kw);
    return matchCat && matchKw;
  });
});

function openProject(p) {
  alert(`Open project: ${p.title}`);
}
</script>
