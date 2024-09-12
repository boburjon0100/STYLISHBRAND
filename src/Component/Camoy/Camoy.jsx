import React from 'react'
import { LuMoveRight } from "react-icons/lu";
import './Camoy.scss';
import Shop from '../../ui/Shop/Shop'

const Camoy = () => {
  return (
    <section className='camoy'>
        <div className="container">
            <div className="top2">
                <p>Bce для нее самой</p>
                <div className="box">
                    <p>Посмотреть все</p>
                    <LuMoveRight />
                </div>
            </div>
           <div className="botomota">
           <div className="botom">
              <Shop shop1={"Мужская Финка Brunello_Cucinelli "} imgshop={<img src="./images/camoy1.png" alt=""></img>}/>
              <Shop shop1={"Сумка gucci для мужчин"} imgshop={<img src="./images/camoy2.png" alt=""></img>}/>
              <Shop shop1={"Мужская Финка Brunello_Cucinelli "} imgshop={<img src="./images/camoy3.png" alt=""></img>}/>
              <Shop shop1={"Мокасины Hermes для мужчин"} imgshop={<img src="./images/camoy4.png" alt=""></img>}/>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Camoy