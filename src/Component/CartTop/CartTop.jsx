import React from "react";
import "./CartTop.scss";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CartTop = () => {
  return (
    <section className="carttop">
      <div className="container">
        <NavLink to={'/'}><p><span>Каталог</span></p></NavLink>
        <p>
          <span><FaAngleRight /></span>
        </p>
        <NavLink to={"/Mujik"}><p>Мужские товары</p></NavLink>
        <p>
          <FaAngleRight />
        </p>
        <p> Поло и Финки</p>
        <p>
          <FaAngleRight />
        </p>
        <p>Мужская Финка Brunello Cucinelli</p>
      </div>
    </section>
  );
};

export default CartTop;
