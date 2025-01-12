import SpotifyApi from '../../../api/SpotifyApi'

export const tokenApi = {
  getTokenApi: async () => {
    try {
      const respone = await SpotifyApi.post("/token", {
      })
      console.log(respone);
    }
    catch (error) {
      console.log("error when get token >>> ", error)
    }
  }
}