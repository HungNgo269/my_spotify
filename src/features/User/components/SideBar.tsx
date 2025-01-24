import React from 'react'
import FooterSideBar from './FooterSideBar'
import library from '../../../assets/images/library.svg'
import Section from './Section'
interface Props {
  propName?: string
}

const SideBar: React.FC<Props> = ({ propName }) => {
  return (
    <div className='container_sub overflow-auto w-full rounded-lg'>
      <div className='flex flex-row items-center justify-between pt-3 px-4 pb-2'>
        <div className='flex flex-row items-center px-2 py-1'>
          <img src={library} className='w-6 h-6 min'></img>
          <span>Thư viện</span>
        </div>
        <button>+</button>
      </div>
      <div className='flex flex-col justify-between pt-0 px-2 pb-2 overflow-auto gap-2'>
        <div className='section rounded-lg'>
          <Section
            mainText='Tạo danh sách phát đầu tiên của bạn'
            subText='Rất dễ!Chúng tôi sẽ giúp bạn'
            buttonName='Tạo danh sách phát'
            size='32px'
          ></Section>
        </div>
        <div className='section rounded-lg'>
          <Section
            mainText='Hãy cùng tìm và theo dõi một số pod cast'
            subText='Chúng tôi sẽ cập nhật cho bạn thông tin về các tập mới'
            buttonName='Duyệt xem podcast'
            size='32px'
          ></Section>
        </div>
      </div>
      <FooterSideBar></FooterSideBar>
    </div>
  )
}

export default SideBar
