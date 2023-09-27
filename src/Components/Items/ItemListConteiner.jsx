import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'

export const ItemListConteiner = ({url}) => {
    const [items,setItems] = useState([]);

    const fetchProductos = () =>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setItems(data))
            .catch(error=>console.log(error))
    } 

    useEffect(() => {fetchProductos()},[])
  return (
    <div className='contenedor-item-list'>
        {        items !== null &&
                    <ItemList items={items} />
                }
    </div>
  )
}
