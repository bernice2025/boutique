<template>
  <div class="p-6 bg-gradient-to-br from-gray-50 to-slate-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Pertes et Versements</h1>
      <p class="text-lg text-gray-600 mb-8">Gestion des pertes et des versements bancaires</p>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Total Pertes</p>
          <p class="text-3xl font-bold text-red-600">${{ totalPertes.toFixed(2) }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Total Versements</p>
          <p class="text-3xl font-bold text-green-600">${{ totalVersements.toFixed(2) }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Nombre de Pertes</p>
          <p class="text-3xl font-bold text-orange-600">{{ pertes.length }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Nombre de Versements</p>
          <p class="text-3xl font-bold text-blue-600">{{ versements.length }}</p>
        </div>
      </div>

      <!-- Pertes Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Enregistrer une Perte</h2>
          <form @submit.prevent="addPerte" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Description</label>
              <input 
                v-model="newPerte.description"
                type="text" 
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
                placeholder="Motif de la perte"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Montant</label>
              <input 
                v-model.number="newPerte.montant"
                type="number" 
                step="0.01"
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
                placeholder="0.00"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Type</label>
              <select 
                v-model="newPerte.type"
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-red-500"
              >
                <option value="casse">Casse</option>
                <option value="vol">Vol</option>
                <option value="obsolescence">Obsolescence</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <button type="submit" class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition">
              Enregistrer Perte
            </button>
          </form>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Enregistrer un Versement</h2>
          <form @submit.prevent="addVersement" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Référence</label>
              <input 
                v-model="newVersement.reference"
                type="text" 
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
                placeholder="N° de transaction"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Montant</label>
              <input 
                v-model.number="newVersement.montant"
                type="number" 
                step="0.01"
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
                placeholder="0.00"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Banque</label>
              <input 
                v-model="newVersement.banque"
                type="text" 
                class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"
                placeholder="Nom de la banque"
              />
            </div>
            <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition">
              Enregistrer Versement
            </button>
          </form>
        </div>
      </div>

      <!-- Tables Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Historique des Pertes</h2>
          <div v-if="pertes.length > 0" class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b bg-gray-50">
                  <th class="text-left py-2 px-2">Description</th>
                  <th class="text-left py-2 px-2">Type</th>
                  <th class="text-left py-2 px-2">Montant</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="perte in pertes" :key="perte.id" class="border-b hover:bg-gray-50">
                  <td class="py-2 px-2">{{ perte.description }}</td>
                  <td class="py-2 px-2">{{ perte.type }}</td>
                  <td class="py-2 px-2 font-semibold text-red-600">${{ perte.montant.toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else class="text-gray-500 text-center py-8">Aucune perte enregistrée</p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Historique des Versements</h2>
          <div v-if="versements.length > 0" class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b bg-gray-50">
                  <th class="text-left py-2 px-2">Référence</th>
                  <th class="text-left py-2 px-2">Banque</th>
                  <th class="text-left py-2 px-2">Montant</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="versement in versements" :key="versement.id" class="border-b hover:bg-gray-50">
                  <td class="py-2 px-2">{{ versement.reference }}</td>
                  <td class="py-2 px-2">{{ versement.banque }}</td>
                  <td class="py-2 px-2 font-semibold text-green-600">${{ versement.montant.toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else class="text-gray-500 text-center py-8">Aucun versement enregistré</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const pertes = ref([])
const versements = ref([])

const newPerte = ref({
  description: '',
  montant: 0,
  type: 'casse'
})

const newVersement = ref({
  reference: '',
  montant: 0,
  banque: ''
})

const totalPertes = computed(() => {
  return pertes.value.reduce((sum, p) => sum + p.montant, 0)
})

const totalVersements = computed(() => {
  return versements.value.reduce((sum, v) => sum + v.montant, 0)
})

const addPerte = () => {
  if (newPerte.value.description && newPerte.value.montant > 0) {
    pertes.value.push({
      id: Date.now(),
      ...newPerte.value,
      date: new Date().toLocaleDateString('fr-FR')
    })
    newPerte.value = { description: '', montant: 0, type: 'casse' }
  }
}

const addVersement = () => {
  if (newVersement.value.reference && newVersement.value.montant > 0) {
    versements.value.push({
      id: Date.now(),
      ...newVersement.value,
      date: new Date().toLocaleDateString('fr-FR')
    })
    newVersement.value = { reference: '', montant: 0, banque: '' }
  }
}
</script>

<style scoped>
</style>