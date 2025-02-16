import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import ProductCart from './../ProductCard/ProductCart';
import { RotatingLines } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cardcontext } from '../context/Cardcontext';
import { wishlistcontext } from '../context/Wishlistcontext';
import slider1 from '../../image/slider-image-1.jpeg'
import slider2 from '../../image/slider-image-2.jpeg'
import blog1 from '../../image/blog-img-1.jpeg'
import blog2 from '../../image/blog-img-2.jpeg'

export default function Home() {
  


 async function getallproduct() {
  return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  
}
async function getallcategory(params) {
  return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
}

const {data,isLoading} = useQuery({
  queryKey:'allProducts',
  queryFn:getallproduct,
  refetchOnWindowFocus:false
})
  const allproductdata= data?.data.data

  const {data:allcat,isLoading:catisloading} = useQuery({
    queryKey:'all category',
    queryFn:getallcategory,
    refetchOnWindowFocus:false

  })
  return <>



<div className="grid grid-cols-6 my-3">
  <div className="hello bg-red-500 col-span-4">
  <Swiper slidesPerView={1} loop={true} style={{height:'100%'}}>
  <SwiperSlide>
  <img src={slider1} className='w-full h-full block' alt="" srcSet=""/>
  </SwiperSlide>
  <SwiperSlide>
  <img src={slider2} className='w-full h-full block' alt="" srcSet=""/>
  </SwiperSlide>
  </Swiper>
    
    </div>
  <div className="world bg-green-500 col-span-2">
  <img src={blog1} className='h-1/2' alt="" srcSet=""/>
  <img src={blog2} className='h-1/2' alt="" srcSet=""/>

  </div>
</div>


<Swiper slidesPerView={6} loop={true}>
{allcat?.data.data.map((cat)=><SwiperSlide key={cat._id}>
  <img src={cat.image} className='h-[200px] w-full'/>
  <div>{cat.name}</div>
</SwiperSlide>)}
</Swiper>

  {isLoading?<div className=' bg-green-300 h-screen flex justify-center items-center' ><RotatingLines
  visible={true}
  height="96"
  width="96"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>:
  <div className="contanier">
  <div className="grid gap-5 gird-cols-1 md:grid-cols-2 lg:grid-cols-3" >
   {allproductdata.map((prod)=> <ProductCart product={prod} key={prod._id}/> )}
{/* <ProductCart/>     */}
  </div>
  </div>
  }
  </>
   
}
