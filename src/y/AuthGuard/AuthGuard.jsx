import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthGuard({children}) {
 
  const token =   localStorage.getItem('token')
  return<>
   {token ? <Navigate to='/Home'/> :children }
   </>

 
}

//  const { token } = useContext(AuthContext);
// if (!token) {
//   return <Navigate to="/Home" replace />;
// }

// return children;