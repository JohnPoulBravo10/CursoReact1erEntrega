import React from 'react'

const Card = ({nombre,precio,descripcion,img}) => {
  return (
    <div className='card'> 
      <section>
        <img src="../../../public/Galeria5.jpg" alt="" />
      </section>
        <div>
          <h2>{nombre}</h2>
          <h4>{precio}</h4>
          <p>{descripcion}</p>
        </div>
    </div>
  )
}

export default Card