<template>
  <main class="min-h-screen bg-[#0a0a0a] text-[#e8e8ea]">
    <TargetCursor :spin-duration="2" :hide-default-cursor="true" />
    <!-- HERO -->
    <section class="mx-auto mt-[-30px] relative">
      <div class="w-full h-screen min-h-[600px] relative overflow-hidden">
        <!-- Threads sebagai background -->
        <div class="absolute inset-0 w-full h-full">
          <Threads
            :color="[1, 1, 1]"
            :amplitude="1.5"
            :distance="0.5"
            :enableMouseInteraction="false"
            class="w-full h-full"
          />
        </div>

        <!-- Konten di atas background -->
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8"
        >
          <!-- BlurText dengan ukuran responsif yang lebih baik -->
          <BlurText
            :text="profile.name"
            :delay="100"
            class-name="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-extrabold mb-6 tracking-tight leading-tight"
            animate-by="letters"
            direction="top"
            :threshold="0.1"
            root-margin="0px"
            :step-duration="0.35"
          />

          <!-- TrueFocus dengan spacing yang lebih baik -->
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
      </div>
    </section>

    <!-- ABOUT ME -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
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
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-white pt-4">
              What I Do
            </h2>
            <div class="flex flex-wrap gap-2 sm:gap-3 mt-6">
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

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            <!-- Download Resume Button -->
            <button
              @click="downloadResume"
              class="cursor-target group flex items-center gap-3 px-4 sm:px-6 py-3 bg-gradient-to-b from-[#4c63d2]/30 to-[#5c7cfa]/40 hover:from-[#4c63d2]/50 hover:to-[#5c7cfa]/40 text-white rounded-lg font-medium backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#5c7cfa]/30 w-full sm:w-auto justify-center sm:justify-start"
            >
              <svg
                class="w-5 h-5 transform group-hover:animate-bounce transition-transform"
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
            <div
              class="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start w-full sm:w-auto"
            >
              <!-- GitHub -->
              <a
                href="https://github.com/kikidwi"
                target="_blank"
                class="cursor-target group w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#242528] border border-[#3a3a3a] flex items-center justify-center transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-white/25 hover:bg-[#333]"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors"
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
                class="cursor-target group w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#242528] border border-[#3a3a3a] flex items-center justify-center transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-pink-500/25 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/in/kikidwi/"
                target="_blank"
                class="cursor-target group w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#242528] border border-[#3a3a3a] flex items-center justify-center transition-all duration-300 hover:border-transparent hover:shadow-lg hover:shadow-blue-500/25 hover:bg-[#0077b5]"
              >
                <svg
                  class="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors"
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

        <!-- Profile Card -->
        <div class="hidden xl:block order-1 lg:order-2 flex-shrink-0">
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

    <!-- EXPERIENCE SECTION -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <div class="text-center mb-16">
        <h3
          class="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Professional Experience
        </h3>
        <p class="text-gray-400 text-lg">My journey through the world of technology</p>
      </div>

      <!-- Timeline Container -->
      <div class="relative">
        <!-- Central Timeline Line -->
        <div
          class="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5c7cfa] via-[#4c63d2] to-[#5c7cfa] timeline-line"
        ></div>

        <!-- Experience Items -->
        <div class="space-y-5">
          <!-- Experience Item -->
          <div
            v-for="(exp, index) in experiences"
            :key="exp.id"
            class="relative experience-card"
            :class="index % 2 === 0 ? 'left' : 'right'"
            :style="{ animationDelay: `${0.2 + index * 0.2}s` }"
          >
            <div class="flex items-center justify-between">
              <!-- Card on the left (for even index) -->
              <div v-if="index % 2 === 0" class="w-5/12 pr-8">
                <div
                  class="bg-black-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 glow-effect hover:border-[#5c7cfa]/30 hover:bg-[#242528] transition-all duration-300 shadow-lg hover:shadow-[#5c7cfa]/10"
                >
                  <div class="text-left">
                    <div class="flex justify-between items-start mb-2">
                      <h4 class="text-xl font-bold text-[#e8e8ea]">{{ exp.role }}</h4>
                      <span class="text-sm text-[#a6adbb] font-mono pt-2">{{ exp.period }}</span>
                    </div>
                    <div class="text-sm text-[#e8e8ea] mb-4">
                      {{ exp.company }} • {{ exp.location }}
                    </div>
                    <ul class="space-y-2 mb-4 text-left">
                      <li
                        v-for="bullet in exp.bullets"
                        :key="bullet"
                        class="text-[#a6adbb] leading-relaxed"
                      >
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

              <!-- Empty space on left (for odd index) -->
              <div v-else class="w-5/12"></div>

              <!-- Central Dot -->
              <div class="timeline-connector" :class="index % 2 === 0 ? 'left' : 'right'">
                <div
                  class="w-16 h-16 rounded-full bg-[#5c7cfa] border-4 border-[#0f0f10] flex items-center justify-center shadow-lg timeline-dot relative z-10"
                >
                  <div class="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>

              <!-- Card on the right (for odd index) -->
              <div v-if="index % 2 === 1" class="w-5/12 pl-8">
                <div
                  class="bg-black-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 glow-effect hover:border-[#5c7cfa]/30 hover:bg-[#242528] transition-all duration-300 shadow-lg hover:shadow-[#5c7cfa]/10"
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

              <!-- Empty space on right (for even index) -->
              <div v-else class="w-5/12"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <p>Ready for the next chalenge</p>
      </div>

      <!-- Decorative Elements -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-[#5c7cfa]/5 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#4c63d2]/5 rounded-full blur-3xl"
        ></div>
      </div>
    </section>

    <!-- PROJECTS SECTION IMPROVED - Vue.js Version -->
    <section id="projects" class="isolate relative max-w-6xl mx-auto px-6 py-16">
      <!-- Header Card with Project Name & CardSwap -->
      <div class="mb-12">
        <!-- Main Card Container -->
        <div
          class="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
        >
          <div class="flex flex-col lg:flex-row items-center justify-between gap-10">
            <!-- Left Side - Project Info -->
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

            <!-- Right Side - CardSwap Demo -->
            <div class="flex-shrink-0 relative overflow-visible">
              <!-- CardSwap Container (lebih lebar/tinggi + overflow visible) -->
              <div
                class="relative z-10 w-96 h-72 md:w-[30rem] md:h-[22rem] flex items-center justify-center overflow-hidden transform-gpu"
              >
                <CardSwap
                  class="relative overflow-visible"
                  :card-distance="20"
                  :vertical-distance="30"
                  :delay="5000"
                  :skew-amount="6"
                  easing="elastic"
                  :pause-on-hover="false"
                  @card-click="handleCardClick"
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

      <!-- Projects Grid -->
      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="project in projects"
          :key="project.id"
          @click="openProject(project)"
          class="cursor-target group cursor-pointer bg-gradient-to-br from-[#1a1b20] to-[#0f0f10] border border-[#242528] rounded-xl overflow-hidden hover:border-[#5c7cfa]/50 hover:shadow-lg hover:shadow-[#5c7cfa]/20 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="aspect-video overflow-hidden">
            <img
              :src="project.thumb"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h4 class="text-lg font-bold mb-2 group-hover:text-[#5c7cfa] transition-colors">
              {{ project.title }}
            </h4>
            <p class="text-slate-400 text-sm mb-4">{{ project.subtitle }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2.5 py-1 rounded-full border border-slate-600/50 text-slate-300 bg-slate-700/50"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-32 h-32 bg-[#5c7cfa]/5 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#4c63d2]/5 rounded-full blur-3xl"
        ></div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="max-w-6xl mx-auto px-6 py-8">
      <h3 class="text-2xl font-bold mb-6">Contact</h3>

      <div
        class="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8"
      >
        <div class="grid gap-8 lg:grid-cols-2">
          <div>
            <h4 class="text-xl font-bold mb-2">Let's build something great.</h4>
            <p class="text-slate-400 mb-6">
              Open to freelance & full-time roles. Preferably remote/hybrid.
            </p>
            <div class="flex flex-wrap gap-3">
              <a
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-indigo-400 bg-indigo-400/10 text-indigo-400 hover:bg-indigo-400/20 transition-all duration-200 font-medium"
                :href="`mailto:${profile.email}`"
              >
                Email me
              </a>
              <a
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600/50 bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:border-slate-500 transition-all duration-200"
                :href="profile.linkedin"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600/50 bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:border-slate-500 transition-all duration-200"
                :href="profile.github"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              class="flex items-center gap-3 p-4 rounded-xl border border-slate-600/50 bg-slate-700/30"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-600/50 text-lg"
              >
                📍
              </div>
              <span class="text-sm">{{ profile.location }}</span>
            </div>
            <div
              class="flex items-center gap-3 p-4 rounded-xl border border-slate-600/50 bg-slate-700/30"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-600/50 text-lg"
              >
                🔗
              </div>
              <a
                :href="profile.website"
                target="_blank"
                rel="noopener"
                class="text-sm border-b border-dashed border-slate-600/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
              >
                {{ cleanUrl(profile.website) }}
              </a>
            </div>
            <div
              class="flex items-center gap-3 p-4 rounded-xl border border-slate-600/50 bg-slate-700/30"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-600/50 text-lg"
              >
                📞
              </div>
              <span class="text-sm">{{ profile.phone }}</span>
            </div>
            <div
              class="flex items-center gap-3 p-4 rounded-xl border border-slate-600/50 bg-slate-700/30"
            >
              <div
                class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-600/50 text-lg"
              >
                ✉️
              </div>
              <span class="text-sm">{{ profile.email }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SUPPORT / FOLLOW -->
    <section class="max-w-6xl mx-auto px-6 py-8">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h4 class="font-bold mb-2">Contact and Support</h4>
          <p class="text-slate-400 mb-2">Optimize your dev process — 123d.one</p>
          <p class="text-slate-400">
            Send feedback to
            <a
              href="mailto:support@123d.one"
              class="text-indigo-400 border-b border-dashed border-indigo-400/50 hover:border-indigo-400 transition-colors"
            >
              support@123d.one
            </a>
          </p>
        </div>
        <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h4 class="font-bold mb-4">Follow</h4>
          <div class="flex flex-wrap gap-4">
            <a
              href="#"
              @click.prevent
              class="text-slate-400 border-b border-dashed border-slate-600/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              @click.prevent
              class="text-slate-400 border-b border-dashed border-slate-600/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              @click.prevent
              class="text-slate-400 border-b border-dashed border-slate-600/50 hover:border-indigo-400 hover:text-indigo-400 transition-colors"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import BlurText from "@/Animations/BlurText/BlurText.vue";
import Threads from "@/Backgrounds/Threads/Threads.vue";
import TrueFocus from "@/Animations/TrueFocus/TrueFocus.vue";
import TargetCursor from "@/Animations/TargetCursor/TargetCursor.vue";
import ProfileCard from "@/components/ProfileCard/ProfileCard.vue";
import CardSwap from "@/components/CardSwap/CardSwap.vue";

// Function to download resume
const downloadResume = () => {
  try {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/src/assets/resume.pdf"; // Path to your resume file
    link.download = "Kiki-Dwi-Prasetyo-Resume.pdf"; // Filename when downloaded

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log("Resume download initiated");
  } catch (error) {
    console.error("Error downloading resume:", error);
    // Fallback: open in new tab
    window.open("/src/assets/resume.pdf", "_blank");
  }
};

const profile = reactive({
  name: "Kiki Dwi Prasetyo",
  photo:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=480&auto=format&fit=crop",
  location: "Bandung, Indonesia",
  website: "https://www.123d.one",
  phone: "+62-812-3456-7890",
  email: "hello@123d.one",
  linkedin: "https://www.linkedin.com/in/johnwalker",
  github: "https://github.com/johnwalker",
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

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Journal1z",
    location: "Remote",
    period: "Mar 2024 – Present",
    bullets: [
      "Built landing pages & optimized Core Web Vitals.",
      "Indexed website via Google Search Console & improved SEO.",
    ],
    stack: ["Vue", "WordPress", "Elementor", "SEO"],
  },
  {
    id: 2,
    role: "Full-stack Developer (Contract)",
    company: "PT. Semesta Teknologi Terpadu",
    location: "Jakarta",
    period: "Jan 2023 – Feb 2024",
    bullets: [
      "Developed company profile & e-commerce features.",
      "Integrated payments and optimized admin workflows.",
    ],
    stack: ["Laravel", "MySQL", "Tailwind", "QRIS"],
  },
  {
    id: 3,
    role: "Android & ML (Project)",
    company: "Independent",
    location: "Bandung",
    period: "2022 – 2023",
    bullets: [
      "Built animal sound classifier (TensorFlow Lite).",
      "Implemented on-device inference with Kotlin.",
    ],
    stack: ["Kotlin", "TFLite"],
  },
];

const projects = [
  {
    id: 1,
    title: "Universal UI Kit (Web)",
    subtitle: "The most universal UI kit for Figma",
    tags: ["UX Design", "UI Design", "Motion design", "Art Direction"],
    thumb:
      "https://images.unsplash.com/photo-1559027615-47f13b833b5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Universal Data Visualization",
    subtitle: "Charts and infographics constructor",
    tags: ["Web Design", "Branding", "Motion design"],
    thumb:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Universal Icon Set",
    subtitle: "1900+ high-quality vector icons",
    tags: ["UI Design", "Motion design", "Web Design"],
    thumb:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Universal Project Management",
    subtitle: "Take control of your projects",
    tags: ["UX Design", "UI Design", "Product Design"],
    thumb:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
];

function openProject(p) {
  alert(`Open project: ${p.title}`);
}

function cleanUrl(u) {
  try {
    const { hostname } = new URL(u);
    return hostname.replace(/^www\./, "");
  } catch {
    return u;
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
