import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

let [msg,setmsg]= useState(null);
let [succesmsg,setsuccesmsg]= useState(null);
let [loading,setloading]= useState(false);
const navigate =useNavigate()

const validationschema= yup.object().shape({
  name: yup.string().required('name is requierd').min(3,'min 3 chars').max(20,'max 20 chars') ,
  email: yup.string().required('email is requierd').email('plz enter vaild email') ,
  password: yup.string().required('password is requierd').matches(/^[A-z0-9_]{6,30}$/,'from 6 to 30 max') ,
  rePassword: yup.string().required('rePassword ').oneOf([yup.ref('password')],'repassowrd not match') ,
  phone: yup.string().required('phone is requierd').matches(/^01[1250][0-9]{8}$/) ,
})

async function regist(values){
  setmsg(null)
  setsuccesmsg(null)
  setloading(true)

  try {
    const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
console.log(res);
setsuccesmsg(res.data.message)
setTimeout(() => {
  navigate('/Login')

}, 1000);

  } catch (err) {
     setmsg(err.response.data.message)
console.log(err.response.data);

  }finally{
    setloading(false)
  }


}

  const formik =useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:'',
    },
    onSubmit:regist,
    validationSchema:validationschema 

  })
  return <>
<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
<div className="relative z-0 w-full mb-5 my-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">name</label>
  </div>

  {formik.errors.name&& formik.touched.name ? <div className='p-4 mb-4 text-sm text-white bg-red-500'><span>danger alert</span> {formik.errors.name}</div>:null}

  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>

  {formik.errors.email&& formik.touched.email ? <div className='p-4 mb-4 text-sm text-white bg-red-500'><span>danger alert</span> {formik.errors.email}</div>:null}


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>

  {formik.errors.password&& formik.touched.password ? <div className='p-4 mb-4 text-sm text-white bg-red-500'><span>danger alert</span> {formik.errors.password}</div>:null}


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name="rePassword" id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">rePassword</label>
  </div>
  
  {formik.errors.rePassword&& formik.touched.rePassword ? <div className='p-4 mb-4 text-sm text-white bg-red-500'><span>danger alert</span> {formik.errors.rePassword}</div>:null}


  <div className="relative z-0 w-full mb-5 group">
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">phone</label>
  </div>
 
  {formik.errors.phone&& formik.touched.phone ? <div className='p-4 mb-4 text-sm text-white bg-red-500'><span>danger alert</span> {formik.errors.phone}</div>:null}

  <button type="submit" className="my-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">    
    {loading ? 'loading.....':'sumbit'}</button> 

{msg ? <div className='text-green-500'>{msg}</div>:null}
{succesmsg ? <div className='text-green-500'>{succesmsg}</div>:null}


</form>

  </>
}
