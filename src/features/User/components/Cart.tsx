import React, { useEffect, useState } from 'react'
import ArtistAPi from '../../Artist/ArtistApi'

interface Props {
  Title: string
}

const Cart: React.FC<Props> = ({ Title }) => {
  const artistsID = [
    // 1. Drake
    '3TVXtAsR1Inumwj472S9r4',
    // 2. Ariana Grande
    '66CXWjxzNUsdJxJ2JdwvnR',
    // 3. Ed Sheeran
    '6eUKZXaKkcviH0Ku9w2n3V',
    // 4. Justin Bieber
    '1uNFoZAHBGtllmzznpCI3s',
    // 5. Taylor Swift
    '06HL4z0CvFAxyc27GXpf02',
    // 6. The Weeknd
    '1Xyo4u8uXC1ZmMpatF05PJ',
    // 7. Billie Eilish
    '6qqNVTkY8uBg9cP3Jd7DAH'
    // // 8. Post Malone
    // '246dkjvS1zLTtiykXe5h60',
    // // 9. Maroon 5
    // '04gDigrS5kc9YWfZHwBETP',
    // // 10. Dua Lipa
    // '6M2wZ9GZgrQXHCFfjv46we',
    // // 11. Shawn Mendes
    // '7n2wHs1TKAczGzO7Dd2rGr',
    // // 12. Bruno Mars
    // '0du5cEVh5yTK9QJze8zA0C',
    // // 13. Selena Gomez
    // '0C8ZW7ezQVs4URX5aX7Kqx',
    // // 14. Adele
    // '4dpARuHxo51G3z768sgnrY',
    // // 15. Rihanna
    // '5pKCCKE2ajJHZ9KAiaK11H',
    // // 16. Pitbull
    // '0TnOYISbd1XYRBk9myaseg',
    // // 17. Eminem
    // '7dGJo4pcD2V6oG8kP0tJRR',
    // // 18. Lady Gaga
    // '1HY2Jd0NmPuamShAr6KMms',
    // // 19. Coldplay
    // '4gzpq5DPGxSnKTe4SA8HAU',
    // // 20. Beyoncé
    // '6vWDO969PvNqNYHIOW5v0m'
  ]
  const [itemList, setItemList] = useState('')
  useEffect(() => {
    const getListItem = async () => {
      const result = await ArtistAPi.getArtists(artistsID)
      console.log(result)

      setItemList(result.artists)
    }
    getListItem()
  }, [])
  return (
    <div className='flex flex-col items-start justify-start'>
      <div>
        <span className='largeText font-bold'>{Title}</span>
        <span className='smallText'>Hiện tất cả</span>
      </div>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='grid grid-flow-col auto-cols-auto gap-4'>
          {itemList &&
            Array.isArray(itemList) &&
            itemList.map((item: any) => (
              <div key={item.id} className='flex flex-col p-3 justify-between items-start'>
                <img src={item.images[0].url} alt='cart' className='w-32 h-32 rounded-full' />
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
