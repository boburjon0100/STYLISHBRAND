import React from 'react'
import './Odevaut.scss'
import OdevautShop from '../../ui/OdevautShop/OdevautShop'
import Shop from '../../ui/Shop/Shop'

const Odevaut = () => {
  return (
    <section className='odevaut'>
        <div className="container">
            <div className="odevauttop">
                <p>C этим одевают</p>
            </div>
            <div className="odevautbotom">
              <OdevautShop/>
              <OdevautShop/>
              <OdevautShop/>
              <OdevautShop/>
              <Shop shop1={"Мужская Финка Brunello_Cucinelli "} imgshop = {<img src="./images/cart1.png" alt="" />}/>
            <Shop shop1={"Мужская Финка Brunello_Cucinelli "} imgshop = {<img src="./images/cart2.png" alt="" />}/>
            <Shop shop1={"Мужская Финка Brunello_Cucinelli "} imgshop = {<img src="./images/cart3.png" alt="" />}/>
            <Shop shop1={"Мужская Финка Brunello_Cucinelli "} imgshop = {<img src="./images/cart4.png" alt="" />}/>
            </div>
        </div>
    </section>
  )
}

export default Odevaut