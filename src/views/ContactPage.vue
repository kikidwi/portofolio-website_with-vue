<template>
  <main class="max-w-6xl mx-auto px-6 py-8 mt-12 text-[var(--text-primary)]" :style="styleVars">
    <!-- Header -->
    <section class="mb-6">
      <h1 class="text-2xl md:text-3xl font-bold tracking-tight">Contact</h1>
      <p class="text-[var(--text-secondary)] mt-1">
        Have a project in mind? Let’s build something great together.
      </p>
    </section>

    <!-- Content -->
    <section class="grid gap-6 lg:grid-cols-2">
      <!-- Form -->
      <div
        class="rounded-2xl p-6 lg:p-7 border bg-[var(--bg-muted)] border-[var(--border-primary)]"
      >
        <!-- Success / Error banners -->
        <div
          v-if="status === 'success'"
          class="mb-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 px-4 py-3"
        >
          ✅ Message sent. I’ll get back to you soon.
        </div>
        <div
          v-else-if="status === 'error'"
          class="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 px-4 py-3"
        >
          ⚠️ Something went wrong. Please try again.
        </div>

        <form @submit.prevent="submit" novalidate>
          <!-- Honeypot (anti-spam) -->
          <label class="sr-only" aria-hidden="true">
            Do not fill this
            <input v-model="hp" tabindex="-1" autocomplete="off" class="sr-only" />
          </label>

          <div class="grid gap-4 sm:grid-cols-2">
            <!-- Name -->
            <div class="sm:col-span-1">
              <label class="block text-sm mb-1.5">Name</label>
              <input
                v-model.trim="form.name"
                type="text"
                required
                :aria-invalid="!!errors.name"
                class="w-full rounded-xl border px-3.5 py-2.5 outline-none transition-all placeholder-[var(--text-muted)]"
                :class="inputClass(errors.name)"
                :style="fieldBgStyle"
                placeholder="Your name"
              />
              <p v-if="errors.name" class="mt-1 text-xs text-red-400">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div class="sm:col-span-1">
              <label class="block text-sm mb-1.5">Email</label>
              <input
                v-model.trim="form.email"
                type="email"
                required
                :aria-invalid="!!errors.email"
                class="w-full rounded-xl border px-3.5 py-2.5 outline-none transition-all placeholder-[var(--text-muted)]"
                :class="inputClass(errors.email)"
                :style="fieldBgStyle"
                placeholder="you@email.com"
              />
              <p v-if="errors.email" class="mt-1 text-xs text-red-400">{{ errors.email }}</p>
            </div>

            <!-- Subject -->
            <div class="sm:col-span-2">
              <label class="block text-sm mb-1.5">Subject</label>
              <input
                v-model.trim="form.subject"
                type="text"
                required
                :aria-invalid="!!errors.subject"
                class="w-full rounded-xl border px-3.5 py-2.5 outline-none transition-all placeholder-[var(--text-muted)]"
                :class="inputClass(errors.subject)"
                :style="fieldBgStyle"
                placeholder="Project inquiry, collaboration, etc."
              />
              <p v-if="errors.subject" class="mt-1 text-xs text-red-400">{{ errors.subject }}</p>
            </div>

            <!-- Message -->
            <div class="sm:col-span-2">
              <label class="block text-sm mb-1.5">Message</label>
              <textarea
                v-model.trim="form.message"
                rows="6"
                required
                :aria-invalid="!!errors.message"
                class="w-full rounded-xl border px-3.5 py-2.5 outline-none transition-all resize-y placeholder-[var(--text-muted)]"
                :class="inputClass(errors.message)"
                :style="fieldBgStyle"
                placeholder="Tell me about your goals, timeline, and budget (if known)."
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-xs text-red-400">{{ errors.message }}</p>
            </div>
          </div>

          <!-- Actions -->
          <div class="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              :disabled="loading || !canSubmit"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all border text-[var(--accent-primary)] border-[var(--accent-primary)] disabled:opacity-60 disabled:cursor-not-allowed"
              :style="chipActiveStyle"
            >
              <span v-if="!loading">Send Message</span>
              <span v-else class="inline-flex items-center gap-2">
                <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending…
              </span>
            </button>

            <a
              :href="`mailto:${profile.email}`"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border text-[var(--text-primary)] transition-all border-[var(--border-primary)] bg-[var(--bg-muted)] hover:bg-[var(--bg-card)]"
            >
              Email me directly
            </a>
          </div>
        </form>
      </div>

      <!-- Info -->
      <aside class="grid gap-4">
        <!-- Card: Contact details -->
        <div class="rounded-2xl p-6 border bg-[var(--bg-muted)] border-[var(--border-primary)]">
          <h3 class="font-semibold mb-3">Contact & Availability</h3>
          <div class="grid gap-3">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 grid place-items-center rounded-lg" :style="iconBgStyle">
                ✉️
              </div>
              <div class="flex-1">
                <div class="text-sm text-[var(--text-secondary)]">Email</div>
                <div class="flex items-center gap-2">
                  <a
                    :href="`mailto:${profile.email}`"
                    class="underline underline-offset-4 decoration-dotted hover:text-[var(--accent-primary)]"
                  >
                    {{ profile.email }}
                  </a>
                  <button
                    @click="copy(profile.email)"
                    class="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 grid place-items-center rounded-lg" :style="iconBgStyle">
                📞
              </div>
              <div class="flex-1">
                <div class="text-sm text-[var(--text-secondary)]">Phone</div>
                <div>{{ profile.phone }}</div>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="w-10 h-10 grid place-items-center rounded-lg" :style="iconBgStyle">
                📍
              </div>
              <div class="flex-1">
                <div class="text-sm text-[var(--text-secondary)]">Location</div>
                <div>{{ profile.location }}</div>
              </div>
            </div>
          </div>

          <p class="text-[var(--text-secondary)] text-sm mt-4">
            Typically replies within 1–2 business days.
          </p>

          <div class="mt-4 flex flex-wrap gap-3">
            <a
              :href="profile.linkedin"
              target="_blank"
              rel="noopener"
              class="px-3 py-2 rounded-lg border text-sm border-[var(--border-primary)] bg-[var(--bg-muted)] hover:bg-[var(--bg-card)]"
            >
              LinkedIn
            </a>
            <a
              :href="profile.github"
              target="_blank"
              rel="noopener"
              class="px-3 py-2 rounded-lg border text-sm border-[var(--border-primary)] bg-[var(--bg-muted)] hover:bg-[var(--bg-card)]"
            >
              GitHub
            </a>
            <a
              :href="profile.website"
              target="_blank"
              rel="noopener"
              class="px-3 py-2 rounded-lg border text-sm border-[var(--border-primary)] bg-[var(--bg-muted)] hover:bg-[var(--bg-card)]"
            >
              {{ cleanUrl(profile.website) }}
            </a>
          </div>
        </div>

        <!-- Card: Small note -->
        <div class="rounded-2xl p-6 border bg-[var(--bg-muted)] border-[var(--border-primary)]">
          <h3 class="font-semibold mb-2">Project Fit</h3>
          <p class="text-[var(--text-secondary)] text-sm">
            I can help with modern web apps, WordPress, and APIs. Share your goals, scope, and
            timeline for an accurate estimate.
          </p>
        </div>
      </aside>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref, computed } from "vue";

