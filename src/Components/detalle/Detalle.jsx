import React from 'react'
import { ItemDetailConteiner } from './ItemDetailConteiner'
import { useParams } from 'react-router-dom'

export const Detalle = () => {
  const { id } = useParams()
  return (
    <ItemDetailConteiner url={`https://fakestoreapi.com/products/${id}`}/>
  )
}
