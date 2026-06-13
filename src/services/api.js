import axios from '../axios'

// Ventes
export const ventesAPI = {
  getAll: () => axios.get('/ventes'),
  getById: (id) => axios.get(`/ventes/${id}`),
  create: (data) => axios.post('/ventes', data),
  update: (id, data) => axios.put(`/ventes/${id}`, data),
  delete: (id) => axios.delete(`/ventes/${id}`),
}

// Produits
export const produitsAPI = {
  getAll: () => axios.get('/produits'),
  getById: (id) => axios.get(`/produits/${id}`),
  create: (data) => axios.post('/produits', data),
  update: (id, data) => axios.put(`/produits/${id}`, data),
  delete: (id) => axios.delete(`/produits/${id}`),
}

// Clients
export const clientsAPI = {
  getAll: () => axios.get('/clients'),
  getById: (id) => axios.get(`/clients/${id}`),
  create: (data) => axios.post('/clients', data),
  update: (id, data) => axios.put(`/clients/${id}`, data),
  delete: (id) => axios.delete(`/clients/${id}`),
}

// Capital
export const capitalAPI = {
  getAll: () => axios.get('/capital'),
  getById: (id) => axios.get(`/capital/${id}`),
  create: (data) => axios.post('/capital', data),
  update: (id, data) => axios.put(`/capital/${id}`, data),
  delete: (id) => axios.delete(`/capital/${id}`),
}

// Dépenses
export const depensesAPI = {
  getAll: () => axios.get('/depenses'),
  getById: (id) => axios.get(`/depenses/${id}`),
  create: (data) => axios.post('/depenses', data),
  update: (id, data) => axios.put(`/depenses/${id}`, data),
  delete: (id) => axios.delete(`/depenses/${id}`),
}

// Points de Vente
export const pointsDeVenteAPI = {
  getAll: () => axios.get('/points-de-vente'),
  getById: (id) => axios.get(`/points-de-vente/${id}`),
  create: (data) => axios.post('/points-de-vente', data),
  update: (id, data) => axios.put(`/points-de-vente/${id}`, data),
  delete: (id) => axios.delete(`/points-de-vente/${id}`),
}

// Pertes
export const pertesAPI = {
  getAll: () => axios.get('/pertes'),
  getById: (id) => axios.get(`/pertes/${id}`),
  create: (data) => axios.post('/pertes', data),
  update: (id, data) => axios.put(`/pertes/${id}`, data),
  delete: (id) => axios.delete(`/pertes/${id}`),
}

// Versements
export const versementsAPI = {
  getAll: () => axios.get('/versements'),
  getById: (id) => axios.get(`/versements/${id}`),
  create: (data) => axios.post('/versements', data),
  update: (id, data) => axios.put(`/versements/${id}`, data),
  delete: (id) => axios.delete(`/versements/${id}`),
}

export default {
  ventesAPI,
  produitsAPI,
  clientsAPI,
  capitalAPI,
  depensesAPI,
  pointsDeVenteAPI,
  pertesAPI,
  versementsAPI,
}