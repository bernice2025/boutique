# 🚀 Getting Started - Business Manager

## ⚡ Démarrage Rapide

### 1️⃣ Installation
```bash
cd kiosk-test
npm install
```

### 2️⃣ Lancer le Serveur
```bash
npm run dev
```

### 3️⃣ Accéder à l'Application
Ouvrez votre navigateur et allez à:
```
http://localhost:5173
```

---

## 📁 Structure Rapide

```
📂 src/
  📁 views/        ← Pages (MAJUSCULE)
    📄 Accueil.vue
    📄 Capital.vue
    📄 Ventes.vue
    📄 PointDeVente.vue
    📄 Produits.vue
    📄 Clients.vue
    📄 Depenses.vue
    📄 PerteEtVersements.vue
  
  📁 components/   ← Composants (minuscule)
    📄 navigationBar.vue
    📄 sidebar.vue
    📄 footer.vue
  
  📁 services/
    📄 api.js      ← API CRUD
  
  📁 router/
    📄 index.js    ← Routes
  
  📄 App.vue       ← App principal
  📄 axios.js      ← Config API
```

---

## 🔧 Configuration API

L'API est déjà configurée pour:
```
https://testbusiness.amidev.bi/api
```

**Pour changer l'URL**, modifiez `src/axios.js`:
```javascript
const instance = axios.create({
  baseURL: 'votre-url-api',
})
```

---

## 📊 Pages Disponibles

| Page | Route | Fonction |
|------|-------|----------|
| Accueil | `/` | Dashboard |
| Capital | `/capital` | Gestion capital |
| Ventes | `/ventes` | Historique ventes |
| PDV | `/point-de-vente` | Points de vente |
| Produits | `/produits` | Catalogue |
| Clients | `/clients` | Base clients |
| Dépenses | `/depenses` | Suivi dépenses |
| Pertes | `/pertes-versements` | Pertes et versements |

---

## 🎯 Ajouter une Nouvelle Page

### Étape 1: Créer la Page
Créer `src/views/MaPage.vue`:
```vue
<template>
  <div class="p-6">
    <h1 class="text-4xl font-bold">Ma Page</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>
```

### Étape 2: Ajouter la Route
Modifier `src/router/index.js`:
```javascript
import MaPage from '../views/MaPage.vue'

{
  path: '/ma-page',
  name: 'maPage',
  component: MaPage,
}
```

### Étape 3: Ajouter le Lien
Modifier `src/components/navigationBar.vue`:
```vue
<router-link to="/ma-page" class="...">
  Ma Page
</router-link>
```

---

## 🔌 Utiliser l'API

### Importer
```javascript
import { produitsAPI } from '@/services/api.js'
```

### Exemples
```javascript
// Récupérer tous
const produits = await produitsAPI.getAll()

// Récupérer un
const produit = await produitsAPI.getById(1)

// Créer
await produitsAPI.create({ nom: 'Produit', prix: 99.99 })

// Mettre à jour
await produitsAPI.update(1, { nom: 'Nouveau Nom' })

// Supprimer
await produitsAPI.delete(1)
```

---

## 🎨 Personnaliser les Couleurs

Éditer `tailwind.config.js`:
```javascript
theme: {
  colors: {
    // Vos couleurs ici
  }
}
```

---

## 📦 Dépendances Principales

- ✅ Vue 3
- ✅ Vue Router
- ✅ Axios
- ✅ Tailwind CSS
- ✅ Vite

---

## 🧪 Tests

```bash
npm run test:unit
```

---

## 📚 Documentations

| Document | Contenu |
|----------|---------|
| `README.md` | Guide complet |
| `API_DOCUMENTATION.md` | Structure API |
| `GETTING_STARTED.md` | Ce fichier |

---

## ❓ Questions Fréquentes

**Q: Comment ajouter l'authentification?**  
R: Intégrez un token JWT dans `axios.js`

**Q: Les données persistent-elles?**  
R: Non, elles sont en mémoire. Utilisez l'API pour la persistance.

**Q: Comment déployer?**  
R: `npm run build` puis hébergez le dossier `dist/`

---

## 🐛 Problèmes Courants

### Les pages ne s'affichent pas
```bash
# 1. Vérifier les dépendances
npm install

# 2. Redémarrer le serveur
npm run dev

# 3. Nettoyer le cache
rm -rf node_modules
npm install
```

### API ne répond pas
1. Vérifiez l'URL dans `axios.js`
2. Testez la connexion réseau
3. Vérifiez les logs du serveur

---

## 🎓 Prochaines Étapes

- [ ] Implémenter l'authentification
- [ ] Ajouter la persistance (API)
- [ ] Créer des tests unitaires
- [ ] Ajouter la gestion d'erreurs
- [ ] Optimiser les performances

---

## 📞 Support

Consultez les documentations:
- [Vue 3 Docs](https://vuejs.org/)
- [Tailwind Docs](https://tailwindcss.com/)
- [Axios Docs](https://axios-http.com/)

---

**Bon codage! 🚀**
