<template>
  <div class="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Clients</h1>
      <p class="text-lg text-gray-600 mb-8">Gestion de votre base de clients</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Nombre de Clients</p>
          <p class="text-3xl font-bold text-blue-600">{{ clients.length }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Clients Actifs</p>
          <p class="text-3xl font-bold text-cyan-600">{{ clientsActifs }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Total Achats</p>
          <p class="text-3xl font-bold text-teal-600">$0</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Ajouter un Client</h2>
        <form @submit.prevent="addClient" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nom Complet</label>
            <input 
              v-model="newClient.nom"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
              placeholder="Nom du client"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              v-model="newClient.email"
              type="email" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input 
              v-model="newClient.telephone"
              type="tel" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
              placeholder="+243..."
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Adresse</label>
            <input 
              v-model="newClient.adresse"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
              placeholder="Adresse complète"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Type de Client</label>
            <select 
              v-model="newClient.type"
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
            >
              <option value="particulier">Particulier</option>
              <option value="entreprise">Entreprise</option>
              <option value="revendeur">Revendeur</option>
            </select>
          </div>
          <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Ajouter Client
          </button>
        </form>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Liste des Clients</h2>
        <div v-if="clients.length > 0" class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b bg-gray-50">
                <th class="text-left py-2 px-4">Nom</th>
                <th class="text-left py-2 px-4">Email</th>
                <th class="text-left py-2 px-4">Téléphone</th>
                <th class="text-left py-2 px-4">Type</th>
                <th class="text-left py-2 px-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="client in clients" :key="client.id" class="border-b hover:bg-gray-50">
                <td class="py-2 px-4 font-semibold">{{ client.nom }}</td>
                <td class="py-2 px-4">{{ client.email }}</td>
                <td class="py-2 px-4">{{ client.telephone }}</td>
                <td class="py-2 px-4">
                  <span class="px-2 py-1 rounded text-sm" :class="getTypeColor(client.type)">
                    {{ client.type }}
                  </span>
                </td>
                <td class="py-2 px-4">
                  <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Actif</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else class="text-gray-500 text-center py-8">Aucun client enregistré</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const clients = ref([])
const newClient = ref({
  nom: '',
  email: '',
  telephone: '',
  adresse: '',
  type: 'particulier'
})

const clientsActifs = computed(() => {
  return clients.value.length
})

const getTypeColor = (type) => {
  const colors = {
    'particulier': 'bg-blue-100 text-blue-700',
    'entreprise': 'bg-purple-100 text-purple-700',
    'revendeur': 'bg-orange-100 text-orange-700'
  }
  return colors[type] || 'bg-gray-100 text-gray-700'
}

const addClient = () => {
  if (newClient.value.nom && newClient.value.email) {
    clients.value.push({
      id: Date.now(),
      ...newClient.value
    })
    newClient.value = { nom: '', email: '', telephone: '', adresse: '', type: 'particulier' }
  }
}
</script>

<style scoped>
</style>