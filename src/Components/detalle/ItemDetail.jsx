import React from 'react'
import { CardDetail } from './CardDetail'

export const ItemDetail = ({item, onAdd}) => {
  return (
    <CardDetail item={item} onAdd={onAdd}/>
  )
}
