import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='card'> 
      <section>
        <img src={item.image} alt="" className='imagen'/>
      </section>
        <div className='detalles'>
          <h2>{item.title}</h2>
          <h4>{item.price}</h4>
          <p>{item.description}</p>
          <Link to={`/item/${item.id}`}>
           <button>Detalles</button>
        </Link>
        </div>
        
        
    </div>
  )
}

export default Item