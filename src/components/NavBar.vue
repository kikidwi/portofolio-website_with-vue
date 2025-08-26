<template>
  <!-- sticky, glass, shadow on scroll -->
  <header class="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-full">
    <div class="mx-auto max-w-6xl px-4">
      <div
        :class="[
          'nav-shell flex items-center justify-between rounded-2xl px-4 py-3',
          scrolled ? 'nav-scrolled' : '',
        ]"
      >
        <!-- Brand -->
        <RouterLink to="/" class="flex items-center gap-3 no-underline">
          <span
            class="w-9 h-9 grid place-items-center rounded-xl bg-[#17181a] border border-white/10"
            aria-hidden="true"
            >🎒</span
          >
          <span class="font-bold tracking-[0.04em]">KIKI DWI PRASETYO</span>
        </RouterLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-1 relative">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <a :href="href" @click="navigate" :data-active="isActive" class="nav-link">
              {{ link.label }}
            </a>
          </RouterLink>
        </nav>

        <!-- Right: CTA + mobile toggle -->
        <div class="flex items-center gap-2 md:gap-3">
          <RouterLink
            to="/contact"
            class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-sm bg-indigo-500/15 border-indigo-400/40 text-indigo-200 hover:bg-indigo-500/25 hover:border-indigo-400 hover:text-white transition"
          >
            Contact
          </RouterLink>

          <!-- Mobile menu button -->
          <button
            class="md:hidden w-10 h-10 grid place-items-center rounded-xl border border-white/10 bg-[#16181c] hover:border-white/20 transition"
            :aria-expanded="open ? 'true' : 'false'"
            aria-label="Toggle menu"
            @click="open = !open"
          >
            <span class="relative block w-5 h-3.5">
              <span
                :class="[
                  'absolute inset-x-0 top-0 h-[2px] bg-white/80 transition',
                  open ? 'translate-y-1.75 rotate-45' : '',
                ]"
              />
              <span
                :class="[
                  'absolute inset-x-0 bottom-0 h-[2px] bg-white/80 transition',
                  open ? '-translate-y-1.75 -rotate-45' : '',
                ]"
              />
            </span>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <transition name="fade">
        <div v-if="open" class="md:hidden mt-2">
          <div
            class="rounded-2xl bg-[#101113]/90 border border-white/10 backdrop-blur-xl p-3 shadow-xl"
          >
            <nav class="grid">
              <RouterLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                custom
                v-slot="{ href, navigate, isActive }"
              >
                <a
                  :href="href"
                  @click="
                    () => {
                      navigate();
                      open = false;
                    }
                  "
                  :data-active="isActive"
                  class="px-4 py-3 rounded-xl text-sm border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition"
                >
                  {{ link.label }}
                </a>
              </RouterLink>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const open = ref(false);
const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 8;
}
function onKey(e) {
  if (e.key === "Escape") open.value = false;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("keydown", onKey);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  document.removeEventListener("keydown", onKey);
});

// close drawer when route changes
const route = useRoute();
watch(
  () => route.fullPath,
  () => (open.value = false)
);
</script>

<style scoped>
.nav-shell {
  background: linear-gradient(180deg, rgba(18, 19, 22, 0.86), rgba(18, 19, 22, 0.7));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  transition: box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}
.nav-scrolled {
  border-color: rgba(92, 124, 250, 0.35);
  box-shadow: 0 14px 40px rgba(11, 12, 14, 0.6);
}

.nav-link {
  position: relative;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  color: #a6adbb;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}
.nav-link:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #e8e8ea;
  border-color: rgba(255, 255, 255, 0.08);
}
.nav-link[data-active="true"] {
  color: #e8e8ea;
  background: color-mix(in srgb, #5c7cfa 18%, transparent);
  border-color: rgba(92, 124, 250, 0.35);
  box-shadow: 0 6px 18px rgba(92, 124, 250, 0.12) inset;
}

/* simple fade for drawer */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
