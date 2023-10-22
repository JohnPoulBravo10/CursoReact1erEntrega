import React, { useState } from 'react'
import UserContext from './userContext'

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "  ",
        email: "  ",
    })

    const editUser = (newName, newAge) => {
        setUser({
            name: newName,
            email: newAge
        })
    } 

    const value = {
        user,setUser,
        editUser
    }
  return (
   <UserContext.Provider value={value}>
        { children }
   </UserContext.Provider>
  )
}

export default UserContextProvider