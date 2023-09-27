import React, { useEffect, useState } from 'react'
import Card from '../Components/Items/Item'
import { ItemListConteiner } from '../Components/Items/ItemListConteiner'

const Productos = () => {

    

  return (
    <div>
        <ItemListConteiner url={"https://fakestoreapi.com/products"}/>
    </div>
  )
}

export default Productos