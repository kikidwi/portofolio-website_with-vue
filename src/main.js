import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css";
import "./assets/tailwind.css"; // Ensure Tailwind CSS is imported

const app = createApp(App);
app.use(router);
app.mount("#app");
