import React from 'react'
import './Opisaniya.scss'
import { IoIosArrowDown, IoIosCheckmarkCircleOutline } from "react-icons/io";
const Opisaniya = () => {
  return (
    <section className='opisaniya'><div className="container">
        <div className="top15">
            <p> Описания товара</p>
            <IoIosArrowDown />
        </div>
        <div className="leftopisaniya">
            <div className="top16"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p></div>
            <div className="leftopisaniya1">
                <p style={{fontSize:"16px",color:"#8D8474" , paddingTop:"10px"}}>Страна производство</p>
                <p style={{fontSize:"16px",color:"black" ,fontWeight:"600" , paddingTop:"5px"}}>Италии</p>
                <p style={{fontSize:"16px",color:"black" ,fontWeight:"600" , paddingTop:"30px"}}>Основные моменты</p>
                <div className="box"><IoIosCheckmarkCircleOutline />
                <p>Черный</p>
                </div>
                <div className="box"><IoIosCheckmarkCircleOutline />
                <p>подпись GG Supreme печать</p>
                </div>
                <div className="box"><IoIosCheckmarkCircleOutline />
                <p>фирменная отделка в виде полосок Web</p>
                </div>
                <div className="box"><IoIosCheckmarkCircleOutline />
                <p>эластичный пояс с внутренним шнурком</p>
                </div>
                <div className="box"><IoIosCheckmarkCircleOutline />
                <p>два боковых врезных кармана</p>
                </div>
                <div className="box"><IoIosCheckmarkCircleOutline />
                <p>прямая нога</p>
                </div>
                <div className="box"><IoIosCheckmarkCircleOutline />
                <p>частичная сетчатая подкладка</p>
                </div>
            </div>
            <div className="rightopisaniya1">
                <p style={{fontSize:"16px",color:"black" ,fontWeight:"600" , paddingTop:"10px"}}>Состав</p>
                <p style={{fontSize:"16px",color:"black" ,fontWeight:"400" , paddingTop:"10px"}}>Внешний материал: полиэстер 100%</p>
                <p style={{fontSize:"16px",color:"black" ,fontWeight:"400" , paddingTop:"10px"}}>Подкладка: Полиамид 100%</p>
                <p style={{fontSize:"16px",color:"black" ,fontWeight:"600" , paddingTop:"35px"}}>Инструкции по стирке</p>
                <p style={{fontSize:"16px",color:"black" ,fontWeight:"400" , paddingTop:"10px"}}>Мытье рук</p>

            </div>
        </div>
        <div className="rightopisaniya">
            <img src="./images/cart11.png" alt="" />
        </div>
        </div></section>
  )
}

export default Opisaniya