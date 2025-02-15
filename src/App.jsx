import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './y/Layout/Layout'
import Home from './y/Home/Home'
import Categories from './y/Categories/Categories'
import Cart from './y/Cart/Cart'
import Brand from './y/Brand/Brand'
import Login from './y/Login/Login'
import Signup from './y/Signup/Signup'
import Product from './y/Product/Product'
import Error from './y/Error/Error'
import AuthContextProvider from './y/context/AutheContext'
import Guard from './y/Guard/Guard';
import { QueryClient, QueryClientProvider } from 'react-query'
import Forgetpass from './y/forgetpass/Forgetpass'
import Productdetaills from './y/Productdetailss/Productdetaills'
import Cardcontext from './y/context/Cardcontext'
import Wishlistcontext from './y/context/Wishlistcontext'
import Whilist from './y/whilist/Whilist';
import Ordera from './y/Ordera/Ordera'
import Allorders from './y/allorders/Allorders'
import AuthGuard from './y/AuthGuard/AuthGuard'
import ResetPassword from './y/restpassword/Restpassword'
import VerifyResetCode from './y/Verfiycode/VerifyResetCode'


const queryclient = new QueryClient()

const routers = createHashRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Guard><Home/></Guard>},
    {path:"Home",element:<Guard><Home/></Guard>},
    {path:"Categories",element:<Guard><Categories/></Guard>},
    {path:"Product",element:<Guard><Product/></Guard>},
    {path:"Ordera",element:<Guard><Ordera/></Guard>},
    {path:"Allorders",element:<Guard><Allorders/></Guard>},
    {path:"Cart",element:<Guard><Cart/></Guard>},
    {path:"Brand",element:<Guard><Brand/></Guard>},
    {path:"Login",element:<AuthGuard><Login/></AuthGuard>},
    {path:"Signup",element:<AuthGuard><Signup/></AuthGuard>},
    {path:"*",element:<Error/>},
    {path:"Forgetpass",element:<Forgetpass/>},
    {path:"ResetPassword",element:<ResetPassword/>},
    {path:"VerifyResetCode",element:<VerifyResetCode/>},
    {path:"details/:id",element:<Guard><Productdetaills/></Guard>},
    {path:"wishlist",element:<Guard><Whilist/></Guard>},


  ]}
])
export default function App() {
  return (
       <AuthContextProvider>
        <Cardcontext>
        <Wishlistcontext>
        <QueryClientProvider client={queryclient}>

<RouterProvider router={routers}/>

        
        
        </QueryClientProvider> 
        </Wishlistcontext>
       </Cardcontext>

       </AuthContextProvider>
    

  )
}
