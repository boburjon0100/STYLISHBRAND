import React, { useState } from "react";
import "./Mujiksearch.scss";
import { FaAngleRight } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { AiOutlineBars } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HiArrowsUpDown, HiOutlineXMark } from "react-icons/hi2";

const Mujiksearch = ({ setFiltr }) => {
  const [search , setSearch] = useState(false)
  return (
    <section className="search">
      <div className="container">
        <div className="topsearch">
          <div className="top1">
            <NavLink to={"/"}>
              <h6>Каталог</h6>
            </NavLink>
            <p>
              <FaAngleRight />
            </p>
            <h5>Мужские товары</h5>
          </div>
          <div className="top2">
            <NavLink to={"/"}>
              <h6>Для него</h6>
            </NavLink>
            <p>
              <FaAngleRight />
            </p>
            <h5>Сумки</h5>
          </div>
          <div className="botom1">
            <h1>Мужские товары</h1>
            <div className="input">
              <TfiSearch />
              <input maxLength={30} type="text" placeholder="Поиск" />
            </div>
            <div className={search ? "box3 active" :"box3"}>
              <h1>Сумки</h1>
              <div className="input1">
                <div className="tepas">
                  <HiArrowsUpDown />
                  <div className="bubble">
                    <p style={{color:"black" , paddingTop:"10px", paddingLeft:"10px", fontSize:"14px"}}>Самые дорогие сначала</p>
                    <p style={{color:"#8D8474" , paddingLeft:"10px",  fontSize:"14px"}}>Самые дорогие сначала</p>
                    <p style={{color:"#8D8474" , paddingLeft:"10px", fontSize:"14px"}}>Lorem Ipsum is simply</p>
                    <p style={{color:"#8D8474" , paddingLeft:"10px", fontSize:"14px"}}>Lorem Ipsum is simply</p>
                    <p style={{color:"#8D8474" , paddingLeft:"10px", fontSize:"14px"}}>Lorem Ipsum is simply</p>
                    <p style={{color:"#8D8474" , paddingLeft:"10px", fontSize:"14px"}}>Lorem Ipsum is simply</p>

                  </div>
                </div>
                <TfiSearch onClick={()=> setSearch(true)} />
              </div>
            </div>
            <div className={search ? "inputvalue active " :"inputvalue "}>
            <HiOutlineXMark onClick={()=> setSearch(false)}/>
              <input maxLength={30} type="text" placeholder="Поиск" />
            </div>
          </div>
        </div>
        <div className="linkbotom">
          <div className="left">
            <div onClick={() => setFiltr(true)} className="box1">
              <AiOutlineBars />
              <p>Bce фильтры</p>
            </div>
            <div className="box2">
              <div className="check">
                <FaCheck />
              </div>
              <p>B наличии!</p>
            </div>
            <div className="box3">
              <p>Gucci</p>
            </div>
            <div className="box4">
              <p>Dolce Baganna</p>
            </div>
            <div className="box5">
              <p>Brunello</p>
            </div>
            <div className="box6">
              <p>Adidas</p>
            </div>
            <div className="box7">
              <p>Nike</p>
            </div>
            <div className="box8">
              <p>Armani</p>
            </div>
          </div>
          <div className="right">
            <FaChevronDown />
            <p>Сортировать по</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mujiksearch;
