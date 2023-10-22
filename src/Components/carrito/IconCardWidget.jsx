import React, { useContext } from 'react'
import {BsCart2} from "react-icons/bs"
import CartContext from '../../useContext/cartContext/CartContext'

const IconCardWidgate = () => {
  const { cart } = useContext(CartContext)
  return (
    <div>
        <BsCart2/><span></span>{cart.length}  </div>
  )
}

export default IconCardWidgate