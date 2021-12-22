import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createPinia } from "pinia";
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  transition: "Vue-Toastification__fade",
  maxToasts: 3,
  newestOnTop: true,
};

createApp(App)
  .use(Toast, options)
  .use(createPinia())
  .mount("#app");
