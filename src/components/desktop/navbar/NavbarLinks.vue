<template>
<div class="bg-white border-t border-gray-100 shadow-sm">
 <div class="container mx-auto px-4">
  <nav class="flex justify-center space-x-8">
    <router-link to="/kurumsal" class="py-4 px-2 text-gray-800 font-medium hover:text-purple-700 transition duration-300">Kurumsal</router-link>
    <router-link to="/" class="py-4 px-2 text-gray-800 font-medium hover:text-purple-700 transition duration-300">Anasayfa</router-link>
    <DropdownMenu />
    <router-link to="/site-haritasi" class="py-4 px-2 text-gray-800 font-medium hover:text-purple-700 transition duration-300">Site Haritası</router-link>
    <router-link to="/blogs" class="py-4 px-2 text-gray-800 font-medium hover:text-purple-700 transition duration-300">Blogs</router-link>
    <router-link to="/bize-ulasin" class="py-4 px-2 text-gray-800 font-medium hover:text-purple-700 transition duration-300">Bize Ulaşın</router-link>

  </nav>
 </div>
</div>
</template>

<script setup>
import DropdownMenu from './DropDownMenu.vue'
</script>
