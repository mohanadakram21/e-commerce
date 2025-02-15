import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function Brand() {
  async function getallbrands() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  const {data:allbrands,isLoading} = useQuery({
      queryKey:'all brands',
      queryFn:getallbrands,
  })
  return <>
  <div className="grid grid-cols-3 ">
  {allbrands?.data.data.map((brands)=>{
    return <div  key={brands._id}>
      <div className=' bg-gray-800 text-white border-spacing-10  border-gray-200 p-4'>
      <img src={brands.image} className='h-[300px] w-3/4 text-white bg-gray-800'/>
<div className='text-white bg-gray-800 text-center'>{brands.name}</div>
    </div>
      </div>
 
  })}
  </div>
  
  </>
}
