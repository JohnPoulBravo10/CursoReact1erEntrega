import React, { useContext } from 'react'

const FormularioUsuario = ({user, setUser,handleChange}) => {
   
  return (
    <div>
        <label htmlFor="name">Ingrese su nombre</label>
        <input onChange={handleChange} type="text" id="name" name='name' value={user.name}/>
        <label htmlFor="email">Ingrese su email</label>
        <input onChange={handleChange} type="text" id="email" name='email' value={user.email}/>
    </div>
  )
}

export default FormularioUsuario