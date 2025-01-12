import React from 'react'
import FooterContent from './FooterContent'
import MusicCart from './MusicCart'
interface Props {
  propName?: string
}

const Content: React.FC<Props> = ({ propName }) => {
  return (
    <div className='container_sub overflow-auto w-full rounded-lg'>
      <MusicCart Title='Nghệ sĩ phổ biến' itemList={[]}></MusicCart>
      <FooterContent></FooterContent>
    </div>
  )
}

export default Content
