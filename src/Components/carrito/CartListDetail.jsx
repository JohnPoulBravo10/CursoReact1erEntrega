import React, { useContext, useState } from 'react'
import CartDetail from './CartDetail'
import CartContext from '../../useContext/cartContext/CartContext'
import FormularioUsuario from './FormularioUsuario'
import UserContext from '../../useContext/userContext/userContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
    
    

const CartListDetail = () => {
    const { cart , removeItem, clear } = useContext(CartContext) 
    console.log(cart)
    const preciosTotales = cart.map(el => el.quantity*el.precio);
    const precioTotal = preciosTotales.reduce((total, precio) => total + precio, 0);
    const [user, setUser] = useState({
        name: "",
        email: ""
    })
    const handleChange = (e) => {
        const { target} = e;
    
        setUser({
            ...user,
            [target.name]: target.value
        });
    }
    const orden={
        comprador: user,
        fecha: new Date(),
        productos: cart,
        total: precioTotal
    }

    const [ compra , setCompra ] = useState(orden);

    const handleClick = (e) =>{
        const orden={
            comprador: user,
            fecha: new Date(),
            productos: cart,
            total: precioTotal
        }
        setCompra(orden)

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, orden) 
            .catch(err => console.log(err))
        
        clear()

        print()
    }

    const eliminar = () =>{
        clear()
    }

  return (
    <div className='cartListConteiner'>
        <p>Carrito  </p>
        <div className='itemsCarrito'>
        {
            cart.map((el) => (<CartDetail el={el}></CartDetail>))
        }
        </div>     
        <strong>TOTAL: {precioTotal}</strong>
        <button onClick={eliminar}>Limpiar carrito</button>
       <FormularioUsuario handleChange={handleChange} user={user} setUser={setUser}></FormularioUsuario>
        <button onClick={handleClick}>COMPRAR</button>
    </div>
  )
}

export default CartListDetail