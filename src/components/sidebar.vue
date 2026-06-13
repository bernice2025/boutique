<template>
  <div class="bg-white rounded-lg shadow-md p-4 sticky top-24">
    <h2 class="text-lg font-bold text-gray-900 mb-4">Statistiques Rapides</h2>
    <div class="space-y-3">
      <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
        <span class="text-gray-700">Utilisateurs</span>
        <span class="font-bold text-indigo-600">0</span>
      </div>
      <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
        <span class="text-gray-700">Transactions</span>
        <span class="font-bold text-green-600">0</span>
      </div>
      <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
        <span class="text-gray-700">Erreurs</span>
        <span class="font-bold text-red-600">0</span>
      </div>
      <div class="flex justify-between items-center p-2 bg-gray-50 rounded">
        <span class="text-gray-700">Uptime</span>
        <span class="font-bold text-blue-600">99.9%</span>
      </div>
    </div>
    
    <div class="mt-6 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
      <h3 class="text-sm font-bold text-indigo-900 mb-2">Dernière Synchronisation</h3>
      <p class="text-xs text-indigo-700">{{ lastSync }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const lastSync = ref('Maintenant')

onMounted(() => {
  setInterval(() => {
    const now = new Date()
    lastSync.value = now.toLocaleTimeString('fr-FR')
  }, 1000)
})
</script>

<style scoped>
</style>