import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <section className='header'>
        <div className="container">
            <div className="left">
                <img src="./images/headerlogo.png" alt="" />
                <h2>Измени свой имидж c Stylishbrand</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button>Посмотреть каталог</button>
            </div>
            <div className="right">
              <img src="./images/header2.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Header