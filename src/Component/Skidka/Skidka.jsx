import React from 'react'
import './Skidka.scss'

const Skidka = () => {
  return (
    <section className='skidka'>
        <div className="container">
        <img src="./images/skidka.png" alt="" />
        <img className='skidka2' src="./images/skidka2.png" alt="" />
        <div className="text">
            <h1>ДО 20% СКИДКИ В КАТАЛОГЕ МУЖЧИН!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button>Подробнее</button>
        </div>
        </div>
    </section>
  )
}

export default Skidka