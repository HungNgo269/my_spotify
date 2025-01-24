import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import MainLayout from '../layouts/MainLayout/MainLayout'
import Callback from '../components/common/CallBack'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/callback' element={<Callback />} />

          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
