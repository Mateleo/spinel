import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts", "@vueuse/nuxt"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  // googleFonts: {
  //   families: {
  //     "DM Serif Display": true,
  //     "DM Sans": "300..900",
  //   },
  // },
  experimental: {
    viewTransition: true,
  },
});