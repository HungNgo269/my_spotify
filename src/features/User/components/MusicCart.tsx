import React from 'react'

interface Props {
  Title: string
  itemList: any
}

const MusicCart: React.FC<Props> = ({ Title, itemList }) => {
  return (
    <div className='flex flex-col items-start justify-start'>
      <div>
        <span className='largeText font-bold'>{Title}</span>
        <span className='smallText '>Hiện tất cả</span>
      </div>
      <div className='flex flex-row items-center justify-between w-full'>
        {itemList.map((item: any) => (
          <div className='flex flex-col items-center justify-start'>
            <img src={item.image} alt='cart' className='w-24 h-24' />
            <span className='text'>{item.title}</span>
            <span className='smallText'>{item.subTitle}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MusicCart
