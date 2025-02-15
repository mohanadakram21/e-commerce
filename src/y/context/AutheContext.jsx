import { jwtDecode } from 'jwt-decode';
import React, {createContext, useEffect, useState } from 'react'




 export const AuthContext = createContext(null)


export default function AuthContextProvider({ children }) {
   let[token,setToken] = useState(localStorage.getItem('token'))
       
      //  useEffect(() => {
  
         
      //          const decoded = jwtDecode(token); 
       
      //          if (decoded.id) {
      //            localStorage.setItem("userId", decoded.id); 
      //          } 
       
           
       
      //  }, [token])




      useEffect(() => {
        if (token && typeof token === 'string') {
          try {
            const decoded = jwtDecode(token);
    
            if (decoded.id) {
              localStorage.setItem('userId', decoded.id);
            }
          } catch (error) {
            console.error('Failed to decode token:', error);
          }
        }
      }, [token]);

  return <>

   <AuthContext.Provider value={{token,setToken}}> 

       {children} 

   </AuthContext.Provider> 
  
  </>
}
