import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function Categories() {
  async function getallcategory() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  const {data:allcat,isLoading} = useQuery({
      queryKey:'all category',
      queryFn:getallcategory,
  })
  return <>
  <div className="grid grid-cols-3  text-white bg-gray-800 p-4">
  {allcat?.data.data.map((cat)=>{
    return <div key={cat._id}>
  <img src={cat.image} className='h-[400px] w-3/4 text-white bg-gray-800'/>
<div>{cat.name}</div>
    </div>
  })}
  </div>
  
  </>
}
