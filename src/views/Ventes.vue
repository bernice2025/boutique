<template>
  <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Ventes</h1>
      <p class="text-lg text-gray-600 mb-8">Gestion de vos ventes et transactions</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Total Ventes</p>
          <p class="text-3xl font-bold text-green-600">${{ totalVentes }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Nombre de Ventes</p>
          <p class="text-3xl font-bold text-blue-600">{{ ventes.length }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Vente Moyenne</p>
          <p class="text-3xl font-bold text-purple-600">${{ ventes.length > 0 ? (totalVentes / ventes.length).toFixed(2) : 0 }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Nouvelle Vente</h2>
        <form @submit.prevent="addVente" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Client</label>
            <input 
              v-model="newVente.client"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
              placeholder="Nom du client"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Montant</label>
            <input 
              v-model.number="newVente.montant"
              type="number" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
              placeholder="0.00"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Produit</label>
            <input 
              v-model="newVente.produit"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
              placeholder="Produit vendu"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Quantité</label>
            <input 
              v-model.number="newVente.quantite"
              type="number" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
              placeholder="1"
            />
          </div>
          <button type="submit" class="md:col-span-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Enregistrer la Vente
          </button>
        </form>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Historique des Ventes</h2>
        <div v-if="ventes.length > 0" class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2 px-4">Client</th>
                <th class="text-left py-2 px-4">Produit</th>
                <th class="text-left py-2 px-4">Quantité</th>
                <th class="text-left py-2 px-4">Montant</th>
                <th class="text-left py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="vente in ventes" :key="vente.id" class="border-b hover:bg-gray-50">
                <td class="py-2 px-4">{{ vente.client }}</td>
                <td class="py-2 px-4">{{ vente.produit }}</td>
                <td class="py-2 px-4">{{ vente.quantite }}</td>
                <td class="py-2 px-4 font-semibold text-green-600">${{ vente.montant }}</td>
                <td class="py-2 px-4">{{ vente.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else class="text-gray-500 text-center py-8">Aucune vente enregistrée pour le moment</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const ventes = ref([])
const newVente = ref({
  client: '',
  montant: 0,
  produit: '',
  quantite: 1
})

const totalVentes = computed(() => {
  return ventes.value.reduce((sum, vente) => sum + vente.montant, 0)
})

const addVente = () => {
  if (newVente.value.client && newVente.value.montant > 0) {
    ventes.value.push({
      id: Date.now(),
      ...newVente.value,
      date: new Date().toLocaleDateString('fr-FR')
    })
    newVente.value = { client: '', montant: 0, produit: '', quantite: 1 }
  }
}
</script>

<style scoped>
</style>