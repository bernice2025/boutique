# 📋 Documentation Structure API - Business Manager

## 🔌 Configuration API

**URL de Base**: `https://testbusiness.amidev.bi/api`

Tous les endpoints retournent une réponse JSON avec le format:
```json
{
  "data": [],
  "status": "success",
  "message": "Description"
}
```

## 📊 Ressources et Modèles

### 1. 🏪 Ventes (Ventes)
**Endpoint**: `/ventes`

**Modèle Vente**:
```json
{
  "id": 1,
  "client": "Nom du client",
  "montant": 150.50,
  "produit": "Nom du produit",
  "quantite": 2,
  "date": "2026-06-13",
  "reference": "V001"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| client | String | ✅ | Nom du client |
| montant | Decimal | ✅ | Montant de la vente |
| produit | String | ✅ | Produit vendu |
| quantite | Integer | ✅ | Quantité |
| date | Date | - | Date de la vente |
| reference | String | - | Référence unique |

---

### 2. 📦 Produits (Produits)
**Endpoint**: `/produits`

**Modèle Produit**:
```json
{
  "id": 1,
  "nom": "Laptop Dell",
  "prix": 599.99,
  "stock": 15,
  "sku": "DELL-001",
  "categorie": "Électronique",
  "description": "Description du produit"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| nom | String | ✅ | Nom du produit |
| prix | Decimal | ✅ | Prix unitaire |
| stock | Integer | ✅ | Quantité en stock |
| sku | String | ✅ | Code produit unique |
| categorie | String | - | Catégorie |
| description | String | - | Description détaillée |

---

### 3. 👥 Clients (Clients)
**Endpoint**: `/clients`

**Modèle Client**:
```json
{
  "id": 1,
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "telephone": "+243123456789",
  "adresse": "123 Rue de Paris",
  "type": "particulier",
  "dateCreation": "2026-06-01"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| nom | String | ✅ | Nom complet |
| email | String | ✅ | Adresse email |
| telephone | String | - | Numéro de téléphone |
| adresse | String | - | Adresse complète |
| type | Enum | - | particulier/entreprise/revendeur |
| dateCreation | Date | - | Date de création |

---

### 4. 💰 Capital (Capital)
**Endpoint**: `/capital`

**Modèle Capital**:
```json
{
  "id": 1,
  "montant": 5000.00,
  "description": "Capital initial",
  "type": "initial",
  "date": "2026-01-01"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| montant | Decimal | ✅ | Montant du capital |
| description | String | - | Description |
| type | String | - | initial/augmentation |
| date | Date | - | Date d'enregistrement |

---

### 5. 💸 Dépenses (Depenses)
**Endpoint**: `/depenses`

**Modèle Dépense**:
```json
{
  "id": 1,
  "description": "Fournitures de bureau",
  "montant": 250.00,
  "categorie": "fournitures",
  "modePaiement": "especes",
  "date": "2026-06-10"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| description | String | ✅ | Description |
| montant | Decimal | ✅ | Montant |
| categorie | String | ✅ | fournitures/loyer/salaires/utilities/transport/autre |
| modePaiement | String | - | especes/cheque/virement/carte |
| date | Date | - | Date de la dépense |

---

### 6. 🏪 Points de Vente (Points De Vente)
**Endpoint**: `/points-de-vente`

**Modèle PDV**:
```json
{
  "id": 1,
  "nom": "PDV Kinshasa",
  "localisation": "Rue de l'Indépendance, Kinshasa",
  "responsable": "Pierre Mbongo",
  "contact": "+243123456789",
  "dateCreation": "2026-01-15"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| nom | String | ✅ | Nom du PDV |
| localisation | String | ✅ | Adresse |
| responsable | String | - | Responsable |
| contact | String | - | Téléphone |
| dateCreation | Date | - | Date de création |

---

### 7. ⚠️ Pertes (Pertes)
**Endpoint**: `/pertes`

**Modèle Perte**:
```json
{
  "id": 1,
  "description": "Casse produit",
  "montant": 75.50,
  "type": "casse",
  "date": "2026-06-12"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| description | String | ✅ | Description |
| montant | Decimal | ✅ | Montant de la perte |
| type | String | ✅ | casse/vol/obsolescence/autre |
| date | Date | - | Date de la perte |

---

### 8. 🏦 Versements (Versements)
**Endpoint**: `/versements`

**Modèle Versement**:
```json
{
  "id": 1,
  "reference": "VIRT001",
  "montant": 2500.00,
  "banque": "BCDC",
  "date": "2026-06-13"
}
```

**Champs**:
| Champ | Type | Required | Description |
|-------|------|----------|-------------|
| id | Integer | - | ID unique |
| reference | String | ✅ | N° transaction |
| montant | Decimal | ✅ | Montant versé |
| banque | String | ✅ | Nom de la banque |
| date | Date | - | Date du versement |

---

## 🔄 Opérations CRUD

### Créer une Ressource (POST)
```bash
POST /endpoint
Content-Type: application/json

{
  "champ1": "valeur1",
  "champ2": "valeur2"
}
```

**Réponse Succès (201)**:
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "champ1": "valeur1",
    "champ2": "valeur2"
  }
}
```

---

### Lire les Ressources (GET)
```bash
GET /endpoint              # Toutes les ressources
GET /endpoint/1            # Ressource avec ID 1
GET /endpoint?page=1&limit=10  # Avec pagination
```

**Réponse Succès (200)**:
```json
{
  "status": "success",
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}
```

---

### Mettre à Jour une Ressource (PUT)
```bash
PUT /endpoint/1
Content-Type: application/json

{
  "champ1": "nouvelle_valeur"
}
```

---

### Supprimer une Ressource (DELETE)
```bash
DELETE /endpoint/1
```

**Réponse Succès (200)**:
```json
{
  "status": "success",
  "message": "Ressource supprimée"
}
```

---

## ✅ Codes de Réponse

| Code | Signification | Description |
|------|---------------|-------------|
| 200 | OK | Requête réussie |
| 201 | Created | Ressource créée |
| 400 | Bad Request | Erreur de validation |
| 401 | Unauthorized | Non authentifié |
| 404 | Not Found | Ressource non trouvée |
| 500 | Server Error | Erreur serveur |

---

## 🔐 Authentification

À intégrer selon le backend:
```javascript
// Exemple d'ajout de token
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
```

---

## 📝 Exemple d'Intégration Complète

```javascript
// Importer les services
import { produitsAPI } from '@/services/api.js'

// Récupérer tous les produits
async function chargerProduits() {
  try {
    const response = await produitsAPI.getAll()
    console.log(response.data) // Array de produits
  } catch (error) {
    console.error('Erreur:', error.response?.data)
  }
}

// Créer un produit
async function creerProduit() {
  try {
    const response = await produitsAPI.create({
      nom: 'Nouveau Produit',
      prix: 99.99,
      stock: 10,
      sku: 'NEW-001',
      categorie: 'Électronique'
    })
    console.log('Produit créé:', response.data)
  } catch (error) {
    console.error('Erreur:', error.response?.data)
  }
}
```

---

## 📌 Notes Importantes

1. **Format des Dates**: `YYYY-MM-DD`
2. **Format des Nombres**: Utiliser des décimales (ex: 99.99)
3. **Énumérations**: Respecter les valeurs proposées
4. **Validation**: Tous les champs marqués `✅` sont obligatoires
5. **IDs**: Générés automatiquement par le serveur
6. **Timestamps**: `date` et `dateCreation` sont générées automatiquement

---

## 🔗 Intégration avec Vue

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { produitsAPI } from '@/services/api.js'

const produits = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const res = await produitsAPI.getAll()
    produits.value = res.data
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>
```

---

**Version API**: 1.0  
**Dernière mise à jour**: Juin 2026
