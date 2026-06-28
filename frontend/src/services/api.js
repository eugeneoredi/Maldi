import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const getExperiences = () => api.get('/api/experiences')
export const getExperience = (id) => api.get(`/api/experiences/${id}`)
export const bookExperience = (id, data) => api.post(`/api/experiences/${id}/book`, data)

export const getAccommodations = () => api.get('/api/accommodations')
export const getAccommodation = (id) => api.get(`/api/accommodations/${id}`)
export const bookAccommodation = (id, data) => api.post(`/api/accommodations/${id}/book`, data)

export default api
