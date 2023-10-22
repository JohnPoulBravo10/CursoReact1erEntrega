import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='card'> 
      <section>
        <img src={item.img} alt="" className='imagen'/>
      </section>
        <div className='detalles'>
          <h2>{item.nombre}</h2>
          <h4>${item.precio}</h4>
          <Link to={`/item/${item.id}`}>
           <button>Detalles</button>
          </Link>
        </div>
        
        
    </div>
  )
}

export default Item