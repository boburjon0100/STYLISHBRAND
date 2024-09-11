import React from 'react'
import './Filtr.scss'
import { HiOutlineXMark } from "react-icons/hi2";
import FiltrShop from '../../ui/FiltrShop/FiltrShop'
import { VscRefresh } from "react-icons/vsc";

const Filtr = ({filtr ,setFiltr}) => {
  return (
    <section className={filtr ? "filtrSection active2" : "filtrSection"}>
        <div className="filtr">
        <div className="filtrtop">
            <p>Bce фильтры</p>
            <HiOutlineXMark  onClick={() => setFiltr(false)} />
        </div>
        <FiltrShop/>
        <div className="filtrbotom">
            <button>Сохранить</button>
            <div className="takror">
            <VscRefresh />
            </div>
        </div>
    </div>
    </section>
  )
}

export default Filtr