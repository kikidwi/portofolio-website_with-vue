import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/views/HomePage.vue";
import ExperiencePage from "@/views/ExperiencePage.vue";
import ProjectsPage from "@/views/ProjectPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/experience", name: "experience", component: ExperiencePage },
  { path: "/projects", name: "projects", component: ProjectsPage },
  { path: "/contact", name: "contact", component: ContactPage },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
