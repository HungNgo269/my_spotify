import React, { useEffect, useState } from 'react'
import ArtistAPi from '../../Artist/ArtistApi'
import { artistsID } from '../../Artist/constants/artists'
import { albumsID } from '../../Album/constants/Albums'
import AlbumApi from '../../Album/api/AlbumApi'
interface Props {
  Title: string
  Shape: 'squared' | 'rounded'
}

const Cart: React.FC<Props> = ({ Title, Shape }) => {
  const ListArtist = artistsID
  const ListAlbum = albumsID

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
    if (Title === 'Nghệ sĩ phổ biến') {
      getListItem()
    }
    if (Title === 'Album và đĩa đơn nổi tiếng') {
      getListAlbum()
    }
  }, [])
  return (
    <div className='flex flex-col items-start justify-start'>
      <div className='flex flex-row items-center justify-between w-full'>
        <span className='largeText font-bold'>{Title}</span>
        <span className='smallText ml-auto'>Hiện tất cả</span>
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
                  className={`min-w-32 min-h-32 ${Shape === 'squared' ? 'rounded-md' : 'rounded-full'}`}
                />
                <span className='text'>{item.name}</span>
                <span className='smallText'>{item.type}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cart
