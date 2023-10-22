import React from 'react'
import Counter from '../counter/Counter'

export const CardDetail = ({item,onAdd}) => {
  return (
    <div className='card-detail'> 
    <section>
      <img src={item.img} alt="" className='imagen-detail'/>
    </section>
      <div className='detalles-detail'>
        <h2>{item.nombre}</h2>
        <p>Stock {item.stock}</p>
        <h4>${item.precio}</h4>
        <Counter top={item.stock} onAdd={onAdd} text="Agregar al carrito"/>
      </div>
      
  </div>
  )
}
