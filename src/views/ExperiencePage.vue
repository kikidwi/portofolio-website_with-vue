<template>
  <main
    class="max-w-6xl mx-auto px-6 py-8 mt-12 text-[var(--text-primary)]"
    :style="{
      '--bg-primary': colors.background.primary,
      '--bg-card': colors.background.card,
      '--bg-muted': colors.background.muted,
      '--text-primary': colors.text.primary,
      '--text-secondary': colors.text.secondary,
      '--text-muted': colors.text.muted,
      '--accent-primary': colors.accent.primary,
      '--accent-secondary': colors.accent.secondary,
      '--accent-light': colors.accent.light,
      '--border-primary': colors.border.primary,
      '--border-muted': colors.border.muted,
      '--border-light': colors.border.light,
      '--border-accent': colors.border.accent,
    }"
  >
    <section>
      <h1 class="text-2xl md:text-3xl font-bold tracking-tight">Experience</h1>
      <p class="text-[var(--text-secondary)] mt-1">A quick snapshot of roles and impact.</p>

      <!-- Stats -->
      <div class="mt-6">
        <StatsRow :stats="stats" />
      </div>

      <!-- Rule -->
      <hr class="h-px bg-[var(--border-primary)] border-0 my-8" />

      <!-- Timeline -->
      <div class="grid gap-3 md:gap-4">
        <article
          v-for="(item, i) in timeline"
          :key="i"
          class="rounded-xl p-6 border transition-all duration-200 bg-[var(--bg-muted)] border-[var(--border-primary)] hover:bg-[var(--bg-card)] hover:border-[var(--accent-light)]"
        >
          <!-- Head -->
          <div class="flex items-center justify-between gap-3">
            <strong class="text-base md:text-lg font-semibold text-[var(--text-primary)]">
              {{ item.role }}
            </strong>
            <span
              class="text-xs px-3 py-1.5 rounded-full border bg-[var(--bg-primary)]/40 text-[var(--text-secondary)] border-[var(--border-primary)]"
            >
              {{ item.range }}
            </span>
          </div>

          <!-- Meta -->
          <div class="text-sm text-[var(--text-secondary)] mt-2">
            <span class="font-semibold text-[var(--text-primary)]">{{ item.company }}</span>
            <span> — {{ item.location }}</span>
          </div>

          <!-- Bullets -->
          <ul class="mt-3 space-y-2">
            <li
              v-for="(b, j) in item.points"
              :key="j"
              class="relative pl-5 text-[var(--text-secondary)] leading-relaxed"
            >
              <span
                class="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"
              ></span>
              {{ b }}
            </li>
          </ul>

          <!-- Stack -->
          <div class="mt-4">
            <ChipList :tags="item.stack" />
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import StatsRow from "@/components/StatsRow.vue";
import ChipList from "@/components/ChipList.vue";

/* Palette: gunakan ini atau import dari file shared */
const colors = reactive({
  background: {
    primary: "#0a0a0a", // Main dark background
    card: "#242528", // Card backgrounds
    muted: "#1a1b20", // Subtle backgrounds
  },
  text: {
    primary: "#e8e8ea", // Primary text
    secondary: "#a6adbb", // Secondary text
    muted: "#6b7280", // Muted text
  },
  accent: {
    primary: "#5c7cfa", // Main blue accent
    secondary: "#4c63d2", // Darker blue
    light: "#b5aaff", // Light purple
  },
  border: {
    primary: "#3a3a3a", // Main borders
    muted: "#6b728050", // Muted borders
    light: "#ffffff10", // Light borders
    accent: "#ffffff20", // Accent borders
  },
});

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "30+", label: "Satisfied Clients" },
];

const timeline = [
  {
    role: "Senior Product Designer",
    company: "123d.one",
    range: "2022 — Present",
    location: "Remote",
    points: [
      "Led end-to-end design for analytics platform used by 50k+ users.",
      "Shipped design system that reduced design debt by 35%.",
      "Partnered with PM/Eng to raise activation rate by 12%.",
    ],
    stack: ["Figma", "Design System", "UX Research"],
  },
  {
    role: "UI/UX Designer",
    company: "YouTube",
    range: "2019 — 2022",
    location: "San Francisco",
    points: [
      "Prototyped new creator dashboard; improved task completion by 18%.",
      "Introduced motion guidelines across video tools.",
    ],
    stack: ["Prototyping", "Motion", "A11y"],
  },
  {
    role: "Visual Designer",
    company: "Google",
    range: "2016 — 2019",
    location: "Mountain View",
    points: [
      "Built shared icon set (1900+ glyphs) used across teams.",
      "Collaborated with Brand to unify web properties.",
    ],
    stack: ["Branding", "Icons", "Illustration"],
  },
];
</script>
