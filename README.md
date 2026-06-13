# 📊 Business Manager - Application de Gestion Commerciale

Application Vue 3 complète pour la gestion commerciale avec support multi-pages, intégrée avec une API backend.

## 🚀 Fonctionnalités Principales

| Fonctionnalité | Description |
|---|---|
| 🏠 **Accueil** | Dashboard avec statistiques générales |
| 💰 **Capital** | Gestion du capital initial et augmentations |
| 📊 **Ventes** | Enregistrement et historique des ventes |
| 🏪 **Points de Vente** | Gestion des points de vente (PDV) |
| 📦 **Produits** | Catalogue et gestion d'inventaire |
| 👥 **Clients** | Base de données et gestion clients |
| 💸 **Dépenses** | Suivi des dépenses d'exploitation |
| ⚠️ **Pertes & Versements** | Gestion des pertes et versements bancaires |

## 📋 Structure du Projet

```
kiosk-test/
├── src/
│   ├── components/              # Composants réutilisables (minuscule)
│   │   ├── navigationBar.vue     # Barre de navigation principale
│   │   ├── sidebar.vue           # Sidebar avec statistiques rapides
│   │   └── footer.vue            # Pied de page avec informations
│   ├── views/                    # Pages principales (MAJUSCULE)
│   │   ├── Accueil.vue           # Page d'accueil / Dashboard
│   │   ├── Capital.vue           # Gestion du capital
│   │   ├── Ventes.vue            # Gestion des ventes
│   │   ├── PointDeVente.vue      # Gestion des points de vente
│   │   ├── Produits.vue          # Catalogue et inventaire
│   │   ├── Clients.vue           # Base de données clients
│   │   ├── Depenses.vue          # Gestion des dépenses
│   │   └── PerteEtVersements.vue # Pertes et versements
│   ├── services/
│   │   └── api.js                # Services API réutilisables
│   ├── router/
│   │   └── index.js              # Configuration du routeur Vue
│   ├── App.vue                   # Composant racine
│   ├── axios.js                  # Configuration Axios (API: https://testbusiness.amidev.bi/api)
│   ├── main.js                   # Point d'entrée de l'application
│   └── style.css                 # Styles globaux
├── public/                       # Assets publiques
├── package.json                  # Dépendances et scripts
├── vite.config.js                # Configuration Vite
├── tailwind.config.js            # Configuration Tailwind CSS
└── vitest.config.js              # Configuration des tests

```

## ✨ Conventions de Nommage

### 📄 Pages (Views)
**Format**: Majuscule au début  
**Localisation**: `src/views/`  
**Exemples**:
- `Accueil.vue`
- `Ventes.vue`
- `Produits.vue`
- `PointDeVente.vue`
- `PerteEtVersements.vue`

### 🧩 Composants
**Format**: Minuscule au début  
**Localisation**: `src/components/`  
**Exemples**:
- `navigationBar.vue`
- `sidebar.vue`
- `footer.vue`

## 🔧 Installation et Configuration

### 1. Installation des Dépendances
```bash
npm install
```

### 2. Configuration de l'API
L'API est déjà configurée pour : `https://testbusiness.amidev.bi/api`

Pour modifier l'URL, éditez `src/axios.js`:
```javascript
const instance = axios.create({
  baseURL: 'votre-url-api-ici',
})
```

### 3. Lancer le Projet

**Mode Développement** (avec hot-reload):
```bash
npm run dev
```

**Build Production**:
```bash
npm run build
```

**Tests Unitaires**:
```bash
npm run test:unit
```

## 📡 Services API

### Import des Services
```javascript
import { 
  ventesAPI, 
  produitsAPI, 
  clientsAPI,
  capitalAPI,
  depensesAPI,
  pointsDeVenteAPI,
  pertesAPI,
  versementsAPI
} from '@/services/api.js'
```

### Exemples d'Utilisation

**Récupérer les ventes**:
```javascript
try {
  const ventes = await ventesAPI.getAll()
  console.log(ventes)
} catch (error) {
  console.error('Erreur:', error)
}
```

**Créer une nouvelle vente**:
```javascript
await ventesAPI.create({
  client: 'Jean Dupont',
  montant: 150.00,
  produit: 'Laptop',
  quantite: 1
})
```

**Mettre à jour un produit**:
```javascript
await produitsAPI.update(123, {
  nom: 'Nouveau Produit',
  prix: 99.99,
  stock: 50
})
```

