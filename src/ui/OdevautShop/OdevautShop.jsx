import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdOutlineShoppingBag } from "react-icons/md";
import './OdevautShop.scss'

const OdevautShop = () => {
  return (
    <div className='odevautShop'>
        <img src="./images/cart5.png" alt="" />
        <p style={{fontSize:"16px", color:"#8D8474" ,paddingTop:"10px"}}>Мужские одежды</p>
        <p style={{fontSize:"20px", color:"black" ,paddingTop:"10px" ,fontWeight:"600"}}>Мужская Финка Brunello_Cucinelli </p>
        <p style={{fontSize:"24px", color:"black" ,paddingTop:"15px" ,fontWeight:"500"}}>$200</p>
        <div className="box">
            <button>Выбрать размер <IoIosArrowDown/></button>
            <MdOutlineShoppingBag />
        </div>
    </div>
  )
}

export default OdevautShop