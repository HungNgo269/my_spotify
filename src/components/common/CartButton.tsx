import React from 'react'

interface Props {
  mainText: string
  subText: string
  Image: string
  imageShape: string
}

const CartButton: React.FC<Props> = ({ mainText, subText, Image, imageShape }) => {
  return (
    <div className='flex flex-col justify-start items-center'>
      <img src={Image} alt='cart' className={imageShape} />
      <span className='text'>{mainText}</span>
      <span className='smallText'>{subText}</span>
    </div>
  )
}

export default CartButton
