import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import * as yup from 'yup'
import axios from 'axios';
import { data, Link, useNavigate } from 'react-router-dom';
 import { AuthContext } from '../context/AutheContext';
import Forgetpass from './../forgetpass/Forgetpass';
import { jwtDecode } from 'jwt-decode';

export default function Login() {

let [msg,setmsg]= useState(null);
let [succesmsg,setsuccesmsg]= useState(null);
let [loading,setloading]= useState(false);
const navigate =useNavigate()
 const {setToken}=useContext(AuthContext)

const validationschema= yup.object().shape({
  email: yup.string().required('email is requierd').email('plz enter vaild email') ,
  password: yup.string().required('password is requierd').matches(/^[A-z0-9_]{6,30}$/,'from 6 to 30 max') ,
})

async function login(values){
  setmsg(null)
  setsuccesmsg(null)
  setloading(true)
  try {
    const res = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
console.log(res);
setsuccesmsg(res.data.message)
 localStorage.setItem('token',res.data.token)
 jwtDecode(res.data.token)
 setToken(res.data.token)
setTimeout(() => {
  navigate('/Home')

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
      email:'',
      password:'',
     
    },
    onSubmit:login,
    validationSchema:validationschema 

  })
  return <>
<form onSubmit={formik.handleSubmit} className="max-w-md mx-auto mt-5">

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


 
  <button type="submit" className="my-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
    {loading ? 'loading.....':'sumbit'}</button>

{msg ? <div className='text-green-500'>{msg}</div>:null}
{succesmsg ? <div className='text-green-500'>{succesmsg}</div>:null}

<button type="button" className="my-2 mx-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
<Link to="/forgetpass" >Forgetpassword</Link></button>


</form>

  </>
}
