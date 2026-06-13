<template>
  <div class="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Accueil</h1>
      <p class="text-lg text-gray-600 mb-8">Bienvenue sur votre tableau de bord commercial</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Cards principales -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Total Ventes</p>
              <p class="text-3xl font-bold text-green-600">$0</p>
            </div>
            <div class="text-4xl text-green-500">📊</div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Total Clients</p>
              <p class="text-3xl font-bold text-blue-600">0</p>
            </div>
            <div class="text-4xl text-blue-500">👥</div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Produits</p>
              <p class="text-3xl font-bold text-purple-600">0</p>
            </div>
            <div class="text-4xl text-purple-500">📦</div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Capital</p>
              <p class="text-3xl font-bold text-orange-600">$0</p>
            </div>
            <div class="text-4xl text-orange-500">💰</div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Dépenses</p>
              <p class="text-3xl font-bold text-red-600">$0</p>
            </div>
            <div class="text-4xl text-red-500">💸</div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-500 text-sm">Pertes</p>
              <p class="text-3xl font-bold text-gray-600">$0</p>
            </div>
            <div class="text-4xl text-gray-500">⚠️</div>
          </div>
        </div>
      </div>

      <!-- Activités récentes -->
      <div class="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Activités Récentes</h2>
        <p class="text-gray-500 text-center py-8">Aucune activité pour le moment</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Importer les données nécessaires
</script>

<style scoped>
</style>