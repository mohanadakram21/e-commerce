import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cardcontext } from '../context/Cardcontext';
import { wishlistcontext } from '../context/Wishlistcontext';

export default function ProductCart(props) {
    const {addtocart} = useContext(cardcontext)

const {Wishlisttocart} = useContext(wishlistcontext)

    const {title,imageCover
        ,price,_id,description,ratingsAverage} = props.product;
        let stars = Math.floor(ratingsAverage)
  return <>
  
  
<div className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <Link to={`/details/${_id}`}>

    <div href="#">
        <img className="p-8 rounded-t-lg h-[500px] w-full" src={imageCover} alt="product image" />
    </div>
    <div className="px-5 pb-5">
        <div href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{description.slice(0,100)+'...'}</p>

        </div>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {Array.from({length:stars},(_,index)=>{
                    return <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                })}
              
               
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{ratingsAverage}</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            </div> 
            </div>
   
</Link>
   <button onClick={()=>{Wishlisttocart(_id)}} className="ms-5 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <i className="fa-regular fa-heart fa-2xl"></i> </button>

         <button onClick={()=>{addtocart(_id)}} className="ms-80 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
    </div>     
         
  </>
}
