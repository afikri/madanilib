import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Register } from './pages'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App