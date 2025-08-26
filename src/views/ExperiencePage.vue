<template>
  <main class="min-h-screen bg-[#0a0a0a] text-[#e8e8ea]">
    <section class="max-w-6xl mx-auto px-6 py-16 mt-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1
          class="text-4xl min-[768px]:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Professional Experience
        </h1>
        <p class="text-gray-400 text-lg">My journey through the world of technology</p>
      </div>

      <!-- Stats -->
      <div class="mb-10">
        <StatsRow :stats="stats" />
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline line: kiri (mobile) -> tengah (desktop) -->
        <div
          class="absolute top-0 bottom-0 left-4 min-[1024px]:left-1/2 w-px bg-gradient-to-b from-[#5c7cfa] via-[#4c63d2] to-[#5c7cfa] timeline-line"
        ></div>

        <div class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative experience-card"
            :class="index % 2 === 0 ? 'left' : 'right'"
            :style="{ animationDelay: `${0.15 + index * 0.15}s` }"
          >
            <!-- Titik timeline: selalu center terhadap garis -->
            <div
              class="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 min-[1024px]:left-1/2 z-10"
              aria-hidden="true"
            >
              <div
                class="w-10 h-10 min-[1024px]:w-16 min-[1024px]:h-16 rounded-full bg-[#5c7cfa] border-4 border-[#0a0a0a] flex items-center justify-center shadow-lg timeline-dot"
              >
                <div class="w-2 h-2 min-[1024px]:w-3 min-[1024px]:h-3 rounded-full bg-white"></div>
              </div>
            </div>

            <!-- Baris konten -->
            <div class="relative pl-14 min-[1024px]:pl-0">
              <div
                class="flex items-stretch min-[1024px]:items-center min-[1024px]:justify-between"
              >
                <!-- Kartu kiri (even) -->
                <div v-if="index % 2 === 0" class="w-full min-[1024px]:w-5/12 min-[1024px]:pr-8">
                  <article
                    class="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 glow-effect hover:border-[#5c7cfa]/30 hover:bg-[#242528] transition-all duration-300 shadow-lg hover:shadow-[#5c7cfa]/10"
                  >
                    <header class="flex items-start justify-between gap-4 mb-2">
                      <h3 class="text-xl font-bold">{{ exp.role }}</h3>
                      <span class="text-sm text-[#a6adbb] font-mono">{{ exp.period }}</span>
                    </header>
                    <div class="text-sm text-[#e8e8ea] mb-3">
                      {{ exp.company }} • {{ exp.location }}
                    </div>
                    <ul class="space-y-2 mb-4">
                      <li
                        v-for="b in exp.bullets"
                        :key="b"
                        class="text-[#a6adbb] leading-relaxed pl-4 relative"
                      >
                        <span
                          class="absolute left-0 top-2 w-1.5 h-1.5 bg-[#5c7cfa] rounded-full"
                        ></span>
                        {{ b }}
                      </li>
                    </ul>
                    <ChipList :tags="exp.stack" />
                  </article>
                </div>

                <!-- Spacer kiri untuk odd (desktop only) -->
                <div v-else class="hidden min-[1024px]:block min-[1024px]:w-5/12"></div>

                <!-- Konektor ke garis (desktop only) -->
                <div
                  class="hidden min-[1024px]:block timeline-connector"
                  :class="index % 2 === 0 ? 'left' : 'right'"
                ></div>

                <!-- Kartu kanan (odd) -->
                <div v-if="index % 2 === 1" class="w-full min-[1024px]:w-5/12 min-[1024px]:pl-8">
                  <article
                    class="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 glow-effect hover:border-[#5c7cfa]/30 hover:bg-[#242528] transition-all duration-300 shadow-lg hover:shadow-[#5c7cfa]/10"
                  >
                    <header class="flex items-start justify-between gap-4 mb-2">
                      <h3 class="text-xl font-bold">{{ exp.role }}</h3>
                      <span class="text-sm text-[#a6adbb] font-mono">{{ exp.period }}</span>
                    </header>
                    <div class="text-sm text-[#e8e8ea] mb-3">
                      {{ exp.company }} • {{ exp.location }}
                    </div>
                    <ul class="space-y-2 mb-4">
                      <li
                        v-for="b in exp.bullets"
                        :key="b"
                        class="text-[#a6adbb] leading-relaxed pl-4 relative"
                      >
                        <span
                          class="absolute left-0 top-2 w-1.5 h-1.5 bg-[#5c7cfa] rounded-full"
                        ></span>
                        {{ b }}
                      </li>
                    </ul>
                    <ChipList :tags="exp.stack" />
                  </article>
                </div>

                <!-- Spacer kanan untuk even (desktop only) -->
                <div v-else class="hidden min-[1024px]:block min-[1024px]:w-5/12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer text -->
      <div class="flex justify-center items-center mt-10">
        <p class="text-gray-400">Ready for the next challenge</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import StatsRow from "@/components/StatsRow.vue";
