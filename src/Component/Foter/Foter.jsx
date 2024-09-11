import React from "react";
import './Foter.scss'
import { LuInstagram } from "react-icons/lu";
import { BsTelegram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Foter = () => {
  return (
    <section className="foter">
      <div className="container">
        <img src="./images/foter.png" alt="" />
        <ul>
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Мужской каталог</a>
          </li>
          <li>
            <a href="#">Женский каталог</a>
          </li>
          <li>
            <a href="#">Детские Одежды</a>
          </li>
          <li>
            <a href="#">Товары для дома</a>
          </li>
        </ul>
        <div className="boxes">
            <div className="box">
            <LuInstagram />
            </div>
            <div className="box">
            <FaYoutube />
            </div>
            <div className="box">
            <BsTelegram />
            </div>
            <div className="box">
            <IoLogoWhatsapp />
            </div>
        </div>
        <div className="box1">
            <p>StylishBrand.uz 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Foter;
