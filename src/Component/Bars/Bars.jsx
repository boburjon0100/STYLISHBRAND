import React from 'react'
import './Bars.scss'
import { MdOutlineChevronRight } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Bars = ({bars , setBars}) => {
  return (
    <div className={bars ? 'bars active' :"bars"}>
     <p style={{paddingLeft:'10px' ,fontSize:"20px" , fontWeight:'600', color:"black"}}>Меню</p>
     <div className="nav">
     <p style={{fontWeight:"600"}}>Для него</p>
     <p>Для нее</p>
     <p>Для детей</p>
     <p>Для дома</p>
     </div>
     <div className="img">
        <img src="./images/cart2.png" alt="" />
        <img src="./images/cart3.png" alt="" />
     </div>
     <NavLink to={'/Mujik'}> <div className="box" onClick={()=> setBars(false)}><p>Сумки</p><MdOutlineChevronRight/></div></NavLink>
     <NavLink to={'/Cart'}> <div className="box" onClick={()=> setBars(false)}><p>Обувь</p><MdOutlineChevronRight/></div></NavLink>
     <NavLink to={'/'}> <div className="box" onClick={()=> setBars(false)}><p>B начиличие</p><MdOutlineChevronRight/></div></NavLink>
     <NavLink to={'/Heart'}> <div className="box" onClick={()=> setBars(false)}><p>Loremipsum</p><MdOutlineChevronRight/></div></NavLink>
     <NavLink to={'/cart'}> <div className="box" onClick={()=> setBars(false)}><p>Loremipsum</p><MdOutlineChevronRight/></div></NavLink>
     <NavLink to={'/'}> <div className="box" onClick={()=> setBars(false)}><p>Loremipsum</p><MdOutlineChevronRight/></div></NavLink>
     <NavLink to={'/Mujik'}> <div className="box" onClick={()=> setBars(false)}><p>Loremipsum</p><MdOutlineChevronRight/></div></NavLink>
    </div>
  )
}

export default Bars