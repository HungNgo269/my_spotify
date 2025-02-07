import React, { useEffect, useState } from 'react'
import ArtistAPi from '../../Artist/ArtistApi'
import AlbumApi from '../../Album/api/AlbumApi'
import PlayListApi from '../../Playlist/api/PlaylistApi'
import { artistsID } from '../../Artist/constants/Artists'
import { albumsID } from '../../Album/constants/Albums'
import { PlaylistsID } from '../../Playlist/constants/playlist'
interface Props {
  Title: string
  Shape: 'squared' | 'rounded'
}

const Cart: React.FC<Props> = ({ Title, Shape }) => {
  const ListArtist = artistsID
  const ListAlbum = albumsID
  const ListPlayList = PlaylistsID
  const [itemList, setItemList] = useState('')
  useEffect(() => {
    const getListItem = async () => {
      const result = await ArtistAPi.getArtists(ListArtist)
      console.log(result)
      setItemList(result.artists)
    }
    const getListAlbum = async () => {
      const result = await AlbumApi.getAlbums(ListAlbum)
      console.log(result)
      setItemList(result.albums)
    }
    const getListPlayList = async () => {
      const result = await PlayListApi.getPlayLists(ListAlbum)
      console.log(result)
      setItemList(result.episodes)
    }
    if (Title === 'Nghệ sĩ phổ biến') {
      getListItem()
    }
    if (Title === 'Album và đĩa đơn nổi tiếng') {
      getListAlbum()
    }
    if (Title === 'Radio nổi tiếng') {
      // getListPlayList()
    }
    if (Title === 'Bảng xếp hạng nổi bật') {
      // getListAlbum()
    }
    if (Title === 'Lựa chọn từ Spotify') {
      // getListAlbum()
    }
    ;<Cart Title='Radio nổi tiếng' Shape='squared'></Cart>
  }, [])
  return (
    <div className='flex flex-col items-start justify-start'>
      <div className='flex flex-row items-center justify-between w-full'>
        <span className='largeText font-bold'>{Title}</span>
        <span className='smallText ml-auto  font-bold cursor-pointer hover:underline hover:decoration-white'>
          Hiện tất cả
        </span>
      </div>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='grid grid-flow-col auto-cols-auto gap-4'>
          {itemList &&
            Array.isArray(itemList) &&
            itemList.map((item: any) => (
              <div key={item.id} className='flex flex-col p-3 justify-between items-start'>
                <img
                  src={item.images[0].url}
                  alt='cart'
                  className={`min-w-32 min-h-32 max-w-32 max-h-32 ${Shape === 'squared' ? 'rounded-md' : 'rounded-full'}`}
                />
                <span className='text font-bold'>{item.name}</span>
                <span className='smallText font-bold'>{item.type}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
