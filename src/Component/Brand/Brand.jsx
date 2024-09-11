import React from 'react'
import './Brand.scss'
import { LuMoveRight } from 'react-icons/lu'

const Brand = () => {
  return (
    <section className='brand'>
       
            <div className="top3">
                <p>Одевайте маленких чуд в Stylishbrand!</p>
                <div className="box">
                    <p>Посмотреть каталог</p>
                    <LuMoveRight />
                </div>
            </div>
            <div className="botom">
              <img src="./images/brand.png" alt="" />
            </div>
        
    </section>
  )
}

export default Brand