<template>
  <div class="p-6 bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Point de Vente</h1>
      <p class="text-lg text-gray-600 mb-8">Gestion des points de vente</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Nombre de PDV</p>
          <p class="text-3xl font-bold text-rose-600">{{ pointsDeVente.length }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Total Ventes PDV</p>
          <p class="text-3xl font-bold text-pink-600">$0</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Ajouter un Point de Vente</h2>
        <form @submit.prevent="addPointDeVente" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nom</label>
            <input 
              v-model="newPDV.nom"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-rose-500"
              placeholder="Nom du PDV"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Localisation</label>
            <input 
              v-model="newPDV.localisation"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-rose-500"
              placeholder="Adresse"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Responsable</label>
            <input 
              v-model="newPDV.responsable"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-rose-500"
              placeholder="Nom du responsable"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Contact</label>
            <input 
              v-model="newPDV.contact"
              type="tel" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-rose-500"
              placeholder="Téléphone"
            />
          </div>
          <button type="submit" class="md:col-span-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Ajouter PDV
          </button>
        </form>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Liste des Points de Vente</h2>
        <div v-if="pointsDeVente.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="pdv in pointsDeVente" :key="pdv.id" class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
            <h3 class="font-bold text-lg text-gray-900">{{ pdv.nom }}</h3>
            <p class="text-gray-600 text-sm">📍 {{ pdv.localisation }}</p>
            <p class="text-gray-600 text-sm">👤 {{ pdv.responsable }}</p>
            <p class="text-gray-600 text-sm">📞 {{ pdv.contact }}</p>
          </div>
        </div>
        <p v-else class="text-gray-500 text-center py-8">Aucun point de vente enregistré</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const pointsDeVente = ref([])
const newPDV = ref({
  nom: '',
  localisation: '',
  responsable: '',
  contact: ''
})

const addPointDeVente = () => {
  if (newPDV.value.nom && newPDV.value.localisation) {
    pointsDeVente.value.push({
      id: Date.now(),
      ...newPDV.value
    })
    newPDV.value = { nom: '', localisation: '', responsable: '', contact: '' }
  }
}
</script>

<style scoped>
</style>