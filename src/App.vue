<script setup>
import Navbar from './components/desktop/navbar/Navbar.vue';
import SocialIcons from './components/desktop/social/SocialIcons.vue';
import Footer from './components/desktop/footer/Footer.vue';
</script>

<template>
  <Navbar />
  <router-view />
  <SocialIcons />
  <Footer />
</template>

<style scoped>

</style>
