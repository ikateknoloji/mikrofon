<template>
  <div class="min-h-screen bg-gray-50 font-lato">
    <!-- Üst Bilgi Alanı -->
    <div class="bg-white py-3 shadow-sm">
      <div class="w-full mx-auto px-16 flex justify-between items-start pb-3">
        <!-- Email -->
        <div class="flex items-end h-[62px]">
          <a class="flex items-center hover:underline text-blue-500" href="mailto:destek@hepsiemlak.com" >
            <svg class="h-5 w-5 mr-2" width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5V17.5C0 18.6935 0.474106 19.8381 1.31802 20.682C2.16193 21.5259 3.30653 22 4.5 22H23.5C24.6935 22 25.8381 21.5259 26.682 20.682C27.5259 19.8381 28 18.6935 28 17.5V5L14.474 12.292C14.3283 12.3704 14.1655 12.4115 14 12.4115C13.8345 12.4115 13.6717 12.3704 13.526 12.292L0 5Z" fill="#367AF2"/>
              <path d="M0 5V17.5C0 18.6935 0.474106 19.8381 1.31802 20.682C2.16193 21.5259 3.30653 22 4.5 22H23.5C24.6935 22 25.8381 21.5259 26.682 20.682C27.5259 19.8381 28 18.6935 28 17.5V5L14.474 12.292C14.3283 12.3704 14.1655 12.4115 14 12.4115C13.8345 12.4115 13.6717 12.3704 13.526 12.292L0 5Z" fill="url(#paint0_linear_153_287)"/>
              <path d="M0 5V17.5C0 18.6935 0.474106 19.8381 1.31802 20.682C2.16193 21.5259 3.30653 22 4.5 22H23.5C24.6935 22 25.8381 21.5259 26.682 20.682C27.5259 19.8381 28 18.6935 28 17.5V5L14.474 12.292C14.3283 12.3704 14.1655 12.4115 14 12.4115C13.8345 12.4115 13.6717 12.3704 13.526 12.292L0 5Z" fill="url(#paint1_linear_153_287)"/>
              <path d="M0 5V17.5C0 18.6935 0.474106 19.8381 1.31802 20.682C2.16193 21.5259 3.30653 22 4.5 22H23.5C24.6935 22 25.8381 21.5259 26.682 20.682C27.5259 19.8381 28 18.6935 28 17.5V5L14.474 12.292C14.3283 12.3704 14.1655 12.4115 14 12.4115C13.8345 12.4115 13.6717 12.3704 13.526 12.292L0 5Z" fill="url(#paint2_linear_153_287)" fill-opacity="0.75"/>
              <path d="M0 5V17.5C0 18.6935 0.474106 19.8381 1.31802 20.682C2.16193 21.5259 3.30653 22 4.5 22H23.5C24.6935 22 25.8381 21.5259 26.682 20.682C27.5259 19.8381 28 18.6935 28 17.5V5L14.474 12.292C14.3283 12.3704 14.1655 12.4115 14 12.4115C13.8345 12.4115 13.6717 12.3704 13.526 12.292L0 5Z" fill="url(#paint3_linear_153_287)" fill-opacity="0.7"/>
              <path d="M4.5 0C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5V5.59L13.526 12.882C13.6717 12.9604 13.8345 13.0015 14 13.0015C14.1655 13.0015 14.3283 12.9604 14.474 12.882L28 5.59V4.5C28 3.30653 27.5259 2.16193 26.682 1.31802C25.8381 0.474106 24.6935 0 23.5 0H4.5Z" fill="url(#paint4_linear_153_287)"/>
              <defs>
              <linearGradient id="paint0_linear_153_287" x1="17.555" y1="8.332" x2="24.862" y2="22.873" gradientUnits="userSpaceOnUse">
              <stop offset="0.199" stop-color="#0094F0" stop-opacity="0"/>
              <stop offset="0.431" stop-color="#0094F0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_153_287" x1="10" y1="6.79" x2="2.914" y2="23.328" gradientUnits="userSpaceOnUse">
              <stop offset="0.191" stop-color="#0094F0" stop-opacity="0"/>
              <stop offset="0.431" stop-color="#0094F0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_153_287" x1="21.383" y1="15.142" x2="22.532" y2="23.575" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2764E7" stop-opacity="0"/>
              <stop offset="1" stop-color="#2764E7"/>
              </linearGradient>
              <linearGradient id="paint3_linear_153_287" x1="18.333" y1="7.088" x2="20.43" y2="24.25" gradientUnits="userSpaceOnUse">
              <stop offset="0.533" stop-color="#FF6CE8" stop-opacity="0"/>
              <stop offset="1" stop-color="#FF6CE8"/>
              </linearGradient>
              <linearGradient id="paint4_linear_153_287" x1="8.318" y1="-4.024" x2="16.903" y2="18.436" gradientUnits="userSpaceOnUse">
              <stop stop-color="#6CE0FF"/>
              <stop offset="0.462" stop-color="#29C3FF"/>
              <stop offset="1" stop-color="#4894FE"/>
              </linearGradient>
              </defs>
            </svg>
            <span >destek@hepsiemlak.com</span>
           </a>
        </div>

        <!-- Logo -->
        <div class="mt-4">
          <router-link to="/">
            <img src="/marka-logosu.png"
              alt="Hepsi Emlak Logo" class="h-[44px]  object-contain" />
          </router-link>
        </div>

        <!-- Telefon -->
        <div class="flex items-end h-[62px]">
          <a href="tel:+905358757884" class="flex items-center hover:underline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 20V4C6 2.9 6.9 2 8 2H16C17.1 2 18 2.9 18 4V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20Z" fill="#37474F"/>
              <path d="M16 3.5H8C7.7 3.5 7.5 3.7 7.5 4V18.5C7.5 18.8 7.7 19 8 19H16C16.3 19 16.5 18.8 16.5 18.5V4C16.5 3.7 16.3 3.5 16 3.5Z" fill="#BBDEFB"/>
             <path d="M10.5 20H13.5V21H10.5V20Z" fill="#78909C"/>
            </svg>
            <span class="text-purple-700">
              +90 535 875 78 84
            </span>
          </a>
        </div>
      </div>
    </div>

    <NavbarLinks />

    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavbarLinks from './NavbarLinks.vue'

const showDropdown = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = (event) => {
  event.stopPropagation() // bu tıklama dış tıklama olarak sayılmasın
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


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

:root {
  font-family: 'Lato', sans-serif;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }
}
</style>
