import React from 'react'
import { Link } from 'react-router-dom';
import amazonpay from '../../image/amazon-pay.png'
import AmericanExpress from '../../image/American-Express-Color.png'
import MasterCard from '../../image/mastercard.webp'
import PayPal from '../../image/paypal.png'
import googleplay from '../../image/get-google-play.png'
import applestore from '../../image/get-apple-store.png'

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
          <img src={amazonpay} alt="Amazon Pay" className="h-5" />
          <img src={AmericanExpress} alt="American Express" className="h-5" />
          <img src={MasterCard} alt="MasterCard" className="h-5" />
          <img src={PayPal} alt="PayPal" className="h-5" />
        </div>

        <div className="flex space-x-4">
          <Link to='' className="block"><img src={googleplay} alt="App Store" className="h-10 rounded-md"/></Link>
          <Link to='' className="block"><img src={applestore} alt="Google Play" className="h-10 rounded-md"/></Link>
        </div>
      </div>
    </div>
  </footer>
);
}
  
