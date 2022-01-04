import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from './router';
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
  .use(router)
  .mount("#app");
