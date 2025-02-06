import SpotifyApi from '../../api/SpotifyApi'

const ArtistAPi = {
  getArtist: async (id: string) => {
    try {
      const response = await SpotifyApi.get(`/artists/${id}`)
      console.log(response)
      return response.data
    } catch (error) {
      console.log('error when get Artist >>> ', error)
      throw error
    }
  },

  getArtists: async (ids: string[]) => {
    try {
      // Nối mảng thành 1 string phân tách bởi dấu phẩy
      const idsParam = ids.join(',')
      const response = await SpotifyApi.get('/artists', {
        params: {
          ids: idsParam
        }
      })
      console.log(response)
      return response.data
    } catch (error) {
      console.log('error when get Artists >>> ', error)
      throw error
    }
  }
}
export default ArtistAPi
