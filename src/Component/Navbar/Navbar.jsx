import React from 'react'
import './Navbar.scss'
import { MdOutlinePhone } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import {Link, NavLink} from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";


const Navbar = ({setBars}) => {
  return (
    <section className='navbar'>
      <div className="container">
      <HiBars3 onClick={()=> setBars(true)} className='bars2'/>
        <ul>
          <li>
            <Link to={"/"}>Для него</Link>
          </li>
          <li>
          <Link to={"/Mujik"}>Для нее</Link>  
          </li>
          <li>
          <Link to={"/Heart"}>Для детей</Link> 
          </li>
          <li>
          <Link to={"/Cart"}>Товары для дома</Link> 
          </li>
        </ul>
        <div className="logo">
          <Link to={"/"}><h1>STYLISHBARND</h1></Link>
          <p >Бесплатный возврат в тчение 14 дней</p></div>
        <div className="icon">
          <div className="phone">
          <MdOutlinePhone />
          <p>+998 97 628 28 82</p>
          </div>
          <div className="language">
          <TfiWorld />
           <p>Ru</p>
           <div className="lang">
           <p>Ru</p>
           <p>Uz</p>
           <p>En</p>
           </div>
          </div>
          <NavLink to={"/Heart"}><IoMdHeartEmpty  /></NavLink>
        </div>
        </div>
    </section>
  )
}

export default Navbar