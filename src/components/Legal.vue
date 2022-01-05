<script setup lang="ts">
import Footer from "./Footer.vue";
</script>
<template>
  <div
    class="flex flex-col mx-auto bg-white shadow-2xl bg-opacity-20 backdrop-filter backdrop-blur-3xl rounded-3xl max-w-[95%] xs:max-w-[90%] s:max-w-[85%] p-4 s:p-6"
  >
    <h1 class="font-dmserif text-7xl text-center mb-5">Spinel</h1>
    <div class="font-dm">
      <h2 class="font-dmserif text-3xl">Hosting</h2>
      <p class="font-dm">This website is hosted by Netlify</p>
      <ul class="list-disc list-inside">
        <li>Name : Netlify</li>
        <li>Address : 2325 3rd Street, Suite 296, San Francisco, California 94107</li>
        <li>Website : <a href="https://www.ovhcloud.com/">https://www.ovhcloud.com/</a></li>
        <li>Email : support@netlify.com</li>
      </ul>
      <p class="font-dm">The domain name comes from OVH</p>
      <ul class="list-disc list-inside">
        <li>Name : OVH</li>
        <li>Address : 2 rue Kellermann - 59100 Roubaix - France</li>
        <li>Website : <a href="https://www.ovhcloud.com/">https://www.ovhcloud.com/</a></li>
      </ul>
      <h2 class="font-dmserif text-3xl">Chocolatey</h2>
      <p class="font-dm"><a href="https://docs.chocolatey.org/en-us/information/legal">https://docs.chocolatey.org/en-us/information/legal</a></p>
      <div class="flex justify-center">
        <router-link to="/" tag="button"
          class="my-5 bg-yellow-500 rounded-2xl p-3 font-bold text-xl shadow-lg group hover:outline hover:outline-4 hover:outline-red-200 hover:bg-gradient-to-br hover: from-fuchsia-600 hover:to-orange-600 transition-all ease-in duration-75"
        >
          HOME
        </router-link>
      </div>
    </div>
    <Footer/>
  </div>
</template>