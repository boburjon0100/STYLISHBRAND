import React from "react";
import "./CartShop.scss";
import { BsBoxSeam, BsTelegram } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const CartShop = () => {
  return (
    <section className="cartshop">
      <div className="container">
        <div className="left">
          <div className="leftimg">
          <div  className="heart">
            <IoMdHeartEmpty />
            </div>
            <img src="./images/cart11.png" alt="" />
            
            <img src="./images/cart12.png" alt="" />
            <img src="./images/cart13.png" alt="" />
            <img src="./images/cart15.png" alt="" />
          </div>
          <div className="rightimg">
            <img src="./images/cart11.png" alt="" />
          </div>
        </div>
        <div className="right">
          <p>Мужская одежда</p>
          <h1>Мужская Финка Brunello Cucinelli </h1>
          <p
            style={{
              color: "#534C3E",
              "padding-top": "15px",
              "font-size": "16px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <p
            style={{
              color: "#8D8474",
              "padding-top": "20px",
              "font-size": "16px",
            }}
          >
            Бренд
          </p>
          <p
            style={{
              width: "140px",
              color: "black",
              "padding-top": "5px",
              "font-size": "18px",
              "font-weight": "500",
              "border-bottom": "1px solid black",
              cursor: "pointer",
            }}
          >
            Brunello Cucinelli{" "}
          </p>
          <div className="size">
            <div className="color">
              <div className="top12">
                <p>Цвета</p>
              </div>
              <div className="button">
                <button style={{backgroundColor:"#E6C08B" , border:"none"}}>Черный</button>
                <button>Белый</button>
                <button>Зеленый</button>
              </div>
            </div>
            <div className="size1">
              <div className="top13">
                <p>Размеры</p>
                </div>
                <div className="button2">
                <button>S</button>
                <button style={{backgroundColor:"#E6C08B" , border:"none"}}>M</button>
                <button>XL</button>
                <button>XXL</button>
                
              </div>
            </div>
          </div>
          <div className="price">
            <div className="narx">
                <p  style={{
                    "fontSize":"14px", 
                    color:"#8D8474"
            }}>Цена</p>
                <p  style={{
                    "fontSize":"28px", 
                    color:"black"
            }}>
                $200
                </p>
            </div>
            <a href="#Oпepaтopoм"><button><BsTelegram/>Связаться c оператором</button></a>
          </div>
          <div className="dostavka">
            <button><BsBoxSeam /> Доставка</button>
            <p>Доставка по <span>Ташкенту</span> осуществляется за <span>1-3 дней</span>, A по <span>Узбекистану</span> за <span>1-3 дня</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartShop;
