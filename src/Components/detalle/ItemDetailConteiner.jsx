import React, { useContext, useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';
import { getOneDocument } from '../../services/firebaseService';
import CartContext from '../../useContext/cartContext/CartContext';


export const ItemDetailConteiner = ({id}) => {
    const [item,setItem] = useState([]);

    useEffect( () => {
      getOneDocument("items",id)
      .then(res => setItem(res))
  }, [])

  const onAdd = (q) => {
    addItem(item, q)
};

const { addItem } = useContext(CartContext);

  return (
    <>
    {        item !== null &&
                <ItemDetail item={item} onAdd={onAdd}/>
            }
   </>
  )
}
