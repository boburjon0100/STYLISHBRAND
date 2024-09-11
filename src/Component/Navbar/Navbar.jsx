import React from 'react'
import './Navbar.scss'
import { MdOutlinePhone } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import {Link, NavLink} from "react-router-dom"
import { HiBars3 } from "react-icons/hi2";


const Navbar = () => {
  return (
    <section className='navbar'>
      <div className="container">
      <HiBars3 className='bars2'/>
        <ul>
          <li>
            <a href="#">Для него</a>  
          </li>
          <li>
            <a href="#">Для нее</a>  
          </li>
          <li>
            <a href="#">Для детей</a>  
          </li>
          <li>
            <a href="#">Товары для дома</a>  
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