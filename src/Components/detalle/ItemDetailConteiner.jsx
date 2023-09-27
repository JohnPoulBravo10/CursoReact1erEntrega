import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail';


export const ItemDetailConteiner = ({url}) => {
    const [item,setItem] = useState([]);

    const fetchProductos = () =>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setItem(data))
            .catch(error=>console.log(error))
    } 

    useEffect(() => {fetchProductos()},[])
  return (
    <>
    {        item !== null &&
                <ItemDetail item={item} />
            }
   </>
  )
}
