// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots", "@nuxtjs/sitemap", "@nuxtjs/google-fonts", "nuxt-icon"],
  googleFonts: {
    families: {
      "DM Serif Display": true,
      "DM Sans": "300..900",
    },
  },
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
