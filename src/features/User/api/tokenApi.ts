import SpotifyApi from '../../../api/SpotifyApi'

const tokenApi = {
  getTokenApi: async (grant_type: string, client_id: string, client_secret: string) => {
    try {
      const response = await SpotifyApi.post(
        '/token',
        {
          grant_type,
          client_id,
          client_secret
        },
        {
          headers: {
            'Content-type': ' application/x-www-form-urlencoded'
          }
        }
      )
      console.log(response)
      return response.data
    } catch (error) {
      console.log('error when get token >>> ', error)
      throw error
    }
  }
}
export default tokenApi
