import React from 'react'
import LinkSmallText from '../../../components/common/LinkSmallText'
import ButtonHover from '../../../components/common/ButtonHover'

interface Props {
  propName?: string
}

const FooterSideBar: React.FC<Props> = ({ propName }) => {
  return (
    <div className='flex flex-wrap '>
      <LinkSmallText text='Pháp lý' link='/legal'></LinkSmallText>
      <LinkSmallText text='Trung tâm an toàn và riêng tư' link='/legal'></LinkSmallText>
      <LinkSmallText text='Chính sách quyền riêng tư' link='/legal'></LinkSmallText>
      <LinkSmallText text='Cookie' link='/legal'></LinkSmallText>
      <LinkSmallText text='Giới thiệu quảng cáo' link='/legal'></LinkSmallText>
      <LinkSmallText text='Hỗ trợ tiếp cận' link='/legal'></LinkSmallText>
      <ButtonHover background='black' text='Tiếng việt'></ButtonHover>
    </div>
  )
}

export default FooterSideBar
