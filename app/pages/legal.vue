<script setup lang="ts"></script>
<template>
  <div class="">
    <h1 class="font-['DM_Serif_Display'] text-6xl text-center">Spinel</h1>
    <main class="">
      <h2 class="font-['DM_Serif_Display'] text-3xl">Hosting</h2>
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
      <h2 class="font-['DM_Serif_Display'] text-3xl mt-4">Chocolatey</h2>
      <p class="font-dm">
        <a href="https://docs.chocolatey.org/en-us/information/legal"
          >https://docs.chocolatey.org/en-us/information/legal</a
        >
      </p>
      <div class="flex justify-center">
        <NuxtLink
          to="/"
          tag="button"
          class="my-5 bg-yellow-500 rounded-2xl px-6 py-2 font-bold text-xl shadow-lg group hover:outline hover:outline-4 hover:outline-red-200 hover:bg-gradient-to-br hover: from-fuchsia-600 hover:to-orange-600 transition-all ease-in duration-75"
        >
          HOME
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
