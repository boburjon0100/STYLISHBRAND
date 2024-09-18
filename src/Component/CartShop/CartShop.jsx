import React, { useState } from "react";
import "./CartShop.scss";
import { BsBoxSeam, BsTelegram } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const CartShop = () => {
  const images = [
    "./images/cart11.png",
    "./images/cart12.png",
    "./images/cart13.png",
    "./images/cart16.png",
  ];
  const [rightImage, setRightImage] = useState("./images/cart11.png");

  function handleClick(imageUrl) {
    setRightImage(imageUrl);
  }

  return (
    <section className="cartshop">
      <div className="container">
        <div className="left">
          <div className="leftimg">
            <div className="heart">
              <IoMdHeartEmpty />
            </div>
            {images &&
              images.map((item, index) => {
                return (
                  <img
                    src={item}
                    alt=""
                    key={index}
                    onClick={() => handleClick(item)}
                  />
                );
              })}
          </div>
          <div className="rightimg">
            <img src={rightImage} alt="" />
          </div>
        </div>
        <div className="right">
          <p>Мужская одежда</p>
          <h1>Мужская Финка Brunello Cucinelli </h1>
          <p
            style={{
              color: "#534C3E",
              paddingTop: "15px",
              fontSize: "16px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <p
            style={{
              color: "#8D8474",
              paddingTop: "20px",
              fontSize: "16px",
            }}
          >
            Бренд
          </p>
          <p
            style={{
              width: "140px",
              color: "black",
              paddingTop: "5px",
              fontSize: "18px",
              fontWeight: "500",
              borderBottom: "1px solid black",
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
                <button style={{ backgroundColor: "#E6C08B", border: "none" }}>
                  Черный
                </button>
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
                <button style={{ backgroundColor: "#E6C08B", border: "none" }}>
                  M
                </button>
                <button>XL</button>
                <button>XXL</button>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="narx">
              <p
                style={{
                  fontSize: "14px",
                  color: "#8D8474",
                }}
              >
                Цена
              </p>
              <p
                style={{
                  fontSize: "28px",
                  color: "black",
                }}
              >
                $200
              </p>
            </div>
            <a href="#Oпepaтopoм">
              <button>
                <BsTelegram />
                Связаться c оператором
              </button>
            </a>
          </div>
          <div className="dostavka">
            <button>
              <BsBoxSeam /> Доставка
            </button>
            <p>
              Доставка по <span>Ташкенту</span> осуществляется за{" "}
              <span>1-3 дней</span>, A по <span>Узбекистану</span> за{" "}
              <span>1-3 дня</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartShop;
