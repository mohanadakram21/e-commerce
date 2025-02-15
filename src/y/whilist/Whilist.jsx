
import React, { useContext, useEffect } from 'react';
import { wishlistcontext } from '../context/Wishlistcontext';
import { cardcontext } from '../context/Cardcontext';

export default function Whilist() {
      const {addtocart,deletecarditem} = useContext(cardcontext)
  console.log(addtocart,'addto cart');
  
  const { getwishlistitems, allwish ,deletecarditems } = useContext(wishlistcontext);

  useEffect(() => {
    getwishlistitems();
  }, []);

  console.log("allwish:", allwish); // ✅ Debugging

  return (
    <>
      <div className="relative overflow-x-auto shadow-md ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3"><span className="sr-only">Image</span></th>
              <th scope="col" className="px-6 py-3">Product</th>
              <th scope="col" className="px-6 py-3">Qty</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Action</th>
              <th scope="col" className="px-6 py-3">add</th>

            </tr>
          </thead>
          <tbody>
            {Array.isArray(allwish) ? (
              allwish.map((wish) => (
                <tr key={wish.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img  src={wish.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{wish.title}</td>
                  <td className="px-6 py-4">{wish.count}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{wish.price}</td>
                  <td className="px-6 py-4">
                    <button  className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                  </td>
                  <td className="px-6 py-4">
                  <button onClick={()=>{addtocart(wish.id)}} className="ms-80 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">No items in wishlist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
