<template>
  <div class="p-6 bg-gradient-to-br from-red-50 to-orange-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Dépenses</h1>
      <p class="text-lg text-gray-600 mb-8">Gestion de vos dépenses d'exploitation</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Total Dépenses</p>
          <p class="text-3xl font-bold text-red-600">${{ totalDepenses.toFixed(2) }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Nombre de Dépenses</p>
          <p class="text-3xl font-bold text-orange-600">{{ depenses.length }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Dépense Moyenne</p>
          <p class="text-3xl font-bold text-yellow-600">${{ depenses.length > 0 ? (totalDepenses / depenses.length).toFixed(2) : 0 }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Ajouter une Dépense</h2>
        <form @submit.prevent="addDepense" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Description</label>
            <input 
              v-model="newDepense.description"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
              placeholder="Description de la dépense"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Montant</label>
            <input 
              v-model.number="newDepense.montant"
              type="number" 
              step="0.01"
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
              placeholder="0.00"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Catégorie</label>
            <select 
              v-model="newDepense.categorie"
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
            >
              <option value="fournitures">Fournitures</option>
              <option value="loyer">Loyer</option>
              <option value="salaires">Salaires</option>
              <option value="utilities">Utilities</option>
              <option value="transport">Transport</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Mode de Paiement</label>
            <select 
              v-model="newDepense.modePaiement"
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
            >
              <option value="especes">Espèces</option>
              <option value="cheque">Chèque</option>
              <option value="virement">Virement</option>
              <option value="carte">Carte</option>
            </select>
          </div>
          <button type="submit" class="md:col-span-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Enregistrer Dépense
          </button>
        </form>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Historique des Dépenses</h2>
        <div v-if="depenses.length > 0" class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b bg-gray-50">
                <th class="text-left py-2 px-4">Description</th>
                <th class="text-left py-2 px-4">Catégorie</th>
                <th class="text-left py-2 px-4">Montant</th>
                <th class="text-left py-2 px-4">Mode</th>
                <th class="text-left py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="depense in depenses" :key="depense.id" class="border-b hover:bg-gray-50">
                <td class="py-2 px-4 font-semibold">{{ depense.description }}</td>
                <td class="py-2 px-4">{{ depense.categorie }}</td>
                <td class="py-2 px-4 font-semibold text-red-600">${{ depense.montant.toFixed(2) }}</td>
                <td class="py-2 px-4">{{ depense.modePaiement }}</td>
                <td class="py-2 px-4">{{ depense.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else class="text-gray-500 text-center py-8">Aucune dépense enregistrée</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const depenses = ref([])
const newDepense = ref({
  description: '',
  montant: 0,
  categorie: 'fournitures',
  modePaiement: 'especes'
})

const totalDepenses = computed(() => {
  return depenses.value.reduce((sum, dep) => sum + dep.montant, 0)
})

const addDepense = () => {
  if (newDepense.value.description && newDepense.value.montant > 0) {
    depenses.value.push({
      id: Date.now(),
      ...newDepense.value,
      date: new Date().toLocaleDateString('fr-FR')
    })
    newDepense.value = { description: '', montant: 0, categorie: 'fournitures', modePaiement: 'especes' }
  }
}
</script>

<style scoped>
</style>