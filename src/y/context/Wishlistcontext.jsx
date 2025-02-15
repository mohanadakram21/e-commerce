import axios from 'axios'
import React, { createContext, useState } from 'react'

export const wishlistcontext = createContext()
export default function Wishlistcontext({children}) {
    const [allwish,setallwish]= useState([])
   
 async function Wishlisttocart(id){
    try {
        const res = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{
            productId:id
        },{
            headers:{
              token:localStorage.getItem('token')
            }
            })
            if(res.data.status == 'success'){
              getwishlistitems()
            }
    } catch (error) {
        
    }
    }

 async   function getwishlistitems() {
        const res = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
          headers:{
            token:localStorage.getItem('token')
          }
        })
        if(res.data.status == 'success'){
          setallwish(res.data.data)
          }
      }

      async function deletecarditems(id){
        try {
          const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            headers:{
              token:localStorage.getItem('token')
            }
          },{
            productId:id
          })
          if(res.data.status=='success'){
            setallwish(res.data.data)
          }
          console.log('done');
          
        } catch (error) {
          console.log(error);
          
        }
       
      }
  return <wishlistcontext.Provider value={{Wishlisttocart,getwishlistitems,allwish,deletecarditems}}>
{children}
  </wishlistcontext.Provider>
}
