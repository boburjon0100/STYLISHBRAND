import React, { useState } from 'react'
import './Heartsing.scss'
import Shop from '../../ui/Shop/Shop'
import { TfiTrash } from "react-icons/tfi";

export const Heartsing = () => {
    const [img , setImg] = useState(true)
  return (
    <section className='heartsing'>
        <div className="container">
            <div className="topheart">
                <div className="text">
                    <h1>Избранные</h1>
                    <button className={img ? "buttonjon" :"buttonjon active"} onClick={() => setImg(false)} > <TfiTrash />Очистить избранные</button>
                </div>
                <div className={img ? "summa" : "summa active"}>
                    <div className="narx">
                        <p>Общая сумма</p>
                        <p><span>$400</span></p>
                    </div>
                   <a href="#Оформить"><button>Оформить все</button></a>
                </div>
            </div>
            <div className={img ? 'heartbotom ' :"heartbotom active"}>
                <Shop shop1={"Сумка gucci для мужчин"} imgshop={<img src="./images/camoy2.png" alt=""></img>}/>
                <Shop shop1={"Сумка gucci для мужчин"} imgshop={<img src="./images/camoy3.png" alt=""></img>}/>

            </div>
            <div className={img ? 'heartbotom1 ' :"heartbotom1 active"}>
                <div className="img">
                <img src="./images/not.png" alt="" />
                <p>Пока что тут пусто :(</p>
                </div>

            </div>
        </div>
    </section>
  )
}