/* Palette dari kamu */
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

/* Background transparan untuk input/icon (setara /40) */
const fieldBgStyle = {
  background: "color-mix(in srgb, var(--bg-primary) 40%, transparent)",
};
const iconBgStyle = {
  background: "color-mix(in srgb, var(--bg-primary) 40%, transparent)",
};
/* Tint “accent/10%” utk tombol utama */
const chipActiveStyle = {
  background: "color-mix(in srgb, var(--accent-primary) 12%, transparent)",
};

const profile = reactive({
  name: "JOHN WALKER",
  location: "Bandung, Indonesia",
  website: "https://www.123d.one",
  phone: "+62-812-3456-7890",
  email: "hello@123d.one",
  linkedin: "https://www.linkedin.com/in/johnwalker",
  github: "https://github.com/johnwalker",
});

const form = reactive({ name: "", email: "", subject: "", message: "" });
const errors = reactive({ name: "", email: "", subject: "", message: "" });

const loading = ref(false);
const status = ref(""); // '', 'success', 'error'
const hp = ref("");

const canSubmit = computed(
  () => form.name && form.email && form.subject && form.message && !loading.value
);

function inputClass(hasError) {
  return hasError
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
    : "border-[var(--border-primary)] focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/30";
}

function validate() {
  errors.name = form.name.length < 3 ? "Name must be at least 3 characters." : "";
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Please enter a valid email.";
  errors.subject = form.subject.length < 3 ? "Subject must be at least 3 characters." : "";
  errors.message = form.message.length < 10 ? "Message must be at least 10 characters." : "";
  return !errors.name && !errors.email && !errors.subject && !errors.message;
}

async function submit() {
  status.value = "";
  if (hp.value) return;
  if (!validate()) return;

  loading.value = true;
  try {
    await new Promise((r) => setTimeout(r, 900));
    status.value = "success";
    Object.assign(form, { name: "", email: "", subject: "", message: "" });
  } catch (e) {
    console.error(e);
    status.value = "error";
  } finally {
    loading.value = false;
  }
}

function copy(text) {
  navigator.clipboard?.writeText(text);
}
function cleanUrl(u) {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return u;
  }
}
</script>
