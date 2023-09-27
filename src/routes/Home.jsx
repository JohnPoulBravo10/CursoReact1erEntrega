import React from 'react'
import Carrusel from '../Components/carrusel/Carrusel'
import { Carruselv2 } from '../Components/carrusel/Carruselv2'


export const Home = () => {
  return (
       <div className='home'>
        <h1>Nuestros mejores productos</h1>
        <hr />
        <Carruselv2/>
       </div>
  )
}
