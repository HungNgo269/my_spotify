import SpotifyApi from '../../../api/SpotifyApi'

const PlayListApi = {
  getPlayList: async (id: string) => {
    try {
      const response = await SpotifyApi.get(`/episodes/${id}`)
      console.log(response)
      return response.data
    } catch (error) {
      console.log('error when get episode >>> ', error)
      throw error
    }
  },
  getPlayLists: async (ids: string[]) => {
    try {
      const idsParam = ids.join(',')
      const response = await SpotifyApi.get(`/episodes`, {
        params: {
          ids: idsParam
        }
      })
      console.log(response)
      return response.data
    } catch (error) {
      console.log('error when get episodes >>> ', error)
      throw error
    }
  }
}
export default PlayListApi
