import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Sarasa from '../Sarasa'

function Catalogo() {
  return (
    <div>
        Catalogo
        <Routes>
            <Route path='/sarasa' element={<Sarasa/>} />
        </Routes>
    </div>
  )
}

export default Catalogo