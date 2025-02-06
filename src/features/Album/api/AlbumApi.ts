import SpotifyApi from '../../../api/SpotifyApi'

const AlbumApi = {
  getAlbum: async (id: string) => {
    try {
      const response = await SpotifyApi.get(`/albums/${id}`)
      console.log(response)
      return response.data
    } catch (error) {
      console.log('error when get Album >>> ', error)
      throw error
    }
  },
  getAlbums: async (ids: string[]) => {
    try {
      const idsParam = ids.join(',')
      const response = await SpotifyApi.get(`/albums`, {
        params: {
          ids: idsParam
        }
      })
      console.log(response)
      return response.data
    } catch (error) {
      console.log('error when get Albums >>> ', error)
      throw error
    }
  }
}
export default AlbumApi
