import React from 'react'
import MujikTop from '../../Component/MujikTop/MujikTop'
import Mujiksearch from '../../Component/Mujiksearch/Mujiksearch'
import ShopCart from '../../Component/ShopCart/ShopCart'
import ButtonPage from '../../Component/ButtonPage/ButtonPage'
import Yuklama from '../../Component/yuklama/Yuklama'
import Downlod from '../../ui/Downlod/Downlod'
import Interesno from '../../Component/Interesno/Interesno'

const Mujiktavar = ({setFiltr}) => {
  return (
    <div className='mujik'>
       <MujikTop/>
       <Mujiksearch setFiltr={setFiltr}/>
       <ShopCart/>
       <ButtonPage/>
       <Downlod down={"Не нашли то что искали?"}/>
       <Interesno/>
    </div>
  )
}

export default Mujiktavar