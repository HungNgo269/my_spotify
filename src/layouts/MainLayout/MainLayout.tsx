import React from 'react'
import Header from '../../features/User/components/Header'
import SideBar from '../../features/User/components/SideBar'
import { Outlet } from 'react-router'
import { Allotment } from 'allotment'
import 'allotment/dist/style.css'

interface Props {
  propName?: string
}

const MainLayout: React.FC<Props> = ({}) => {
  return (
    <div
      className='p-2 h-full min-h-full w-full relative bg-black
     overflow-hidden transition-colors z-0 flex flex-col'
    >
      <div className='header_container'>
        <Header></Header>
      </div>
      <>
        <Allotment className='grid grid-cols-[250px,1fr] h-full w-full'>
          <Allotment.Pane minSize={280} maxSize={420}>
            <SideBar></SideBar>
          </Allotment.Pane>
          <Allotment.Pane snap>
            <Outlet></Outlet>
          </Allotment.Pane>
        </Allotment>
      </>
    </div>
  )
}

export default MainLayout
