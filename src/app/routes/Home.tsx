import React from 'react'
import Content from '../../features/User/components/Content'

interface Props {
  propName?: string
}

const HomePage: React.FC<Props> = ({ propName }) => {
  return (
    <div className='flex h-full w-full'>
      <Content></Content>
    </div>
  )
}

export default HomePage
