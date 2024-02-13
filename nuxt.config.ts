// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/robots", "@nuxtjs/sitemap", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "DM Serif Display": true,
      "DM Sans": true,
    },
  },
});
