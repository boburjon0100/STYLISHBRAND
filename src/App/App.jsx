import React, { useState } from 'react'
import './App.css'
import Navbar from '../Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Foter from '../Component/Foter/Foter'
import Mujiktavar from '../Pages/Mujiktavar/Mujiktavar'
import Filtr from '../Component/Filtr/Filtr'
import Heart from '../Pages/Heart/Heart'
import Cart from '../Pages/Cart/Cart'
import Bars from '../Component/Bars/Bars'


const App = () => {
  const [filtr , setFiltr] = useState(false)
  const [bars , setBars] = useState(false)
  return (
    <div className='app'>
      <Filtr filtr={filtr} setFiltr={setFiltr}/>
      <Navbar setBars={setBars}/>
      <Bars bars={bars} setBars={setBars}/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/Mujik' element={<Mujiktavar setFiltr={setFiltr}/>} />
        <Route  path='/Heart' element={<Heart/>} />
        <Route  path='/Cart' element={<Cart/>} />
      </Routes>
      <Foter/>
    </div>
  )
}

export default App