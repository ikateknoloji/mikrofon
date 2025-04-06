<template>
  <div class="mt-16 max-w-7xl mx-auto px-4 py-6 font-deca">
    <!-- İçerik -->
    <div class="flex item-center justify-between">
      <!-- Renkler ve Ürün Resmi -->
      <div class="w-full grid grid-cols-12 gap-4">
        <div class="col-span-1 h-[550px] flex md:flex-col justify-center items-center gap-3">
          <div
            v-for="(color, index) in categories[selectedCategory].colors"
            :key="index"
            class="w-7 h-7 rounded-full border-2 border-gray-200 flex-shrink-0"
            :style="`background-color: ${color.hex}`"
          ></div>
        </div>

        <!-- Ürün Resmi ve Model Bilgisi -->
        <div class="col-span-11 flex flex-col">
          <!-- Model Bilgisi -->
          <div class="mb-4">
            <div class="flex gap-2 overflow-x-auto">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="border border-gray-200 p-1 w-[75px] h-[75px] flex items-center justify-center cursor-pointer hover:border-[#1d68f4] flex-shrink-0"
                :class="{ 'border-[#1d68f4] border-2': selectedCategory === index }"
                @click="selectedCategory = index"
              >
                <img :src="category.categoryImage" :alt="category.categoryName" class="max-h-full" />
              </div>
            </div>
          </div>
          <!-- Modele Ait Resim (her zaman ilk renk resmi gösteriliyor) -->
          <div class="relative">
              <img
                :src="categories[selectedCategory].categoryImage"
                :alt="categories[selectedCategory].categoryName"
                class="max-w-full max-h-[400px] border border-gray-200 rounded-lg"
              />
          </div>
        </div>
      </div>

      <!-- Sağ Kısım: Ürün Detayları -->
      <div class="w-full h-full flex flex-col ">
        <div>
          <div class="text-lg text-gray-600 mb-4 uppercase">
            {{ categories[selectedCategory].categoryName }}
          </div>
          <h2 class="text-7xl mb-7">
            {{ categories[selectedCategory].title }}
          </h2>
          <div class="mb-1 flex">
            <h6 class="bg-gray-200 inline-block py-2 px-6 font-light rounded-lg mb-5   text-gray-800 underline">
              Birim Başına Fiyat
            </h6>
            <p class="py-2 px-6 text-xl font-semibold text-gray-900 underline leading-6">
                750 TL + 150 TL KDV
            </p>
          </div>
          <ul class="bg-gray-100 px-4 py-3 rounded-lg mb-4 list-disc list-inside space-y-3 text-gray-900 text-sm font-semibold shadow-md">
            <li class=""><strong>Kargo Ücreti:</strong> Kargo ücreti alıcıya aittir. Kargo ücreti anlaşmalı olduğummuz
              <br>Sürat Kargo firmasından kapıda teslim edilirken gerçekleşir
            </li>
            <li class=""><strong>Ortalama Ücreti:</strong>
              Sürat Kargo ile anlaşmamız doğrultusunda başlangıç fiyatı olarak <span class="underline">105 TL</span> olarak belirlenmiştir.
            </li>
          </ul>
          <div class="space-y-3 max-w-lg">
            <p class=" text-[14px] text-gray-600 leading-6 mb-5">
              {{ categories[selectedCategory].description }}
            </p>

            <div class="mb-5">
              <h6 class=" bg-orange-100 inline-block py-2 px-3 font-semibold rounded-lg mb-5 uppercase text-xs text-orange-400">
                Ürün Renk Seçenekleri
              </h6>
              <!-- Renk kutuları -->
              <div class="flex flex-wrap gap-4">
                <div v-for="(color, index) in categories[selectedCategory].colors" :key="index" class="flex items-center gap-2">
                  <div :style="{ backgroundColor: color.hex }" class="w-6 h-6 rounded border border-gray-300"></div>
                  <span class="text-sm font-medium text-gray-800">{{ color.name }}</span>
                </div>
              </div>
            </div>

            <div class="mb-5">
              <h6 class=" bg-blue-200 inline-block py-2 px-3 font-semibold rounded-lg mb-5 uppercase text-xs text-blue-500">
                Ürün Boyutları
              </h6>
              <div class="flex items-center space-x-4 text-sm rounded-lg">
                <div class="flex items-center gap-2 text-sm">
                  <span class="font-semibold text-gray-700 bg-gray-200 px-3 py-1"> Yükseklik:</span>
                  <span class="font-semibold text-gray-900 bg-red-100 px-3 py-1 rounded-lg">
                    {{ categories[selectedCategory].dimensions.height }}
                  </span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="font-semibold text-gray-700 bg-gray-200 px-3 py-1"> Genişlik:</span>
                  <span class="font-semibold text-gray-900 bg-red-100 px-3 py-1 rounded-lg">
                    {{ categories[selectedCategory].dimensions.width }}
                  </span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <span class="font-semibold text-gray-700 bg-gray-200 px-3 py-1 whitespace-nowrap"> Delik Genişliği:</span>
                  <span class="font-semibold text-gray-900 bg-red-100 px-3 py-1 rounded-lg">
                    {{ categories[selectedCategory].dimensions.holeWidth }}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    <!-- Ürün Detayları -->
    <div class="max-w-7xl mx-auto shadow-sm border border-gray-200 rounded-md p-5 font-sans">
      <div class="flex space-between">
        <div class="w-1/2 flex items-center justify-center p-3">
          <img src="/products/mic.png" alt="kurumsal-mikrofon-sungeri" class="max-w-full max-h-[300px]" />
        </div>
        <div class="p-4 w-full">
          <div class="leading-7">
            <h3 class="text-xl font-bold text-gray-800 mb-4">
              Kurumsal Özel Tasarım Mikrofon Süngeri ve Baskı Hizmeti
            </h3>

            <ul class="list-disc list-inside space-y-2 text-gray-600 ">
              <li><strong>Gönderici:</strong> Bu ürün tarafımızdan özel tasarım hizmetiyle sunulmaktadır.</li>
              <li><strong>Stok:</strong> Kampanya fiyatından satılmak üzere 10 adetten fazla stok mevcuttur.</li>
              <li><strong>Sipariş Limiti:</strong> En az <span class="font-bold">1 adet</span> sipariş verilebilir. Ancak özel renk ve    tasarımlar için minimum 10 adet miktarı kadar satılabilir.</li>
              <li><strong>Sipariş Teslim:</strong> En az <span class="font-bold">1 adet sipariş için</span> sipariş teslim etme süresi 3 iş     günüdür. Bu zaman aralığında ürününüz kargoya verilir. Bu süreçe kargo teslim süresi dahil değildir.</li>
            </ul>

            <div class="mt-6 border-t pt-4">
              <h4 class="text-lg font-semibold text-gray-900">Ürün ve Hizmet Bilgileri</h4>
              <ul class="list-disc list-inside space-y-1 text-gray-600">
                <li>%100 dayanıklı sünger malzeme - Profesyonel kullanım için özel tasarlanmıştır.</li>
                <li>Kurumsal özel baskı - Logonuzu ve marka kimliğinizi yansıtacak kaliteli baskı hizmeti.</li>
                <li>Baskı kalitesi yüksek ve uzun ömürlüdür.</li>
                <li>Ürünlerimiz profesyonel ses ekipmanları ile uyumludur.</li>
                <li>Özel tasarım süngerler, yayıncılık ve medya profesyonelleri için idealdir.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const selectedCategory = ref(0);

