import React from 'react'
import './Downlod.scss'

const Downlod = ({down}) => {
  return (
    <section className='downlod'>
        <div className="container">
            <h1>{down}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="#Связаться"><button>Связаться c нами</button></a>
        </div>
    </section>
  )
}

export default Downlod