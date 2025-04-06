<template>
  <div class="min-h-screen bg-gray-50 font-deca">
    <div class="container mx-auto px-4 py-8">
      <!-- Page Title -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold border-b-2 border-red-500 pb-2 inline-block">Bize Ulaşın</h1>
      </div>

      <!-- Contact Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Company Information (Left Side) -->
        <div class="space-y-6">
          <div class="grid grid-cols-3 gap-4">
            <div class="font-medium text-gray-700">Genel Müdürlük</div>
            <div class="col-span-2">
              İstanbul, Fatih, Akşemsettin Mah. Şehit Teğmen<br>
               Mehmet Sarper Alus Sok., 53
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="font-medium text-gray-700">Müşteri Hizmetleri</div>
            <div class="col-span-2">
              Tel: +90 (212) 381 31 50<br> (Hafta içi : 09:00 - 21:00 / Hafta sonu: 09:00 - 21:00)
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="font-medium text-gray-700">Ünvan</div>
            <div class="col-span-2">LAPSAN ULUSLARARASI REKLAM GİRİŞİMLER LİMİTED ŞİRKETİ</div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="font-medium text-gray-700">Vergi Dairesi Numarası</div>
            <div class="col-span-2">KEÇİÖREN VERGİ DAİRESİ MÜD. 6081274770</div>
          </div>


          <div class="grid grid-cols-3 gap-4">
            <div class="font-medium text-gray-700">Elektronik İletişim Adresleri</div>
            <div class="col-span-2">
              info@kubbeajans.com<br>
              destek@ubbeajans.com
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="font-medium text-gray-700">İletişim Hattı</div>
            <div class="col-span-2">0(535) 875 78 84</div>
          </div>
        </div>

        <!-- Map (Right Side) -->
        <div class="h-[400px] relative">
          <div class="absolute inset-0">
            <div style="position:relative;overflow:hidden;height:100%;">
              <a href="https://yandex.com.tr/harita/org/kubbe_ajans/1351197597/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Kubbe Ajans</a>
              <a href="https://yandex.com.tr/harita/11508/istanbul/category/gift_and_souvenir_shop/184108001/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">İstanbul için Hediyelik eşya mağazaları</a>
              <a href="https://yandex.com.tr/harita/11508/istanbul/category/exhibition_center/184105892/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">İstanbul için Sergi salonları, galeriler</a>
              <iframe src="https://yandex.com.tr/map-widget/v1/org/kubbe_ajans/1351197597/?ll=28.945668%2C41.017934&z=17" width="100%" height="100%" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
            </div>
            <div class="absolute bottom-4 left-4 flex items-center">
              <div class="bg-white p-1 rounded shadow-md flex items-center text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Yandex'le git
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>