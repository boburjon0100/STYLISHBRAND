import React from 'react'
import './Interesno.scss'
import Shoping from '../../ui/Shoping/Shopping'

const Interesno = () => {
  return (
    <section className='interes'>
        <div className="container">
            <div className="top6">
                <p>Возможно будет интересно</p>
                
            </div>
            <div className="bottom">
            <Shoping name ={"Женский каталог"} img={<img src="./images/shoping2.png" alt="" />}/>
            <Shoping name ={"Детские Одежды"} img={<img src="./images/shoping3.png" alt="" />}/>
            <Shoping name ={"Товары для дома"} img={<img src="./images/shoping4.png" alt="" />}/>
            </div>
        </div>
    </section>
  )
}

export default Interesno