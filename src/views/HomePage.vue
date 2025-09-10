<template>
  <main class="min-h-screen bg-[#0a0a0a] text-[#e8e8ea]">
    <TargetCursor :spin-duration="2" :hide-default-cursor="true" />
    <!-- HERO -->
    <section class="mx-auto mt-[-10px] relative" ref="heroRoot">
      <div class="w-full h-screen min-h-[600px] relative overflow-hidden">
        <!-- Threads sebagai background (mount hanya saat terlihat & tidak reduce motion) -->
        <div class="absolute inset-0 w-full h-full" v-if="enableFancyFX && heroInView">
          <Threads
            :color="[1, 1, 1]"
            :amplitude="1.2"
            :distance="0.4"
            :enableMouseInteraction="false"
            class="w-full h-full"
          />
        </div>

        <!-- Konten di atas background -->
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8"
        >
          <BlurText
            :text="profile.name"
            :delay="100"
            class-name="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-extrabold mb-6 tracking-tight leading-tight"
            animate-by="letters"
            direction="top"
            :threshold="0.1"
            root-margin="0px"
            :step-duration="0.35"
            v-once
          />

          <div class="flex justify-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
            <TrueFocus
              sentence="Analytical Dedicated Adaptive"
              class-name="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-400 tracking-wide text-center"
              :manualMode="true"
              :blurAmount="2"
              borderColor="#4a4ac0"
              :animationDuration="1"
              :pauseBetweenAnimations="1"
            />
          </div>
        </div>

        <!-- TargetCursor (non-essential), render hanya jika efek diizinkan -->
        <TargetCursor
          v-if="enableFancyFX && heroInView"
          :spin-duration="2"
          :hide-default-cursor="true"
        />
      </div>
    </section>

    <!-- ABOUT ME -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        <!-- Content -->
        <div class="flex-1 order-2 lg:order-1">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white">About Me</h2>

          <div class="space-y-4 text-gray-300 leading-relaxed">
            <p class="text-base sm:text-lg">
              I'm a passionate web developer who loves creating digital experiences that matter.
              With a keen eye for design and a strong technical foundation, I specialize in building
              modern, responsive web applications that users love to interact with.
            </p>
            <p class="text-sm sm:text-base">
              My journey in web development spans both frontend and backend technologies. I enjoy
              solving complex problems, optimizing performance, and staying up-to-date with the
              latest industry trends. Whether it's crafting pixel-perfect interfaces or architecting
              scalable systems, I bring dedication and creativity to every project.
            </p>

            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 pt-4 text-white">
              What I Do
            </h2>
            <div class="flex flex-wrap gap-2 sm:gap-3 mt-4">
              <span
                class="cursor-target px-3 sm:px-4 py-2 rounded-lg bg-[#242528] text-[#e8e8ea] text-xs sm:text-sm font-medium border border-[#3a3a3a] hover:border-[#5c7cfa] transition-colors shadow-lg hover:shadow-[#5c7cfa]/30"
              >
                Web Development
              </span>
              <span
                class="cursor-target px-3 sm:px-4 py-2 rounded-lg bg-[#242528] text-[#e8e8ea] text-xs sm:text-sm font-medium border border-[#3a3a3a] hover:border-[#5c7cfa] transition-colors shadow-lg hover:shadow-[#5c7cfa]/30"
              >
                Android Development
              </span>
            </div>
          </div>

          <!-- Actions: SELALU SEBARIS -->
          <div class="mt-8">
            <div class="flex items-center gap-2 sm:gap-3 md:gap-4 flex-nowrap">
              <!-- Download Resume Button -->
              <button
                @click="downloadResume"
                class="cursor-target group inline-flex items-center gap-2 sm:gap-3 px-3 py-2 text-sm sm:px-5 sm:py-3 sm:text-base bg-gradient-to-b from-[#4c63d2]/30 to-[#5c7cfa]/40 hover:from-[#4c63d2]/50 hover:to-[#5c7cfa]/40 text-white rounded-lg font-medium backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-[#5c7cfa]/30 whitespace-nowrap shrink-0"
              >
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:animate-bounce transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </button>

              <!-- Social Media Icons -->
              <div class="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
                <!-- GitHub -->
                <a
                  href="https://github.com/kikidwi"
                  target="_blank"
                  class="cursor-target group w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#242528] border border-[#3a3a3a] flex items-center justify-center transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-white/25 hover:bg-[#333]"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>

                <!-- Instagram -->
                <a
                  href="https://www.instagram.com/kikii.dwp/"
                  target="_blank"
                  class="cursor-target group w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#242528] border border-[#3a3a3a] flex items-center justify-center transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-pink-500/25 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162z"
                    />
                  </svg>
                </a>

                <!-- LinkedIn -->
                <a
                  href="https://www.linkedin.com/in/kikidwi/"
                  target="_blank"
                  class="cursor-target group w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-[#242528] border border-[#3a3a3a] flex items-center justify-center transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 hover:bg-[#0077b5]"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Profile Card: SELALU MUNCUL DI MOBILE -->
        <div
          class="order-1 lg:order-2 w-full max-w-sm mx-auto lg:mx-0 flex-shrink-0 lg:w-[360px] lg:sticky lg:top-24 md:w-[200px]"
        >
          <ProfileCard
            name="Kiki Dwi Prasetyo"
            title="Web Developer"
            handle="kikii.dwp"
            status=""
            contact-text="Contact Me"
            avatar-url="/src/assets/person.png"
            icon-url="/src/assets/bgPerson.png"
            grain-url="/assets/grain.webp"
            :show-user-info="true"
            :show-behind-gradient="false"
            :enable-tilt="true"
          />
        </div>
      </div>
    </section>

    <hr class="max-w-6xl mx-auto h-px bg-[#242528] border-0 my-8" />
    <!-- SKILLS (styled like the screenshot) -->
    <section id="skills" class="relative max-w-6xl mx-auto px-6 py-16">
      <!-- headline -->
      <p class="text-center text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300">
        These are the
        <span class="underline decoration-[#8b7bff]/30 underline-offset-4 text-[#b5aaff]">
          skills & tools
        </span>
        I use to design and build modern, accessible digital experiences
      </p>

      <!-- tabs -->
      <div class="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          v-for="t in skillTabs"
          :key="t"
          class="px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 bg-[#14151a] backdrop-blur border-white/10 text-gray-300 hover:border-[#5c7cfa]/50 hover:text-white"
          :class="t === activeTab ? 'ring-2 ring-[#5c7cfa]/40 text-white' : 'ring-0'"
          @click="activeTab = t"
        >
          {{ t }}
        </button>
      </div>

      <!-- icon chips -->
      <ul class="mt-10 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        <li v-for="sk in filteredSkills" :key="sk.name" class="group text-center w-16">
          <!-- chip bundar -->
          <div
            class="cursor-target w-14 h-14 rounded-full bg-[#1a1b20] border border-white/10 flex items-center justify-center mx-auto shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_rgba(0,0,0,0.35)] ring-0 group-hover:ring-4 ring-[#5c7cfa]/25 transition-all duration-300"
          >
            <img :src="sk.icon" :alt="sk.name" class="w-7 h-7 object-contain" loading="lazy" />
          </div>
          <!-- label -->
          <span class="mt-2 block text-xs text-gray-400 group-hover:text-white transition-colors">
            {{ sk.name }}
          </span>
        </li>
      </ul>

      <!-- subtle bottom glow -->
      <div
        class="pointer-events-none absolute inset-x-0 -bottom-10 h-16 blur-2xl opacity-40 bg-[radial-gradient(50%_60%_at_50%_0%,#5c7cfa33_0%,transparent_70%)]"
      />
    </section>

    <section class="max-w-6xl mx-auto px-6 py-16">
      <div class="text-center mb-16">
        <h3
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Professional Experience
        </h3>
        <p class="text-gray-400 text-lg">My journey through the world of technology</p>
      </div>

      <div class="relative">
        <!-- Garis: kiri (mobile), center (desktop 1024px+) -->
        <div
          class="absolute top-0 bottom-0 left-4 min-[1024px]:left-1/2 w-px bg-gradient-to-b from-[#5c7cfa] via-[#4c63d2] to-[#5c7cfa]"
          aria-hidden="true"
        ></div>

        <div class="space-y-10">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative pl-14 min-[1024px]:pl-0"
            :style="{ animationDelay: `${0.2 + index * 0.2}s` }"
          >
            <!-- Titik: selalu center terhadap garis -->
            <div
              class="absolute top-1/2 -translate-y-1/2 left-4 -translate-x-1/2 min-[1024px]:left-1/2 z-10"
              aria-hidden="true"
            >
              <div
                class="w-10 h-10 min-[1024px]:w-16 min-[1024px]:h-16 rounded-full bg-[#5c7cfa] border-4 border-[#0f0f10] flex items-center justify-center shadow-lg"
              >
                <div class="w-2 h-2 min-[1024px]:w-3 min-[1024px]:h-3 rounded-full bg-white"></div>
              </div>
            </div>

            <!-- Baris konten -->
            <div class="flex items-stretch min-[1024px]:items-center min-[1024px]:justify-between">
              <!-- Kartu kiri (even) -->
              <div v-if="index % 2 === 0" class="w-full min-[1024px]:w-5/12 min-[1024px]:pr-8">
                <div
                  class="bg-[#0f0f10]/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 glow-effect hover:border-[#5c7cfa]/30 hover:bg-[#242528] transition-all duration-300 shadow-lg hover:shadow-[#5c7cfa]/10"
                >
                  <div class="text-left">
                    <div class="flex justify-between items-start mb-2">
                      <h4 class="text-xl font-bold text-[#e8e8ea]">{{ exp.role }}</h4>
                      <span class="text-sm text-[#a6adbb] font-mono pt-1">{{ exp.period }}</span>
                    </div>
                    <div class="text-sm text-[#e8e8ea] mb-4">
                      {{ exp.company }} • {{ exp.location }}
                    </div>
                    <ul class="space-y-2 mb-4 text-left">
                      <li
                        v-for="bullet in exp.bullets"
                        :key="bullet"
                        class="text-[#a6adbb] leading-relaxed pl-4 relative"
                      >
                        <span
                          class="absolute left-0 top-2 w-1.5 h-1.5 bg-[#5c7cfa] rounded-full"
                        ></span>
                        {{ bullet }}
                      </li>
                    </ul>
                    <div class="flex flex-wrap gap-2 justify-start">
                      <span
                        v-for="tech in exp.stack"
                        :key="tech"
                        class="text-xs px-3 py-1.5 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Spacer kiri untuk odd (desktop only) -->
              <div v-else class="hidden min-[1024px]:block min-[1024px]:w-5/12"></div>

              <!-- Kartu kanan (odd) -->
              <div v-if="index % 2 === 1" class="w-full min-[1024px]:w-5/12 min-[1024px]:pl-8">
                <div
                  class="bg-[#0f0f10]/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 glow-effect hover:border-[#5c7cfa]/30 hover:bg-[#242528] transition-all duration-300 shadow-lg hover:shadow-[#5c7cfa]/10"
                >
                  <div class="flex justify-between items-start mb-2">
                    <h4 class="text-xl font-bold text-[#e8e8ea]">{{ exp.role }}</h4>
                    <span class="text-sm text-[#a6adbb] font-mono">{{ exp.period }}</span>
                  </div>
                  <div class="text-sm text-[#e8e8ea] mb-4">
                    {{ exp.company }} • {{ exp.location }}
                  </div>
                  <ul class="space-y-2 mb-4">
                    <li
                      v-for="bullet in exp.bullets"
                      :key="bullet"
                      class="text-[#a6adbb] leading-relaxed pl-4 relative"
                    >
                      <span
                        class="absolute left-0 top-2 w-1.5 h-1.5 bg-[#5c7cfa] rounded-full"
                      ></span>
                      {{ bullet }}
                    </li>
                  </ul>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in exp.stack"
                      :key="tech"
                      class="text-xs px-3 py-1.5 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Spacer kanan untuk even (desktop only) -->
              <div v-else class="hidden min-[1024px]:block min-[1024px]:w-5/12"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center mt-10">
        <p class="text-sm text-gray-400">Ready for the next challenge</p>
      </div>

      <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-[#5c7cfa]/5 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#4c63d2]/5 rounded-full blur-3xl"
        ></div>
      </div>
    </section>

    <!-- PROJECTS SECTION IMPROVED - Vue.js Version -->
    <section id="projects" class="isolate relative max-w-6xl mx-auto px-6 py-16" ref="projectsRoot">
      <!-- Header Card with Project Name & CardSwap -->
      <div class="mb-12">
        <!-- Satu CARD membungkus judul (kiri) + CardSwap (kanan) -->
        <div
          class="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
        >
          <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
            <!-- Kiri: Section Title & Deskripsi -->
            <div class="flex-1 text-left p-10">
              <h3
                class="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight"
              >
                My Projects
              </h3>
              <p class="text-lg text-gray-400 mb-6 leading-relaxed max-w-lg">
                A collection of carefully crafted digital experiences, showcasing modern web
                technologies and creative solutions.
              </p>
            </div>

            <!-- Kanan: CardSwap (tetap DI DALAM card) -->
            <div
              class="hidden min-[1024px]:block w-auto flex-shrink-0 relative overflow-hidden p-6"
            >
              <!-- Fix size agar stabil meski CardSwap belum dimount (hindari CLS) -->
              <div
                class="relative z-10 w-96 h-72 md:w-[30rem] md:h-[22rem] flex items-center justify-center overflow-hidden transform-gpu"
              >
                <!-- Mount CardSwap hanya saat terlihat & efek diizinkan -->
                <CardSwap
                  v-if="projectsInView && enableFancyFX"
                  class="relative overflow-visible"
                  :card-distance="20"
                  :vertical-distance="30"
                  :delay="7000"
                  :skew-amount="6"
                  easing="elastic"
                  :pause-on-hover="true"
                >
                  <template #card-0>
                    <div
                      class="border-b border-white/10 bg-gradient-to-t from-[#222] to-[#0b0b0b] rounded-xl"
                    >
                      <div class="p-4 md:p-5">
                        <div class="flex items-center gap-3 mb-3">
                          <div
                            class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                          >
                            <svg
                              class="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              />
                            </svg>
                          </div>
                          <span class="text-white font-semibold">Interactive</span>
                        </div>
                        <p class="text-white/80 text-sm">Smooth animations and interactions</p>
                      </div>
                    </div>
                  </template>

                  <template #card-1>
                    <div
                      class="border-b border-white/10 bg-gradient-to-t from-[#222] to-[#0b0b0b] rounded-xl"
                    >
                      <div class="p-4 md:p-5">
                        <div class="flex items-center gap-3 mb-3">
                          <div
                            class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                          >
                            <svg
                              class="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <span class="text-white font-semibold">Responsive</span>
                        </div>
                        <p class="text-white/80 text-sm">Perfect on all devices</p>
                      </div>
                    </div>
                  </template>

                  <template #card-2>
                    <div
                      class="border-b border-white/10 bg-gradient-to-t from-[#222] to-[#0b0b0b] rounded-xl"
                    >
                      <div class="p-4 md:p-5">
                        <div class="flex items-center gap-3 mb-3">
                          <div
                            class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                          >
                            <svg
                              class="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <span class="text-white font-semibold">Optimized</span>
                        </div>
                        <p class="text-white/80 text-sm">High performance solutions</p>
                      </div>
                    </div>
                  </template>
                </CardSwap>

                <!-- Placeholder saat CardSwap belum dimount (tetap jaga ruang di kanan) -->
                <div
                  v-else
                  class="w-full h-full rounded-xl border border-white/10 bg-gradient-to-t from-[#151515] to-[#0b0b0b]"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="mb-12 flex items-center justify-center gap-4">
        <div
          class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
        ></div>
        <div class="flex items-center gap-3">
          <span
            class="text-xs px-3 py-1.5 rounded-full border border-slate-600/50 text-slate-400 bg-slate-800/50"
          >
            Portfolio
          </span>
        </div>
        <div
          class="flex-1 h-px bg-gradient-to-l from-transparent via-slate-700 to-transparent"
        ></div>
      </div>

      <!-- Projects Grid (batas 4) -->
      <div class="grid gap-6 md:grid-cols-2" v-memo="[showAll]">
        <div
          v-for="(project, idx) in visibleProjects"
          :key="project.id"
          class="cursor-target group bg-gradient-to-br from-[#1a1b20] to-[#0f0f10] border border-[#242528] rounded-xl overflow-hidden hover:border-[#5c7cfa]/50 hover:shadow-lg hover:shadow-[#5c7cfa]/20 transition-all duration-300"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="project.thumb"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
              loading="lazy"
              decoding="async"
              :fetchpriority="idx < 2 ? 'high' : 'low'"
            />
          </div>
          <div class="p-6">
            <h4 class="text-lg font-bold mb-2 group-hover:text-[#5c7cfa] transition-colors">
              {{ project.title }}
            </h4>
            <p class="text-slate-400 text-sm mb-4">{{ project.subtitle }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2.5 py-1 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Actions -->
            <div class="mt-4 flex flex-wrap gap-3">
              <button
                @click="openProjectDetail(project)"
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
                :href="project.repo || profile.github"
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
                v-if="project.demo"
                :href="project.demo"
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

      <!-- View All / View Less -->
      <div v-if="projects.length > 4" class="mt-8 flex justify-center">
        <button
          @click="showAll = !showAll"
          class="cursor-target inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#3a3a3a] text-white bg-[#17181a] hover:bg-[#1f2023] hover:border-[#5c7cfa]/60 transition"
        >
          <span v-text="showAll ? 'View Less' : 'View All Projects'"></span>
        </button>
      </div>

      <!-- Project Detail Modal -->
      <div
        v-if="selectedProject"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click="closeProjectDetail"
      >
        <div
          class="relative max-w-4xl w-full max-h-[88vh] bg-[#0f0f10] border border-slate-700/50 rounded-xl overflow-hidden mt-[80px]"
          @click.stop
        >
          <!-- Close Button -->
          <button
            @click="closeProjectDetail"
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
            <!-- Hero Image -->
            <div class="aspect-video overflow-hidden">
              <img
                :src="selectedProject.thumb"
                :alt="selectedProject.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content -->
            <div class="p-6 sm:p-8">
              <!-- Header -->
              <div class="mb-6">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-2xl sm:text-3xl font-bold text-white mb-2">
                      {{ selectedProject.title }}
                    </h3>
                    <p class="text-slate-400">{{ selectedProject.subtitle }}</p>
                  </div>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tag in selectedProject.tags"
                    :key="tag"
                    class="text-xs px-3 py-1.5 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-white mb-3">Project Overview</h4>
                <p class="text-slate-300 leading-relaxed">
                  {{ selectedProject.description }}
                </p>
              </div>

              <!-- Features -->
              <div v-if="selectedProject.features && selectedProject.features.length" class="mb-6">
                <h4 class="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul class="space-y-2">
                  <li
                    v-for="feature in selectedProject.features"
                    :key="feature"
                    class="flex items-start gap-3 text-slate-300"
                  >
                    <div class="w-1.5 h-1.5 bg-[#5c7cfa] rounded-full mt-2 shrink-0"></div>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Tech Stack -->
              <div
                v-if="selectedProject.techStack && selectedProject.techStack.length"
                class="mb-8"
              >
                <h4 class="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in selectedProject.techStack"
                    :key="tech"
                    class="px-3 py-1.5 text-sm rounded-lg border border-slate-600/50 text-slate-300 bg-slate-800/50"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex flex-wrap gap-3">
                <a
                  :href="selectedProject.repo || profile.github"
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
                  v-if="selectedProject.demo"
                  :href="selectedProject.demo"
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

      <!-- Decorative background elements -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-[#5c7cfa]/5 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#4c63d2]/5 rounded-full blur-3xl"
        ></div>
      </div>
    </section>

    <!-- CONTACT (compact mobile) -->
    <section id="contact" class="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 overflow-x-hidden">
      <header class="mb-5 sm:mb-6">
        <h3 class="text-2xl sm:text-3xl min-[1024px]:text-4xl font-bold leading-tight">Contact</h3>
        <p class="text-slate-400 mt-1 text-sm sm:text-base">
          Have a project in mind? Let’s build something great together.
        </p>
      </header>

      <!-- 1 kolom → 2 kolom di ≥1024px -->
      <div class="grid gap-4 sm:gap-6 min-[1024px]:grid-cols-2">
        <!-- Left: Form Card -->
        <form
          @submit.prevent="handleSubmit"
          class="rounded-2xl bg-slate-800/40 border border-slate-700/50 p-4 sm:p-6 min-[1024px]:p-7"
          novalidate
        >
          <!-- 2 kolom mulai ≥640px -->
          <div class="grid gap-3 sm:gap-4 min-[640px]:grid-cols-2">
            <!-- Name -->
            <div>
              <label class="block text-xs sm:text-sm mb-1.5 text-slate-300">Name</label>
              <input
                v-model.trim="form.name"
                type="text"
                placeholder="Your name"
                class="w-full rounded-xl bg-[#16181c] border border-slate-700/60 focus:border-indigo-400/70 focus:ring-0 px-3 py-2.5 text-[14px] outline-none"
                required
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-xs sm:text-sm mb-1.5 text-slate-300">Email</label>
              <input
                v-model.trim="form.email"
                type="email"
                placeholder="you@email.com"
                class="w-full rounded-xl bg-[#16181c] border border-slate-700/60 focus:border-indigo-400/70 focus:ring-0 px-3 py-2.5 text-[14px] outline-none"
                required
              />
            </div>
          </div>

          <!-- Subject -->
          <div class="mt-3 sm:mt-4">
            <label class="block text-xs sm:text-sm mb-1.5 text-slate-300">Subject</label>
            <input
              v-model.trim="form.subject"
              type="text"
              placeholder="Project inquiry, collaboration, etc."
              class="w-full rounded-xl bg-[#16181c] border border-slate-700/60 focus:border-indigo-400/70 focus:ring-0 px-3 py-2.5 text-[14px] outline-none"
              required
            />
          </div>

          <!-- Message -->
          <div class="mt-3 sm:mt-4">
            <label class="block text-xs sm:text-sm mb-1.5 text-slate-300">Message</label>
            <textarea
              v-model.trim="form.message"
              rows="6"
              placeholder="Tell me about your goals, timeline, and budget (if known)."
              class="w-full rounded-xl bg-[#16181c] border border-slate-700/60 focus:border-indigo-400/70 focus:ring-0 px-3 py-2.5 text-[14px] outline-none resize-y"
              required
            ></textarea>
          </div>

          <!-- Actions: full width di HP, auto di ≥420px -->
          <div class="mt-5 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3">
            <button
              type="submit"
              :disabled="sending"
              class="w-full min-[420px]:w-auto px-4 py-2.5 text-sm rounded-xl font-medium bg-indigo-500/20 border border-indigo-400 text-indigo-200 hover:bg-indigo-500/30 hover:text-white transition disabled:opacity-60"
            >
              {{ sending ? "Sending..." : "Send Message" }}
            </button>

            <button
              type="button"
              @click="emailDirect"
              class="w-full min-[420px]:w-auto px-4 py-2.5 text-sm rounded-xl font-medium bg-slate-800/60 border border-slate-600/60 text-slate-300 hover:bg-slate-700/70 hover:text-white transition"
            >
              Email me directly
            </button>
          </div>
        </form>

        <!-- Right: Info column -->
        <div class="space-y-4 sm:space-y-6 min-[1024px]:sticky min-[1024px]:top-24 h-max">
          <!-- Contact & Availability -->
          <div
            class="rounded-2xl bg-slate-800/40 border border-slate-700/50 p-4 sm:p-6 min-[1024px]:p-7"
          >
            <h4 class="text-base sm:text-lg font-bold mb-4 sm:mb-5">Contact & Availability</h4>

            <!-- Email row -->
            <div
              class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-700/50"
            >
              <div
                class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-700/60 flex items-center justify-center"
              >
                ✉️
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-xs sm:text-sm text-slate-400">Email</div>
                <a
                  :href="`mailto:${profile.email}`"
                  class="font-medium underline decoration-dotted break-words break-all"
                >
                  {{ profile.email }}
                </a>
              </div>
              <button
                type="button"
                @click="copyEmail"
                class="text-[11px] px-2.5 py-1.5 rounded-lg border border-slate-600/60 hover:border-indigo-400 hover:text-indigo-300 transition shrink-0"
              >
                Copy
              </button>
            </div>

            <!-- Location row -->
            <div
              class="flex items-center gap-3 p-3 mt-3 rounded-xl bg-slate-900/50 border border-slate-700/50"
            >
              <div
                class="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-700/60 flex items-center justify-center"
              >
                📍
              </div>
              <div>
                <div class="text-xs sm:text-sm text-slate-400">Location</div>
                <div class="font-medium text-sm sm:text-base">{{ profile.location }}</div>
              </div>
            </div>

            <p class="text-slate-400 text-xs sm:text-sm mt-3 sm:mt-4">
              Typically replies within 1–2 business days.
            </p>

            <!-- Quick links -->
            <div class="mt-3 sm:mt-4 flex flex-wrap gap-2.5 sm:gap-3">
              <a
                :href="profile.linkedin"
                target="_blank"
                rel="noopener"
                class="px-2.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-900/50 border border-slate-700/60 hover:border-indigo-400 hover:text-indigo-300 transition"
                >LinkedIn</a
              >
              <a
                :href="profile.github"
                target="_blank"
                rel="noopener"
                class="px-2.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-900/50 border border-slate-700/60 hover:border-indigo-400 hover:text-indigo-300 transition"
                >GitHub</a
              >
              <a
                :href="profile.website"
                target="_blank"
                rel="noopener"
                class="px-2.5 py-2 text-xs sm:text-sm rounded-lg bg-slate-900/50 border border-slate-700/60 hover:border-indigo-400 hover:text-indigo-300 transition break-words break-all"
                >{{ cleanUrl(profile.website) }}</a
              >
            </div>
          </div>

          <!-- Project Fit -->
          <div
            class="rounded-2xl bg-slate-800/40 border border-slate-700/50 p-4 sm:p-6 min-[1024px]:p-7"
          >
            <h4 class="text-base sm:text-lg font-bold mb-2">Project Fit</h4>
            <p class="text-slate-400 text-sm">
              I can help with modern web apps, WordPress, and APIs. Share your goals, scope, and
              timeline for an accurate estimate.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SUPPORT / FOLLOW -->
    <section class="max-w-6xl mx-auto px-6 py-8">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h4 class="font-bold mb-2">Contact and Support</h4>
          <p class="text-slate-400 mb-2">For work inquiries & collaboration</p>
          <p class="text-slate-400">
            Reach me at
            <a
              :href="`mailto:${profile.email}`"
              class="text-indigo-400 border-b border-dashed border-indigo-400/50 hover:border-indigo-400 transition-colors"
            >
              {{ profile.email }}
            </a>
          </p>
        </div>
        <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h4 class="font-bold mb-4">Follow</h4>
          <div class="flex flex-wrap gap-4">
            <a
              :href="profile.github"
              target="_blank"
              rel="noopener"
              class="text-slate-400 border-b border-dashed border-slate-600/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <a
              :href="profile.instagram"
              target="_blank"
              rel="noopener"
              class="text-slate-400 border-b border-dashed border-slate-600/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
            >
              Instagram
            </a>
            <a
              :href="profile.linkedin"
              target="_blank"
              rel="noopener"
              class="text-slate-400 border-b border-dashed border-slate-600/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref, computed, onMounted, onBeforeUnmount, defineAsyncComponent } from "vue";

// === Lazy-load heavy components (kurangi beban initial render) ===
const BlurText = defineAsyncComponent(() => import("@/Animations/BlurText/BlurText.vue"));
const Threads = defineAsyncComponent(() => import("@/Backgrounds/Threads/Threads.vue"));
const TrueFocus = defineAsyncComponent(() => import("@/Animations/TrueFocus/TrueFocus.vue"));
const TargetCursor = defineAsyncComponent(() =>
  import("@/Animations/TargetCursor/TargetCursor.vue")
);
const ProfileCard = defineAsyncComponent(() => import("@/components/ProfileCard/ProfileCard.vue"));
const CardSwap = defineAsyncComponent(() => import("@/components/CardSwap/CardSwap.vue"));

// ===== Utilities =====
const enableFancyFX = ref(true);
onMounted(() => {
  // Matikan efek berat untuk user dengan prefers-reduced-motion
  enableFancyFX.value = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
});

// IntersectionObserver untuk unmount animasi saat offscreen
const heroRoot = ref(null);
const projectsRoot = ref(null);
const heroInView = ref(true);
const projectsInView = ref(false);

let ioHero, ioProjects;
onMounted(() => {
  ioHero = new IntersectionObserver(
    (entries) => (heroInView.value = entries[0]?.isIntersecting ?? true),
    { threshold: 0.2 }
  );
  if (heroRoot.value) ioHero.observe(heroRoot.value);

  ioProjects = new IntersectionObserver(
    (entries) => (projectsInView.value = entries[0]?.isIntersecting ?? false),
    { threshold: 0.15 }
  );
  if (projectsRoot.value) ioProjects.observe(projectsRoot.value);
});
onBeforeUnmount(() => {
  ioHero?.disconnect?.();
  ioProjects?.disconnect?.();
});

// Function to download resume
const downloadResume = () => {
  try {
    const link = document.createElement("a");
    link.href = "/src/assets/resume.pdf";
    link.download = "Kiki-Dwi-Prasetyo-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    window.open("/src/assets/resume.pdf", "_blank");
  }
};

// ===== Profile & Sosmed (disesuaikan) =====
const profile = reactive({
  name: "Kiki Dwi Prasetyo",
  photo:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=480&auto=format&fit=crop",
  location: "Pemalang, Jawa Tengah",
  website: "https://www.kikidwp-portofolio.my.id",
  // phone dihapus dari UI (tidak dipakai)
  email: "kikidprasetyo29@gmail.com",
  linkedin: "https://www.linkedin.com/in/kikidwi/",
  github: "https://github.com/kikidwi",
  instagram: "https://www.instagram.com/kikii.dwp/",
});

const skillTabs = ["Bahasa Pemrograman", "Software"];
const skills = {
  "Bahasa Pemrograman": [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  Software: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Android Studio",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
};
const activeTab = ref("Bahasa Pemrograman");
const filteredSkills = computed(() => skills[activeTab.value]);

// =================== EXPERIENCE ===================
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
    role: "Web Developer (Wordpress) Intern",
    company: "Intelligo ID",
    location: "Remote",
    period: "Apr 2025 – Jul 2025",
    bullets: [
      "Performing website page slicing and mega menu slicing according to the provided Figma design.",
      "Improving website speed through performance optimization and loading time reduction.",
      "Contributing to ensuring consistent website display across various devices.",
    ],
    stack: ["WordPress", "Elementor", "Figma", "SEO", "Google Search Console"],
  },
  {
    id: 3,
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
    id: 4,
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

// =================== PROJECTS ===================
// Tambahkan properti `repo` untuk tombol GitHub.
// Jika belum ada repo spesifik, fallback ke profil GitHub.
// Enhanced projects data with detailed information
const projects = [
  {
    id: 1,
    title: "Company Profile Website Journal1z Adv",
    subtitle: "Web development",
    tags: ["WordPress", "Landing Page", "SEO"],
    thumb: "src/assets/images/projects/web-9.png",
    repo: "https://github.com/kikidwi/journal1z-website",
    demo: "https://journal1z.com",
    description:
      "A comprehensive company profile website for Journal1z Advertising agency, featuring modern design, SEO optimization, and content management capabilities. Built with WordPress and custom theme development to showcase the company's services and portfolio.",
    features: [
      "Responsive design across all devices",
      "SEO optimized for better search rankings",
      "Custom WordPress theme development",
      "Contact form integration",
      "Portfolio showcase section",
      "Blog/News management system",
    ],
    techStack: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "SEO"],
  },
  {
    id: 2,
    title: "Landing Page PT. Semesta Teknologi Terpadu",
    subtitle: "Web development",
    tags: ["WordPress", "Landing Page", "Corporate"],
    thumb: "src/assets/images/projects/web-10.png",
    repo: "https://github.com/kikidwi/semesta-teknologi",
    demo: "https://sttech.com",
    description:
      "Professional corporate landing page for PT. Semesta Teknologi Terpadu, a technology solutions company. Features clean design, service showcase, and lead generation forms optimized for business conversion.",
    features: [
      "Professional corporate design",
      "Service portfolio showcase",
      "Lead generation forms",
      "Performance optimized",
      "Mobile-first approach",
      "Content management system",
    ],
    techStack: ["WordPress", "Elementor", "PHP", "MySQL", "JavaScript"],
  },
  {
    id: 3,
    title: "Landing Page Restaurant Mangankuy",
    subtitle: "Web development",
    tags: ["HTML", "CSS", "JavaScript", "Restaurant"],
    thumb: "src/assets/images/projects/web-11.png",
    repo: "https://github.com/kikidwi/restaurant-mangankuy",
    demo: "https://mangankuy-restaurant.netlify.app",
    description:
      "Modern restaurant landing page with interactive menu, online reservation system, and location integration. Built from scratch using vanilla HTML, CSS, and JavaScript with focus on performance and user experience.",
    features: [
      "Interactive menu display",
      "Online table reservation",
      "Location and contact integration",
      "Image gallery showcase",
      "Responsive design",
      "Fast loading performance",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    id: 4,
    title: "Humic Dashboard Survey",
    subtitle: "Web development",
    tags: ["Dashboard", "Survey", "Data Visualization"],
    thumb: "src/assets/images/projects/web-1.png",
    repo: "https://github.com/kikidwi/humic-survey-dashboard",
    description:
      "Interactive survey dashboard for Research Center of Human Centric Engineering. Features role-based access control, survey management, and real-time data visualization for collecting and analyzing user feedback.",
    features: [
      "Role-based authentication system",
      "Survey creation and management",
      "Real-time data visualization",
      "MySQL database integration",
      "Responsive admin panel",
      "Export data functionality",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Chart.js"],
  },
  {
    id: 5,
    title: "Gary's Florists",
    subtitle: "Web development",
    tags: ["Static Site", "E-commerce", "Florist"],
    thumb: "src/assets/images/projects/web-2.png",
    repo: "https://github.com/kikidwi/garys-florists",
    demo: "https://garys-florists.netlify.app",
    description:
      "Beautiful static website for a florist business featuring product catalog, seasonal arrangements, and contact information. Designed with focus on visual appeal and easy navigation.",
    features: [
      "Product catalog display",
      "Seasonal arrangement showcase",
      "Contact and location info",
      "Image optimization",
      "SEO friendly structure",
      "Fast static site performance",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Static Site"],
  },
  {
    id: 6,
    title: "Ellie's Fashion Blog",
    subtitle: "Web development",
    tags: ["Blog", "Static Site", "Fashion"],
    thumb: "src/assets/images/projects/web-3.png",
    repo: "https://github.com/kikidwi/ellies-fashion-blog",
    demo: "https://ellies-fashion.netlify.app",
    description:
      "Stylish fashion blog website with article management, category filtering, and responsive design. Features clean typography and image-focused layout perfect for fashion content.",
    features: [
      "Article categorization",
      "Responsive image galleries",
      "Clean typography design",
      "Social media integration",
      "Search functionality",
      "Mobile optimized reading",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Static Site Generator"],
  },
];

// Modal state management
const selectedProject = ref(null);

const openProjectDetail = (project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden"; // Prevent background scroll
};

const closeProjectDetail = () => {
  selectedProject.value = null;
  document.body.style.overflow = "auto"; // Restore scroll
};

// Close modal on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === "Escape" && selectedProject.value) {
      closeProjectDetail();
    }
  };
  document.addEventListener("keydown", handleEscape);

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});

// Batasi render awal 4 item + tombol view all
const showAll = ref(false);
const visibleProjects = computed(() => (showAll.value ? projects : projects.slice(0, 4)));

function cleanUrl(u) {
  try {
    const { hostname } = new URL(u);
    return hostname.replace(/^www\./, "");
  } catch {
    return u;
  }
}

// --- Contact form state & helpers ---
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const sending = ref(false);

function emailDirect() {
  // kirim email langsung dengan prefill
  const s = encodeURIComponent(form.subject || "Project inquiry from portfolio");
  const body = encodeURIComponent(
    `Hi Kiki,%0D%0A%0D%0A${form.message || ""}%0D%0A%0D%0A— ${form.name || "Anonymous"} (${
      form.email || "no email"
    })`
  );
  window.location.href = `mailto:${profile.email}?subject=${s}&body=${body}`;
}

async function handleSubmit() {
  // validasi ringan
  if (!form.name || !form.email || !form.subject || !form.message) {
    alert("Please fill in all fields.");
    return;
  }
  // karena belum ada backend, fallback ke mailto
  sending.value = true;
  try {
    emailDirect();
  } finally {
    sending.value = false;
  }
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email);
  } catch {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = profile.email;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}
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
  animation: lineGrow 2s ease-out 0.5s both;
}

.timeline-dot {
  animation: dotPulse 2s infinite;
}

.experience-card.left {
  animation: slideInLeft 0.8s ease-out both;
}

.experience-card.right {
  animation: slideInRight 0.8s ease-out both;
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
  transform: translate(0%, -50%);
  left: 100%;
}

.glow-effect {
  position: relative;
  overflow: hidden;
}

.glow-effect::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #5c7cfa, #4c63d2, #5c7cfa, #4c63d2);
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.glow-effect:hover::before {
  opacity: 0.3;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .experience-card .w-5\/12 {
    width: 100% !important;
    padding: 0 !important;
  }

  .timeline-connector {
    position: absolute !important;
    left: 1rem !important;
    transform: none !important;
  }

  .timeline-connector::before {
    display: none !important;
  }

  .experience-card {
    margin-left: 3rem !important;
  }

  .absolute.left-1\/2 {
    left: 1.75rem !important;
    transform: none !important;
  }

  .experience-card .text-right {
    text-align: left !important;
  }

  .experience-card .justify-end {
    justify-content: flex-start !important;
  }
}
</style>
