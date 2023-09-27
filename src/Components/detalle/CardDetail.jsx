import React from 'react'

export const CardDetail = ({item}) => {
  return (
    <div className='card-detail'> 
    <section>
      <img src={item.image} alt="" className='imagen-detail'/>
    </section>
      <div className='detalles-detail'>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <h4>${item.price}</h4>
        <button>Agregar al carrito</button>
      </div>
      
  </div>
  )
}
