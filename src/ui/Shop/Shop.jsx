import React from 'react'
import './Shop.scss'
import { RiTelegramLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Shop = ({shop1 , imgshop}) => {
  const navigate = useNavigate();
  return (
    <div className='shop'>
            {imgshop}
            <div  className="heart">
            <IoMdHeartEmpty />
            </div>
            <div onClick={() => navigate("/Cart")}  className="box">
                <p>Мужские одежды</p>
                <h2>{shop1}</h2>
                <div className="narx">
                    <p>$200</p>
                    <RiTelegramLine />
            </div>
        </div>
    </div>
  )
}

export default Shop