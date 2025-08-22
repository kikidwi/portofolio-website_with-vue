<template>
  <!-- Floating Social Media Buttons (pojok kanan bawah, popup ke atas) -->
  <div class="fixed bottom-[100px] right-6 z-50">
    <div class="relative">
      <!-- Social Media Buttons (muncul di atas tombol utama) -->
      <div
        class="absolute bottom-full right-2 mb-3 flex flex-col items-center space-y-3 transition-all duration-500 transform"
        :class="
          isExpanded
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        "
      >
        <a
          v-for="(social, index) in socialLinks"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          class="group relative bg-black-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full p-3 hover:bg-gray-800/80 hover:shadow-lg hover:border-gray-500/50 transition-all duration-300 transform hover:scale-110"
          :class="[social.color, { 'animate-slide-in': isExpanded }]"
          :style="{ animationDelay: isExpanded ? `${index * 0.08}s` : '0s' }"
          target="_blank"
          rel="noopener"
        >
          <!-- Facebook Icon -->
          <svg
            v-if="social.name === 'facebook'"
            class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
          </svg>

          <!-- Instagram Icon -->
          <svg
            v-else-if="social.name === 'instagram'"
            class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 8.001a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm6.406-1.676a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
            />
          </svg>

          <!-- Twitter/X Icon -->
          <svg
            v-else-if="social.name === 'twitter'"
            class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            />
          </svg>

          <!-- YouTube Icon -->
          <svg
            v-else-if="social.name === 'youtube'"
            class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            />
          </svg>

          <!-- GitHub Icon -->
          <svg
            v-else-if="social.name === 'github'"
            class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.765 23.799 24.199 19.302 24.199 14c0-6.627-5.373-12-12.199-12z"
            />
          </svg>

          <!-- Tooltip -->
          <div
            class="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-sm"
          >
            {{ social.label }}
          </div>
        </a>
      </div>

      <!-- Main Toggle Button -->
      <button
        @click="toggleExpanded"
        :aria-expanded="isExpanded"
        class="group relative bg-black-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full p-4 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-purple-500/30 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110"
      >
        <div
          class="w-6 h-6 flex items-center justify-center transition-transform duration-300"
          :class="{ 'rotate-45': isExpanded }"
        >
          <div
            class="w-1 h-6 bg-gray-400 group-hover:bg-white absolute transition-colors duration-300"
          ></div>
          <div
            class="w-6 h-1 bg-gray-400 group-hover:bg-white absolute transition-colors duration-300"
          ></div>
        </div>
      </button>
    </div>
  </div>

  <!-- Scroll to Top Button (selalu muncul) -->
  <button
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-50 bg-black-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full p-4 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 opacity-100 translate-y-0"
    aria-label="Scroll to top"
  >
    <svg
      class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref } from "vue";

const isExpanded = ref(false);
const socialLinks = [
  {
    name: "facebook",
    label: "Facebook",
    href: "https://facebook.com/",
    color: "text-blue-500",
  },
  {
    name: "instagram",
    label: "Instagram",
    href: "https://instagram.com/",
    color: "text-pink-500",
  },
  {
    name: "twitter",
    label: "Twitter",
    href: "https://twitter.com/",
    color: "text-blue-400",
  },
  {
    name: "youtube",
    label: "YouTube",
    href: "https://youtube.com/",
    color: "text-red-500",
  },
  {
    name: "github",
    label: "GitHub",
    href: "https://github.com/",
    color: "text-gray-500",
  },
];

function toggleExpanded() {
  isExpanded.value = !isExpanded.value;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>