import ChipList from "@/components/ChipList.vue";

// Stats disesuaikan dengan profil & jumlah project di halaman Home
const stats = [
  { value: "2+", label: "Years" },
  { value: "16+", label: "Projects" },
  { value: "3", label: "Roles" },
];

// Pengalaman — sama seperti di halaman Home
const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "Journal1z Advertising",
    location: "Remote",
    period: "Jul 2024 – Present",
    bullets: [
      "Develop & maintain Journal1z website; build landing page & product catalog (Figma → WordPress).",
      "Index site via Google Search Console, update articles weekly, ensure performance & uptime.",
    ],
    stack: ["WordPress", "Elementor", "Figma", "SEO", "Google Search Console"],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Research Center of Human Centric Engineering (Telkom Univ.)",
    location: "Bandung",
    period: "Jul 2023 – Oct 2023",
    bullets: [
      "Built satisfaction survey website (login via email, fill survey, visualize results).",
      "Implemented role-based access (admin/user) & designed MySQL schema.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Figma", "MySQL"],
  },
  {
    id: 3,
    role: "Mobile Development (Student)",
    company: "Bangkit Academy by Google, GoTo, Traveloka",
    location: "Remote",
    period: "Feb 2023 – Jun 2023",
    bullets: [
      "Completed MD path (score 88.64, 100% attendance); built GitHub Users & StoryApp.",
      "Capstone: ML-based waste sorting app (on-device inference).",
    ],
    stack: ["Kotlin", "Android", "TensorFlow Lite"],
  },
];
</script>

<style scoped>
@keyframes lineGrow {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}
@keyframes dotPulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(92, 124, 250, 0.7);
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(92, 124, 250, 0);
  }
}
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-line {
  animation: lineGrow 1.6s ease-out 0.3s both;
}
.timeline-dot {
  animation: dotPulse 2s infinite;
}
.experience-card.left {
  animation: slideInLeft 0.7s ease-out both;
}
.experience-card.right {
  animation: slideInRight 0.7s ease-out both;
}

.timeline-connector {
  position: relative;
}
.timeline-connector::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #5c7cfa, transparent);
  transform: translate(-50%, -50%);
  opacity: 0.6;
}
.timeline-connector.left::before {
  transform: translate(-100%, -50%);
  left: 0;
}
.timeline-connector.right::before {
  transform: translate(0, -50%);
  left: 100%;
}

.glow-effect {
  position: relative;
  overflow: hidden;
}
.glow-effect::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, #5c7cfa, #4c63d2, #5c7cfa, #4c63d2);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}
.glow-effect:hover::before {
  opacity: 0.25;
}

/* MOBILE tweaks (≤1024px - 1) */
@media (max-width: 1023.98px) {
  /* Hilangkan konektor di mobile */
  .timeline-connector {
    display: none !important;
  }
  /* Spasi kiri untuk garis & titik */
  .experience-card {
    margin-left: 0;
  }
}
</style>
