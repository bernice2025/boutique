<template>
  <footer class="bg-gray-900 text-gray-300 py-8 mt-12">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About -->
        <div>
          <h3 class="text-white font-bold mb-4">À Propos</h3>
          <p class="text-sm text-gray-400">
            Application de gestion commerciale complète pour optimiser votre activité.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-white font-bold mb-4">Liens Rapides</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/" class="hover:text-white transition">Accueil</router-link></li>
            <li><router-link to="/ventes" class="hover:text-white transition">Ventes</router-link></li>
            <li><router-link to="/produits" class="hover:text-white transition">Produits</router-link></li>
            <li><router-link to="/clients" class="hover:text-white transition">Clients</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-bold mb-4">Support</h3>
          <ul class="space-y-2 text-sm">
            <li>Email: support@business.bi</li>
            <li>Tél: +243 XXX XXX XXX</li>
            <li>API: testbusiness.amidev.bi</li>
          </ul>
        </div>

        <!-- Stats -->
        <div>
          <h3 class="text-white font-bold mb-4">API</h3>
          <p class="text-sm text-gray-400">
            Connecté à:<br />
            <span class="text-indigo-400">testbusiness.amidev.bi/api</span>
          </p>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-8">
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-400">
            &copy; {{ new Date().getFullYear() }} Business Manager. Tous droits réservés.
          </p>
          <div class="flex gap-4">
            <a href="#" class="text-gray-400 hover:text-white transition">Privacy</a>
            <a href="#" class="text-gray-400 hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
</style>