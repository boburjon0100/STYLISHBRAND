import React from "react";
import "./Foter.scss";
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
            <a href="#foter">Главная</a>
          </li>
          <li>
            <a href="#foter">Мужской каталог</a>
          </li>
          <li>
            <a href="#foter">Женский каталог</a>
          </li>
          <li>
            <a href="#foter">Детские Одежды</a>
          </li>
          <li>
            <a href="#foter">Товары для дома</a>
          </li>
        </ul>
        <div className="boxes">
          <div className="box">
            <a href="#instagram">
              <LuInstagram />
            </a>
          </div>
          <div className="box">
            <a href="#youtube">
              <FaYoutube />
            </a>
          </div>
          <div className="box">
            <a href="#telegram">
              <BsTelegram />
            </a>
          </div>
          <div className="box">
            <a href="#whatsup">
              <IoLogoWhatsapp />
            </a>
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
