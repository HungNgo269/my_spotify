import axios from 'axios'


const SpotifyApi = axios.create({
  baseURL: "https://accounts.spotify.com/api",
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
})
export default SpotifyApi;