import React from 'react'
import './Samitovar.scss'
import { LuMoveRight } from "react-icons/lu";
import { LuMoveLeft } from "react-icons/lu";
import Shop from '../../ui/Shop/Shop';

const Samitovar = () => {
  return (
    <section className='samitovar'>
        <div className="container">
            <div className="top5">
            <p>Самые популярные товары</p>
            <div className="box">
            <LuMoveLeft />
            <LuMoveRight />
            </div>
            </div>
            <div className="bottomota">
            <div className="botom">
            <Shop shop1={"Мужская Финка Brunello_Cucinelli "}  imgshop={<img src="./images/shop1.png" alt="" />}/>
            <Shop shop1={"Сумка gucci для мужчин"}  imgshop={<img src="./images/shop2.png" alt="" />}/>
            <Shop shop1={"Мужская Финка Brunello_Cucinelli "}  imgshop={<img src="./images/shoping1.png" alt="" />}/>
            <Shop shop1={"Мокасины Hermes для мужчин"}  imgshop={<img src="./images/shop4.png" alt="" />}/>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Samitovar