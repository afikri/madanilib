import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { 
  Dashboard, 
  Document, 
  External, Internal, Literature, Login, Press, Publication, Register, Spatial, Training } from './pages'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='external' element={<External />} />
        <Route path='internal' element={<Internal />} />
        <Route path='literature' element={<Literature />} />
        <Route path='internal' element={<Internal />} />
        <Route path='press' element={<Press />} />
        <Route path='publication' element={<Publication />} />
        <Route path='spatial' element={<Spatial />} />

        <Route path='training' element={<Training />} />
        <Route path='document' element={<Document />} />
      </Routes>
    </div>
  )
}

export default App