import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/kurumsal', name: 'about', component: () => import('@/views/AboutView.vue') },
  { path: '/site-haritasi', name: 'sitemap', component: () => import('@/views/SitemapView.vue') },
  { path: '/blogs', name: 'blogs', component: () => import('@/views/BlogsView.vue') },
  { path: '/bize-ulasin', name: 'contact', component: () => import('@/views/ContactView.vue') },
  {
    path: '/urunler',
    name: 'products',
    component: () => import('@/views/products/ProductsView.vue')
  },
  {
    path: '/urunler/mikrofon-sunger',
    name: 'mic-foam',
    component: () => import('@/views/products/MicFoamView.vue')
  },
  {
    path: '/urunler/kamera-sungeri',
    name: 'camera-foam',
    component: () => import('@/views/products/CameraFoamView.vue')
  },
  {
    path: '/urunler/reklam-kupu',
    name: 'ad-cube',
    component: () => import('@/views/products/AdCubeView.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