**Supprimer un client**:
```javascript
await clientsAPI.delete(456)
```

## 🔌 Endpoints API

Tous les endpoints suivent le pattern RESTful standard:

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/resource` | Lister tous |
| GET | `/resource/:id` | Détail d'une ressource |
| POST | `/resource` | Créer une ressource |
| PUT | `/resource/:id` | Mettre à jour |
| DELETE | `/resource/:id` | Supprimer |

**Ressources disponibles**:
- `/ventes`
- `/produits`
- `/clients`
- `/capital`
- `/depenses`
- `/points-de-vente`
- `/pertes`
- `/versements`

## 🎨 Design et Styles

Le projet utilise **Tailwind CSS** avec:
- Design responsive (mobile-first)
- Système de couleurs cohérent par section
- Composants réutilisables
- Mode clair par défaut

### Palette de Couleurs par Section
```
🏠 Accueil      → Bleu/Indigo
💰 Capital      → Orange/Jaune
📊 Ventes       → Vert
🏪 PDV          → Rose
📦 Produits     → Violet/Indigo
👥 Clients      → Bleu/Cyan
💸 Dépenses     → Rouge/Orange
⚠️ Pertes       → Gris
```

## 🧩 Ajouter une Nouvelle Page

1. **Créer le fichier page** dans `src/views/NomPage.vue` (avec MAJUSCULE)
```vue
<template>
  <div class="p-6">
    <h1>Ma Page</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>
```

2. **Ajouter la route** dans `src/router/index.js`:
```javascript
import NomPage from '../views/NomPage.vue'

// Dans le tableau routes:
{
  path: '/mon-page',
  name: 'nomPage',
  component: NomPage,
}
```

3. **Ajouter le lien** dans `src/components/navigationBar.vue`

## 📊 Exemple d'Intégration API

```javascript
import { ref, onMounted } from 'vue'
import { produitsAPI } from '@/services/api.js'

export default {
  setup() {
    const produits = ref([])
    const loading = ref(true)

    onMounted(async () => {
      try {
        const response = await produitsAPI.getAll()
        produits.value = response.data
      } catch (error) {
        console.error('Erreur:', error)
      } finally {
        loading.value = false
      }
    })

    return { produits, loading }
  }
}
```

## 🚨 Dépannage

| Problème | Solution |
|----------|----------|
| Pages ne s'affichent pas | Vérifiez que `npm install` est exécuté et `npm run dev` est actif |
| API ne répond pas | Vérifiez l'URL dans `axios.js` et la connectivité réseau |
| Composants ne se chargent pas | Vérifiez les chemins d'import et les noms de fichiers |
| Styles manquants | Assurez que Tailwind CSS est chargé dans `style.css` |

## 🔒 Sécurité

- ✅ Validation côté client des formulaires
- ✅ Configuration CORS pour l'API
- ⚠️ Données sensibles non stockées en localStorage par défaut
- 💡 Implémentez l'authentification via l'API backend

## 📚 Technologies

- **Vue 3** - Framework frontend progressif
- **Vue Router** - Routage et navigation
- **Axios** - Client HTTP
- **Tailwind CSS** - Framework CSS utilitaire
- **Vite** - Bundler moderne
- **Vitest** - Framework de test

## 🎓 Ressources

- [Documentation Vue 3](https://vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Axios Documentation](https://axios-http.com/)

## 📝 Notes Importantes

- L'application stocke les données **en mémoire** uniquement (non persistantes)
- Pour la persistance, utilisez l'API backend
- Tous les formulaires sont validés côté client
- Responsive et compatible avec tous les navigateurs modernes

## 👨‍💻 Architecture Recommandée

```
Une page Vue = Une fonctionnalité
Chaque page peut:
- Avoir sa propre logique
- Appeler les services API
- Gérer son propre état local
- Intégrer des composants réutilisables
```

## ✅ Checklist Développement

- [x] Structure de projet créée
- [x] Routeur configuré
- [x] API Axios intégrée
- [x] Services API créés
- [x] 8 pages principales créées
- [x] Navigation intégrée
- [x] Styles Tailwind appliqués
- [x] Documentation rédigée
- [ ] Tests unitaires à implémenter
- [ ] Authentification à intégrer
- [ ] Persistance de données à implémenter

---

**Version**: 1.0.0  
**API**: https://testbusiness.amidev.bi/api  
**Dernière mise à jour**: Juin 2026
