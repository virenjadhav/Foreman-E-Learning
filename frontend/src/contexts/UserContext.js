import React, { createContext, useState } from 'react'
export const UserContext = createContext()

const UserContextProvider = (props) => {
    const [user, setUser] = useState([])
    const [logged_in, setLoggedIn] = useState(false)
    const baseUrl = "http://localhost:5000"
    return (
         <UserContext.Provider 
            value={{user,logged_in,baseUrl,setUser,setLoggedIn}}>
               {props.children}
         </UserContext.Provider>
    )
  
}

export default UserContextProvider