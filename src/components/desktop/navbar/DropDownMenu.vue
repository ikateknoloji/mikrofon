<template>
  <div class="relative" ref="dropdownRef">
    <span
      @click.stop="toggleDropdown"
      class="py-4 px-2 text-gray-800 font-medium hover:text-purple-700 transition duration-300 flex items-center cursor-pointer"
    >
      Ürünlerimiz
      <svg class="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>

    <div
      v-if="showDropdown"
      class="absolute top-16 left-0 bg-white shadow-md rounded-b-md min-w-[700px] z-10 px-12 py-10"
    >
      <div class="grid grid-cols-2 gap-4">
        <div>
          <router-link
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            @mouseover="setPreviewImage(item.preview)"
            @mouseleave="resetPreviewImage"
            class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition border border-gray-100 mb-2"
          >
            <img :src="item.img" alt="" class="w-14 h-14 object-cover rounded-md mr-3 border border-gray-100" />
            <div>
              <span class="text-gray-800 font-medium">{{ item.label }}</span>
              <p class="text-xs text-gray-500">{{ item.description }}</p>
            </div>
          </router-link>
        </div>
        <div class="h-fit">
          <img :src="previewImage" alt="" class="w-full object-cover rounded-md border border-gray-100" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showDropdown = ref(false)
const dropdownRef = ref(null)
const previewImage = ref('/previews/mic.png')

const items = [
  {
    label: 'Mikrofon Sünger',
    description: 'Ses izolasyonu için idealdir',
    to: '/urunler/mikrofon-sunger',
    img: '/category/mic.png',
    preview: '/previews/mic.png'
  },
  {
    label: 'Kamera Süngeri',
    description: 'Kamera mikrofonları için',
    to: '/urunler/kamera-sungeri',
    img: '/category/cam-mic.png',
    preview: '/previews/cam-mic.png'
  },
  {
    label: 'Reklam Küpü',
    description: 'Marka görünürlüğü için',
    to: '/urunler/reklam-kupu',
    img: '/category/ad.png',
    preview: '/previews/ad.png'
  }
]

const setPreviewImage = (image) => {
  previewImage.value = image
}

const resetPreviewImage = () => {
  previewImage.value = '/previews/mic.png' // Varsayılan görsel
}

const toggleDropdown = (event) => {
  event.stopPropagation()
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
