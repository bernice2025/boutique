<template>
  <nav class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="text-2xl font-bold">📊</div>
          <h1 class="text-xl font-bold hidden sm:block">Business Manager</h1>
        </div>

        <!-- Menu Principal -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            to="/"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/') }"
          >
            Accueil
          </router-link>
          <router-link
            to="/capital"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/capital') }"
          >
            Capital
          </router-link>
          <router-link
            to="/ventes"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/ventes') }"
          >
            Ventes
          </router-link>
          <router-link
            to="/point-de-vente"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/point-de-vente') }"
          >
            PDV
          </router-link>
          <router-link
            to="/produits"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/produits') }"
          >
            Produits
          </router-link>
          <router-link
            to="/clients"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/clients') }"
          >
            Clients
          </router-link>
          <router-link
            to="/depenses"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/depenses') }"
          >
            Dépenses
          </router-link>
          <router-link
            to="/pertes-versements"
            class="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            :class="{ 'bg-indigo-700': isActive('/pertes-versements') }"
          >
            Pertes
          </router-link>
        </div>

        <!-- Bouton Menu Mobile -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-md hover:bg-indigo-700"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Menu Mobile -->
      <div v-show="mobileMenuOpen" class="md:hidden pb-4 space-y-1">
        <router-link
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Accueil
        </router-link>
        <router-link
          to="/capital"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Capital
        </router-link>
        <router-link
          to="/ventes"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Ventes
        </router-link>
        <router-link
          to="/point-de-vente"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Point de Vente
        </router-link>
        <router-link
          to="/produits"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Produits
        </router-link>
        <router-link
          to="/clients"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Clients
        </router-link>
        <router-link
          to="/depenses"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Dépenses
        </router-link>
        <router-link
          to="/pertes-versements"
          class="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition"
        >
          Pertes et Versements
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const route = useRoute()

const isActive = (path) => {
  return route.path === path
}
</script>

<style scoped>
</style>