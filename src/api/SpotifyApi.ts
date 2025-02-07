import axios from 'axios'
import { store } from '../stores/store'

const SpotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})
SpotifyApi.interceptors.request.use(
  (config) => {
    const accessToken = store.getState().auth.accessToken
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default SpotifyApi
