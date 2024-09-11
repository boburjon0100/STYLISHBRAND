import React from 'react'
import Header from '../../Component/Header/Header'
import Main from '../../Component/Main/Main'
import Samitovar from '../../Component/Samitovar/Samitovar'
import Skidka from '../../Component/Skidka/Skidka'
import Camoy from '../../Component/Camoy/Camoy'
import Brand from '../../Component/Brand/Brand'
import Doma from '../../Component/Doma/Doma'
import Yuklama from '../../Component/Yuklama/Yuklama'

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <Main/>
        <Samitovar/>
        <Skidka/>
        <Camoy/>
        <Brand/>
        <Doma/>
        <Yuklama/>
    </div>
  )
}

export default Home