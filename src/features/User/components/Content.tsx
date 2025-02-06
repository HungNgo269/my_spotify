import React from 'react'
import FooterContent from './FooterContent'
import Cart from './Cart'
interface Props {
  propName?: string
}

const Content: React.FC<Props> = ({ propName }) => {
  return (
    <div className='container_sub overflow-auto w-full rounded-lg'>
      <Cart Title='Nghệ sĩ phổ biến'></Cart>

      <FooterContent></FooterContent>
    </div>
  )
}

export default Content
