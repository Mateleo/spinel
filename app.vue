<script setup lang="ts">
useSeoMeta({
  title: "Spinel",
  twitterTitle: "Spinel",
  ogTitle: "Spinel",
  description: "All your software, without any installer. Beautiful script generator for Chocolatey.",
  ogDescription: "All your software, without any installer. Beautiful script generator for Chocolatey.",
  twitterDescription: "All your software, without any installer. Beautiful script generator for Chocolatey.",
  ogImage: "https://spinel.ovh/img/spinel.jpg",
  twitterImage: "https://spinel.ovh/img/spinel.jpg",
  twitterCard: "summary_large_image",
  themeColor: "#f65e28",
  ogType: "website",
  ogUrl: "https://spinel.4esport.fr",
  msapplicationTileColor: "#F36C28",
  author: "Mateleo",
  ogSiteName: "Spinel",
  twitterSite: "Spinel",
  twitterCreator: "Mateleo",
  mobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "Spinel",
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background: #8a2387; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #f27121, #e94057, #8a2387); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f27121,
    #e94057,
    #8a2387
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: "DM SANS";
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s ease-in;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
