<template>
  <div class="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Capital</h1>
      <p class="text-lg text-gray-600 mb-8">Gestion du capital initial et des augmentations</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Capital Initial</p>
          <p class="text-3xl font-bold text-orange-600">$0</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Augmentations</p>
          <p class="text-3xl font-bold text-green-600">$0</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Capital Total</p>
          <p class="text-3xl font-bold text-blue-600">$0</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Ajouter du Capital</h2>
        <form @submit.prevent="addCapital" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Montant</label>
            <input 
              v-model.number="newCapital.montant"
              type="number" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500"
              placeholder="0.00"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <textarea 
              v-model="newCapital.description"
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500"
              placeholder="Description du capital"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Ajouter Capital
          </button>
        </form>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Historique du Capital</h2>
        <p class="text-gray-500 text-center py-8">Aucun enregistrement pour le moment</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newCapital = ref({
  montant: 0,
  description: ''
})

const addCapital = () => {
  console.log('Nouveau capital:', newCapital.value)
  newCapital.value = { montant: 0, description: '' }
}
</script>

<style scoped>
</style>