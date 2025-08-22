<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 max-w-6xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md"
  >
    <!-- Brand -->
    <RouterLink to="/" class="flex items-center gap-3 no-underline">
      <span class="w-9 h-9 grid place-items-center rounded-[10px] bg-[#17181a]" aria-hidden="true"
        >🎒</span
      >
      <span class="font-bold tracking-[0.04em]">KIKI DWI PRASETYO</span>
    </RouterLink>

    <!-- Nav -->
    <nav class="flex items-center gap-3.5">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        custom
        v-slot="{ href, navigate, isActive }"
      >
        <a
          :href="href"
          @click="navigate"
          class="px-2 py-1.5 rounded-lg transition-colors border"
          :class="
            isActive
              ? 'text-[#e8e8ea] bg-[#17181a] border-[#242528]'
              : 'text-[#a6adbb] bg-transparent border-transparent hover:text-[#e8e8ea] hover:bg-[#17181a] hover:border-[#242528]'
          "
        >
          {{ link.label }}
        </a>
      </RouterLink>

      <button
        class="w-9 h-9 rounded-[10px] border border-[#242528] bg-[#17181a] text-[#e8e8ea] hover:border-[#5c7cfa] transition-colors"
        aria-label="Toggle theme"
        @click="toggleTheme"
      >
        ☾
      </button>
    </nav>
  </header>
</template>

<script setup>
const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.dataset.theme !== "light";
  root.dataset.theme = isDark ? "light" : "dark";
}
</script>
