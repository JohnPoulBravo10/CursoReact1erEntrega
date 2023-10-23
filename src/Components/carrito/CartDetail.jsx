import React, { useContext } from 'react'
import CartContext from '../../useContext/cartContext/CartContext'

const CartDetail = ({el}) => {
    const { cart, removeItem, clear } = useContext(CartContext);

    const handleClick = () =>{
      removeItem(el.id)
    }

  return (
    <div className='cartDetail'>
        <img src={el.img} alt="" className='imgCart'/>
        <p>{el.nombre}</p>
        <p>${el.precio}</p>
        <p>{el.quantity}</p>
        <button onClick={handleClick}>Eliminar del carrito</button>
    </div>
    
  )
}

export default CartDetail