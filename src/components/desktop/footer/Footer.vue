<template>
  <div class="max-w-4xl mx-auto px-4 py-6 font-deca shadow-sm">
    <!-- Logo -->
    <div class="mt-4 flex flex-col items-center justify-center space-y-6 mb-10">
      <router-link to="/" >
        <img src="/marka-logosu.png"
          alt="Hepsi Emlak Logo" class="h-[44px] object-contain" />
      </router-link>
      <p class="text-center font-light text-gray-500 text-md leading-relaxed">
        We invite you to get in touch with us. Our team of digital enthusiasts and tech experts is ready to collaborate and bring your ideas to life.
      </p>
    </div>

    <div class="flex items-center justify-center space-x-4">
      <router-link
        v-for="(item, index) in navLinks"
        :key="index"
        :to="item.to"
        class="py-2 px-4 bg-gray-100 text-gray-600  hover:text-purple-700 transition duration-300 shadow-sm rounded-lg"
      >
        {{ item.label }}
      </router-link>
    </div>
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 pt-10">© 2025 <a href="https://flowbite.com/" class="hover:underline">IKATech™</a>. All Rights Reserved.</span>

  </div>
</template>

<script setup>
const navLinks = [
  { to: "/", label: "Anasayfa" },
  { to: "/kurumsal", label: "Kurumsal" },
  { to: "/site-haritasi", label: "Site Haritası" },
  { to: "/blogs", label: "Blogs" },
  { to: "/bize-ulasin", label: "Bize Ulaşın" },
];
</script>
