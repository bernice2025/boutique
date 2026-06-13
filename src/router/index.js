import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Capital from '../views/Capital.vue'
import Ventes from '../views/Ventes.vue'
import PointDeVente from '../views/PointDeVente.vue'
import Produits from '../views/Produits.vue'
import Clients from '../views/Clients.vue'
import Depenses from '../views/Depenses.vue'
import PerteEtVersements from '../views/PerteEtVersements.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil,
    },
    {
      path: '/capital',
      name: 'capital',
      component: Capital,
    },
    {
      path: '/ventes',
      name: 'ventes',
      component: Ventes,
    },
    {
      path: '/point-de-vente',
      name: 'pointdeVente',
      component: PointDeVente,
    },
    {
      path: '/produits',
      name: 'produits',
      component: Produits,
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
    },
    {
      path: '/depenses',
      name: 'depenses',
      component: Depenses,
    },
    {
      path: '/pertes-versements',
      name: 'pertesVersements',
      component: PerteEtVersements,
    },
  ],
})

export default router
