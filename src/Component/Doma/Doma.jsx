import React from 'react'
import './Doma.scss'
import { LuMoveRight } from "react-icons/lu";
import Shop from '../../ui/Shop/Shop';


const Doma = () => {
  return (
    <section className='doma'>
          <div className="container">
          <div className="top4">
                <p>Товары для дома</p>
                <div className="box">
                    <p>Посмотреть все</p>
                    <LuMoveRight />
                </div>
            </div>
            <div className="botom">
              <Shop shop1={"Мужская Финка Brunello_Cucinelli "} imgshop={<img src="./images/doma1.png" alt=""></img>}/>
              <Shop shop1={"Сумка gucci для мужчин"} imgshop={<img src="./images/doma2.png" alt=""></img>}/>
              <Shop shop1={"Мужская Финка Brunello_Cucinelli  "} imgshop={<img src="./images/doma3.png" alt=""></img>}/>
              <Shop shop1={"Мокасины Hermes для мужчин"} imgshop={<img src="./images/doma4.png" alt=""></img>}/>
            </div>
          </div>
    </section>
  )
}

export default Doma