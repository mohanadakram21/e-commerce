import axios from 'axios'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import ProductCart from '../ProductCard/ProductCart'

export default function Product() {
  async function getallproduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    
  }
  const {data,isLoading} = useQuery({
    queryKey:'allProducts',
    queryFn:getallproduct,
    refetchOnWindowFocus:false
  })
  const allproductdata= data?.data.data

  return <>
    {isLoading?null:
     <div className="contanier">
     <div className="grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-3" >
      {allproductdata.map((prod)=> <ProductCart product={prod} key={prod._id}/> )}
     </div>
     </div>
     }
  </>
}
