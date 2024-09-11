import React from 'react'
import CartTop from '../../Component/CartTop/CartTop'
import CartShop from '../../Component/CartShop/CartShop'
import Opisaniya from '../../Component/Opisaniya/Opisaniya'
import Odevaut from '../../Component/Odevaut/Odevaut'
import Downlod from '../../ui/Downlod/Downlod'

const Cart = () => {
  return (
    <div>
      <CartTop/>
      <CartShop/>
      <Opisaniya/>
      <Odevaut/>
      <Downlod down={"He нашли то что искали?"}/>
    </div>
  )
}

export default Cart