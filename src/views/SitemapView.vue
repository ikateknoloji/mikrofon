<template>
  <div class="max-w-6xl mx-auto mt-10 p-5 font-deca">
    <header>
      <h1 class="text-3xl font-bold mb-1">Site Haritası</h1>
      <div class="h-[3px] w-56 bg-red-600 mb-5"></div>
    </header>

    <p class="leading-relaxed mb-10">
      Hepsiemlaklak ile kiralık, satılık ve günlük kiralık ev ilanlarını inceleyin, yeni bir ev hayalinizi ertelemeyin.
      Türkiye'nin farklı illerinden emlak ilanları, en popüler konut projeleri bir tık uzağınızda sizleri bekliyor.
      Ev bulmanın en hızlı, kolay ve güvenilir yolu hepsiemlaklak, binlerce ilanı sizlerle buluşturuyor.
      Keşfetmeye vakit kaybetmeden başlayın!
    </p>

    <div class="grid grid-cols-10 gap-5">
      <div class="col-span-3">
        <h2 class="text-2xl font-semibold mb-5">Ürünler Hakkında</h2>
        <ul class="space-y-2">
          <li
            v-for="item in sitemapLinks"
            :key="item"
            class="flex items-center hover:text-red-600 cursor-pointer transition-colors border-b border-gray-200 py-2"
          >
          <svg class="mr-3" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666504 15.9V2.1C0.666504 1.72222 0.799837 1.40533 1.0665 1.14933C1.33317 0.893334 1.64428 0.765778 1.99984 0.766667C2.11095 0.766667 2.22784 0.783112 2.3505 0.816001C2.47317 0.84889 2.58961 0.899112 2.69984 0.966667L13.5665 7.86667C13.7665 8 13.9167 8.16667 14.0172 8.36667C14.1176 8.56667 14.1674 8.77778 14.1665 9C14.1656 9.22222 14.1158 9.43333 14.0172 9.63334C13.9185 9.83333 13.7683 10 13.5665 10.1333L2.69984 17.0333C2.58873 17.1 2.47228 17.1502 2.3505 17.184C2.22873 17.2178 2.11184 17.2342 1.99984 17.2333C1.64428 17.2333 1.33317 17.1053 1.0665 16.8493C0.799837 16.5933 0.666504 16.2769 0.666504 15.9Z" fill="black"/>
            </svg>
            <span class="text-[18px] text-gray-900 font-semibold">{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="col-span-3">
        <h2 class="text-2xl font-semibold mb-5">Site Haritası</h2>
        <ul class="space-y-2">
          <li
            v-for="item in productLinks"
            :key="item"
            class="flex items-center hover:text-red-600 cursor-pointer transition-colors border-b border-gray-200 py-2"
          >
          <svg class="mr-3" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666504 15.9V2.1C0.666504 1.72222 0.799837 1.40533 1.0665 1.14933C1.33317 0.893334 1.64428 0.765778 1.99984 0.766667C2.11095 0.766667 2.22784 0.783112 2.3505 0.816001C2.47317 0.84889 2.58961 0.899112 2.69984 0.966667L13.5665 7.86667C13.7665 8 13.9167 8.16667 14.0172 8.36667C14.1176 8.56667 14.1674 8.77778 14.1665 9C14.1656 9.22222 14.1158 9.43333 14.0172 9.63334C13.9185 9.83333 13.7683 10 13.5665 10.1333L2.69984 17.0333C2.58873 17.1 2.47228 17.1502 2.3505 17.184C2.22873 17.2178 2.11184 17.2342 1.99984 17.2333C1.64428 17.2333 1.33317 17.1053 1.0665 16.8493C0.799837 16.5933 0.666504 16.2769 0.666504 15.9Z" fill="black"/>
            </svg>
            <span class="text-[18px] text-gray-900 font-semibold">{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="col-span-4 flex justify-center items-center">
        <img
          src="/previews/mic.png"
          alt="BELHA Mikrofon Süngeri"
          class="max-w-full h-auto max-h-[300px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const productLinks = ['Mikrofon Süngeri', 'Kamera Süngeri', 'Reklam Küpü']
const sitemapLinks = ['Kurumsal', 'Ürünlerimiz', 'Site Haritası', 'Blogs', 'Bize Ulaşın']
</script>

<style scoped></style>
