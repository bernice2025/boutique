<template>
  <div class="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Produits</h1>
      <p class="text-lg text-gray-600 mb-8">Gestion de votre catalogue de produits</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Nombre de Produits</p>
          <p class="text-3xl font-bold text-purple-600">{{ produits.length }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Stock Total</p>
          <p class="text-3xl font-bold text-indigo-600">{{ totalStock }}</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <p class="text-gray-500 text-sm">Valeur Stock</p>
          <p class="text-3xl font-bold text-blue-600">${{ valeurStock.toFixed(2) }}</p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Ajouter un Produit</h2>
        <form @submit.prevent="addProduit" class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nom</label>
            <input 
              v-model="newProduit.nom"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500"
              placeholder="Nom du produit"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prix Unitaire</label>
            <input 
              v-model.number="newProduit.prix"
              type="number" 
              step="0.01"
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500"
              placeholder="0.00"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Stock Initial</label>
            <input 
              v-model.number="newProduit.stock"
              type="number" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500"
              placeholder="0"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">SKU</label>
            <input 
              v-model="newProduit.sku"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500"
              placeholder="Code produit"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Catégorie</label>
            <input 
              v-model="newProduit.categorie"
              type="text" 
              class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500"
              placeholder="Catégorie"
            />
          </div>
          <button type="submit" class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-md transition">
            Ajouter Produit
          </button>
        </form>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Catalogue</h2>
        <div v-if="produits.length > 0" class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b bg-gray-50">
                <th class="text-left py-2 px-4">Nom</th>
                <th class="text-left py-2 px-4">SKU</th>
                <th class="text-left py-2 px-4">Catégorie</th>
                <th class="text-left py-2 px-4">Prix</th>
                <th class="text-left py-2 px-4">Stock</th>
                <th class="text-left py-2 px-4">Valeur</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="produit in produits" :key="produit.id" class="border-b hover:bg-gray-50">
                <td class="py-2 px-4 font-semibold">{{ produit.nom }}</td>
                <td class="py-2 px-4">{{ produit.sku }}</td>
                <td class="py-2 px-4">{{ produit.categorie }}</td>
                <td class="py-2 px-4 text-purple-600">${{ produit.prix }}</td>
                <td class="py-2 px-4">{{ produit.stock }}</td>
                <td class="py-2 px-4 font-semibold text-blue-600">${{ (produit.prix * produit.stock).toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-else class="text-gray-500 text-center py-8">Aucun produit enregistré</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const produits = ref([])
const newProduit = ref({
  nom: '',
  prix: 0,
  stock: 0,
  sku: '',
  categorie: ''
})

const totalStock = computed(() => {
  return produits.value.reduce((sum, p) => sum + p.stock, 0)
})

const valeurStock = computed(() => {
  return produits.value.reduce((sum, p) => sum + (p.prix * p.stock), 0)
})

const addProduit = () => {
  if (newProduit.value.nom && newProduit.value.prix > 0) {
    produits.value.push({
      id: Date.now(),
      ...newProduit.value
    })
    newProduit.value = { nom: '', prix: 0, stock: 0, sku: '', categorie: '' }
  }
}
</script>

<style scoped>
</style>