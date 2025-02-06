import React from 'react'
import FooterContent from './FooterContent'
import Cart from './Cart'
interface Props {
  propName?: string
}

const Content: React.FC<Props> = ({ propName }) => {
  return (
    <div className='container_sub overflow-auto w-full rounded-lg px-6'>
      <Cart Title='Nghệ sĩ phổ biến' Shape='rounded'></Cart>
      <Cart Title='Album và đĩa đơn nổi tiếng' Shape='squared'></Cart>
      <Cart Title='Radio nổi tiếng' Shape='squared'></Cart>
      <Cart Title='Bảng xếp hạng nổi bật' Shape='squared'></Cart>
      <Cart Title='Lựa chọn từ Spotify' Shape='squared'></Cart>

      <FooterContent></FooterContent>
    </div>
  )
}

export default Content
