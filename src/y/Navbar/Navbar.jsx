import React, { useContext, useState } from 'react'
import Logo from '../../assets/freshcart-logo.svg'
import { Link, Navigate, NavLink } from 'react-router-dom'
 import { AuthContext } from '../context/AutheContext'
import { cardcontext } from '../context/Cardcontext'
import Whilist from './../whilist/Whilist';


export default function Navbar() {

  const [toggle, setIsToggle] = useState(false);
  const { setToken } = useContext(AuthContext);
  const {token} =useContext(AuthContext)
 const {numOfCartItems} = useContext(cardcontext)

 function handleLogout() {
  localStorage.removeItem("token")
  setToken(null)
  Navigate('/login')
}

function handleToggle() {
  setIsToggle(!toggle);
}
  return <>
  
<nav className="bg-white border-gray-200 dark:bg-gray-800">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-8" alt="Flowbite Logo" />
  </Link>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  {token?<>
    <button onClick={handleLogout} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">logout</button>
         
    <button data-collapse-toggle="navbar-cta" onClick={handleToggle} type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      
  
  </>
  :<>
      <button onClick={handleLogout} type="button" className="mx-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <Link to="Login">Login</Link>
      </button>
      <button onClick={handleLogout} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <Link to="Signup">Signup</Link>
      </button>
      </>
  }
   </div>

 

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {token?<>
        <li>
        <Link to="Home" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">
        Home</Link>
      </li>
      <li>
        <Link to="Brand" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Brand</Link>
      </li>
      <li>
        <Link to="Categories" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Categories</Link>
      </li>
      <li>
        <Link to="wishlist" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        wishlist</Link>
      </li>
      <li>
        <Link to="Product" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Product</Link>
      </li>
      <li>
        <Link to="Allorders" className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        Allorders</Link>
      </li>
      <li className="w-full md:w-auto mr-4">
          <NavLink to={'/Cart'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent relative">
            <div className='absolute -top-3 left-12 md:left-4 md:-top-4 bg-blue-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full'>{numOfCartItems}</div>
            <i className="fa-solid fa-cart-shopping fa-1x ms-6 md:ms-0"></i>
          </NavLink>
        </li>

  </>:null}
    </ul>
  </div>
  </div>
</nav>

  </>
}
