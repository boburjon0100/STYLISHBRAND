import React from 'react'
import './ButtonPage.scss'
import { FaAngleRight } from "react-icons/fa6";
const ButtonPage = () => {
  return (
    <section className='buttonpage'>
        <div className="contanier">
          <div className="texter">
            <p>1</p>
            <p>из</p>
            <p>16548</p>
          </div>
          <button><p>Следющий</p>
          <FaAngleRight />
          </button>
        </div>
    </section>
  )
}

export default ButtonPage