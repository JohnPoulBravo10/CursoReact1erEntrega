import React from 'react'
import { ItemListConteiner } from '../Components/Items/ItemListConteiner'
import { useParams } from 'react-router-dom'

const Categoria = () => {
  const {categoria} = useParams()
  return (
    <div>
        <ItemListConteiner q categoria={categoria}/>
    </div>
  )
}

export default Categoria