const categories = [
  {
    categoryName: "Logo Baskısı + Üçgen Mikrofon Süngeri",
    categoryImage: "/mikrofon/ucgen-mikrofon-sungeri.png",
    title: "Üçgen Mikrofon",
    description: "Firmalara özel tasarlanmış, logo baskılı mikrofon süngerleri ile marka kimliğinizi ön plana çıkarın! Dayanıklı malzemelerden üretilmiş olup, uzun ömürlü kullanım sunar. Şık tasarımıyla yayıncılık, röportajlar ve kurumsal etkinlikler için mükemmel bir seçimdir. Kargoya teslim süresi 3 iş günüdür.",
    dimensions: {
      height: "12cm",
      width: "8cm",
      holeWidth: "6cm"
    },
    colors: [
      { name: "Siyah", hex: "#000000" },
      { name: "Beyaz", hex: "#ffffff" },
      { name: "Kırmızı", hex: "#c80b0b" },
      { name: "Turuncu", hex: "#d98324" },
      { name: "Sarı", hex: "#faeb46" },
      { name: "Yeşil", hex: "#042804" },
      { name: "Lacivert", hex: "#000080" },
      { name: "Mor", hex: "#800080" }
    ]
  },
  {
    categoryName: "Logo Baskısı + Dörtgen Mikrofon Süngeri",
    categoryImage: "/mikrofon/kare-mikrofon-sungeri.png",
    title: "Dörtgen Model",
    description: "Kurumsal logo baskısı ile profesyonel bir imaj oluşturun! Dayanıklı ve kaliteli malzemeden üretilen mikrofon süngerleri, uzun süre kullanım için uygundur. Düz yüzeyi sayesinde baskınız net ve dikkat çekici görünür. Kargoya teslim süresi 3 iş günüdür.",
    dimensions: {
      height: "10cm",
      width: "10cm",
      holeWidth: "5cm"
    },
    colors: [
      { name: "Kırmızı", hex: "#c80b0b" },
      { name: "Turuncu", hex: "#d98324" },
      { name: "Sarı", hex: "#faeb46" },
      { name: "Yeşil", hex: "#042804" },
      { name: "Lacivert", hex: "#000080" },
      { name: "Mor", hex: "#800080" },
      { name: "Siyah", hex: "#000000" },
      { name: "Beyaz", hex: "#ffffff" }
    ]
  },
  {
    categoryName: "Logo Baskısı + Top Mikrofon Süngeri",
    categoryImage: "/mikrofon/top-mikrofon-sungeri.png",
    title: "Top Model",
    description: "Kurumsal kimliğinizi yansıtan özel baskılı mikrofon süngerleri ile markanızı daha görünür hale getirin! Estetik tasarımı ve dayanıklı yapısıyla profesyonel kullanım için uygundur. Yayıncılık ve medya sektörüne yönelik ideal çözümler sunar. Kargoya teslim süresi 3 iş günüdür.",
    dimensions: {
      height: "15cm",
      width: "15cm",
      holeWidth: "15cm"
    },
    colors: [
      { name: "Kırmızı", hex: "#c80b0b" },
      { name: "Turuncu", hex: "#d98324" },
      { name: "Sarı", hex: "#faeb46" },
      { name: "Yeşil", hex: "#042804" },
      { name: "Lacivert", hex: "#000080" },
      { name: "Mor", hex: "#800080" },
      { name: "Siyah", hex: "#000000" },
      { name: "Beyaz", hex: "#ffffff" }
    ]
  },
  {
    categoryName: "Logo Baskısı + Silindir Mikrofon Süngeri",
    categoryImage: "/mikrofon/silindir-mikrofon-sungeri.png",
    title: "Silindir Model",
    description: "Şık ve profesyonel görünüme sahip mikrofon süngerleri ile kurumsal kimliğinizi ön plana çıkarın! Özel logo baskısıyla markanızı güçlendirin. Uzun ömürlü ve dayanıklı malzemesi sayesinde yayıncılık ve röportajlar için ideal bir kullanım sunar. Kargoya teslim süresi 3 iş günüdür.",
    dimensions: {
      height: "10cm",
      width: "5cm",
      holeWidth: "5cm"
    },
    colors: [
      { name: "Kırmızı", hex: "#c80b0b" },
      { name: "Turuncu", hex: "#d98324" },
      { name: "Sarı", hex: "#faeb46" },
      { name: "Yeşil", hex: "#042804" },
      { name: "Lacivert", hex: "#000080" },
      { name: "Mor", hex: "#800080" },
      { name: "Siyah", hex: "#000000" },
      { name: "Beyaz", hex: "#ffffff" }
    ]
  },
  {
    categoryName: "Logo Baskısı + Damla Mikrofon Süngeri",
    categoryImage: "/mikrofon/damla-mikrofon-sungeri.png",
    title: "Damla Model",
    description: "Ergonomik ve modern tasarıma sahip, firmalara özel logo baskılı mikrofon süngerleri ile profesyonel bir görünüm elde edin! Yüksek kaliteli baskı sayesinde markanız her ortamda dikkat çeker. Dayanıklı yapısı ile uzun süreli kullanım sunar. Kargoya teslim süresi 3 iş günüdür.",
    dimensions: {
      height: "8cm",
      width: "6cm",
      holeWidth: "4cm"
    },
    colors: [
      { name: "Kırmızı", hex: "#c80b0b" },
      { name: "Turuncu", hex: "#d98324" },
      { name: "Sarı", hex: "#faeb46" },
      { name: "Yeşil", hex: "#042804" },
      { name: "Lacivert", hex: "#000080" },
      { name: "Mor", hex: "#800080" },
      { name: "Siyah", hex: "#000000" },
      { name: "Beyaz", hex: "#ffffff" }
    ]
  }
];

</script>

<style>
</style>