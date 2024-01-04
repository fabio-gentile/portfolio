import { createApp } from "vue";
import router from "@/router/index.js";
import "@/assets/styles/tailwind.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
