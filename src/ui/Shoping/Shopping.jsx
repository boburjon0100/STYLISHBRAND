import React from 'react'
import './Shopping.scss'
import { LuMoveRight } from "react-icons/lu";
import {Link} from "react-router-dom"

const Shopping = ({name , img}) => {
  return (
    <Link to={"/Mujik"}><div className='shopping' >
    {img}
    <div className="text">
        <p>{name}</p>
        <LuMoveRight />
    </div>
</div></Link>
  )
}

export default Shopping