import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { cardcontext } from '../context/Cardcontext'
import { useNavigate } from 'react-router-dom'

export default function Ordera() {
    const [paymentway,setpaymentway]= useState()
const {cartId,setnumOfCartItems} = useContext(cardcontext)
const Navigate = useNavigate()

    function handleSubmit(values){

if (paymentway == 'cash') {
    cashorder(values)
}else if(paymentway == 'visa'){
visaorder(values)
}
    }

  async  function cashorder(values) {
        try {
         const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,values,{
                headers:{
                    token:localStorage.getItem('token')
                  }
            })
            if (res.data.status== 'success'){
                setnumOfCartItems(0)
                Navigate('/Allorders')
            }
        } catch (err) {
           console.log(err);
            
        }
      
    }

  async  function visaorder(values) {
    console.log(window.location.origin);
    
    try {
        const res = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${window.location.origin}`,values,{
            headers:{
                token:localStorage.getItem('token')
              }
        })
console.log(res);
window.open(res.data.session.url,'_blank')

    } catch (error) {
        console.log(err);
        
    }
       

    }
     const formik =useFormik({
        initialValues:{
         shippingAddress:{
        details: '',
        phone: '',
        city: ''
        }
        },
        onSubmit:handleSubmit,
    
      })
  return <>
  <form onSubmit={formik.handleSubmit}>

  <div className="container px-5 bg-gray-800 text-white">
  <div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=>formik.setFieldValue('shippingAddress.details',e.target.value)} type="text" name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">details </label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=>formik.setFieldValue('shippingAddress.phone',e.target.value)} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone </label>
  </div>

  <div className="relative z-0 w-full mb-5 group">
      <input onChange={(e)=>formik.setFieldValue('shippingAddress.city',e.target.value)} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">city </label>
  </div>
  </div>
 <button  onClick={()=>setpaymentway('cash')} className='bg-red-500 text-center text-white p-2  rounded'>cash order</button>
 <button  onClick={()=>setpaymentway('visa')} className='bg-orange-500 text-center text-white p-2  rounded'>visa order</button>

  </form>
  
  </>
}
