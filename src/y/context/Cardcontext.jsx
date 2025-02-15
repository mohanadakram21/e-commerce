import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const cardcontext = createContext()
export default function Cardcontext({children}) {
 const [numOfCartItems , setnumOfCartItems] = useState()
 const [alltems,setalltems]= useState([])
 const [cartId,setcartId]= useState()
const[totalcartprice,settotalcartprice]=useState()
   async function addtocart(id){
    try{
      const res = await axios.post('https://ecommerce.routemisr.com/api/v1/cart',{
        productId:id
      },{
        headers:{
          token:localStorage.getItem('token')
        }
      })
      console.log(res);
      setnumOfCartItems(res.data.numOfCartItems)
    }catch(error){
      console.log(error);
      
    }
    }

   async function getcartitems() {
    try {
      const res = await axios.get('https://ecommerce.routemisr.com/api/v1/cart',{
        headers:{
          token:localStorage.getItem('token')
        }
      })
      console.log(res);
      if(res.data.status == 'success'){
        setalltems(res.data.data.products)
        setcartId(res.data.cartId)
        console.log("Cart ID:", cartId); 
        setnumOfCartItems(res.data.numOfCartItems)
        settotalcartprice(res.data.data.totalCartPrice)

      }
    } catch (error) {
      console.log(error);

    }
     
    }

async function updateitems(id,count){

  try{
    const res = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count},{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    console.log(res);
    if(res.data.status=='success'){
      setalltems(res.data.data.products)
      settotalcartprice(res.data.data.totalCartPrice)
    }
  }catch(err){
    console.log(err,'error');
    
  }
  
}

async function deletecarditem(id){
  try {
    const res = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      headers:{
        token:localStorage.getItem('token')
      }
    })
    if(res.data.status=='success'){
      setalltems(res.data.data.products)
    }
  } catch (error) {
    console.log(error);
    
  }
 
}
    const [token, setToken] = useState(null);

    const [userId, setUserId] = useState(null); 

    
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //       setToken(token); 
      
    //         const decoded = jwtDecode(token); 
    
    //         if (decoded.id) {
    //           setUserId(decoded.id); 
    //           localStorage.setItem("userId", decoded.id); 
    //         } 
    
    //     }
    
    // }, [token])
    
  return <cardcontext.Provider value={{addtocart,numOfCartItems,getcartitems,alltems,cartId,setnumOfCartItems,updateitems,totalcartprice,deletecarditem}}>
    {children}
  </cardcontext.Provider> 
 
}
