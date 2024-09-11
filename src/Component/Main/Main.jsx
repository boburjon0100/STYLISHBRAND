import React from 'react'
import './Main.scss'
import Shopping from '../../ui/Shoping/Shopping'

const Main = () => {
  return (
    <section className='main'>
        <div className="container">
            <Shopping name ={"Мужской каталог"} img={<img src="./images/shoping1.png" alt="" />}/>
            <Shopping name ={"Женский каталог"} img={<img src="./images/shoping2.png" alt="" />}/>
            <Shopping name ={"Детский каталог"} img={<img src="./images/shoping3.png" alt="" />}/>
            <Shopping name ={"Товары для дома"} img={<img src="./images/shoping4.png" alt="" />}/>
        </div>
    </section>
  )
}

export default Main