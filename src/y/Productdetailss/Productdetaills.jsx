import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import {  useParams } from 'react-router-dom'

export default function Productdetaills() {
    let[details,setdetails]= useState()
    const x = useParams();
    async function getallProductdetaills() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${x.id}`)
      }
    
      const {data,isLoading} = useQuery({
          queryKey:'all Productdetaills',
          queryFn:getallProductdetaills,
      })
      const detailsproduct= data?.data.data
      console.log(detailsproduct,'mmmmmmmmmmmmmmmmmmm');
      
  return <>
  
  <div className="grid grid-cols-6">
    <div className="col-span-2">
<img src={detailsproduct?.imageCover} alt="" srcset="" />
    </div>
    <div className="col-span-4 ms-20 my-5">
<h2>{detailsproduct?.title}</h2>
<p>{detailsproduct?.description}</p>
<span>{detailsproduct?.price}</span>
<div className="button">
    <button className="my-36 mx-11 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <i className="fa-regular fa-heart fa-2xl"></i> </button>
<button className="my-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>

</div>

    </div>
  </div>
  
  
  </>
  
}
