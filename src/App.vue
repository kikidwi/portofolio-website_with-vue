<template>
  <div class="app">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer class="container footer">
      <small>© {{ new Date().getFullYear() }} JOHN WALKER</small>
    </footer>
  </div>
  <FloatingActions />
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import FloatingActions from "@/components/FloatingActions.vue";
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.footer {
  padding: 30px 0 60px;
  color: var(--muted);
  text-align: center;
}
</style>
