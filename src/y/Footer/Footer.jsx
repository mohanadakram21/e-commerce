import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-2 ">
    <div className="container mx-auto px-4 text-center md:text-left">
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Get the FreshCart app</h3>
          <p className="text-gray-500 text-sm">
            We will send you a link, open it on your phone to download the app.
          </p>
        </div>
        <div className="flex items-center w-full md:w-auto">
          <input type="email" placeholder="Email ...." className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-72"/>
          <button className="bg-green-600 text-white px-4 py-2 ml-2 rounded-md hover:bg-green-700">
            Share App Link
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border-t pt-4">
        <div className="flex space-x-4 text-gray-500 mb-4 md:mb-0">
          <span className="text-sm text-white font-semibold">Payment Partners</span>
          <img src="/src/assets/amazon-pay.png " alt="Amazon Pay" className="h-5" />
          <img src="./src/assets/American-Express-Color.png" alt="American Express" className="h-5" />
          <img src="./src/assets/mastercard.webp" alt="MasterCard" className="h-5" />
          <img src="./src/assets/paypal.png" alt="PayPal" className="h-5" />
        </div>

        <div className="flex space-x-4">
          <Link to='' className="block"><img src="./src/assets/get-apple-store.png" alt="App Store" className="h-10 rounded-md"/></Link>
          <Link to='' className="block"><img src="./src/assets/get-google-play.png" alt="Google Play" className="h-10 rounded-md"/></Link>
        </div>
      </div>
    </div>
  </footer>
);
}
  
