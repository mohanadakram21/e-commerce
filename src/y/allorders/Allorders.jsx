import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { cardcontext } from "../context/Cardcontext";

export default function Allorders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { userId } = useContext(cardcontext);
  const userId = localStorage.getItem("userId")
console.log(userId);

  useEffect(() => {
    if (!userId) return;

    async function fetchOrders() {
      setLoading(true);
      try {
        const {data}  = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`);
        setOrders(data);
        console.log(data);
        
      } catch {
        setError("Failed to load orders.");
      }
      setLoading(false);
    }

    fetchOrders();
  }, [userId]);

  if (loading) return <p className="text-center">Loading orders...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!orders.length) 
    return (
      <div className="text-center">
        <p>No orders found.</p>
        <Link to="/Home" className="text-blue-500">let go to Shopping</Link>
      </div>
    );

  return (
    <div className="container mx-auto p-4 bg-gray-800 text-white">
      <h2 className="text-2xl font-semibold text-center mb-4">My Orders</h2>
      {orders.map((order) => (
        <div key={order._id} className="p-4 border rounded-lg mb-4">
          <h3>Order ID: {order.id}</h3>
          <p>Total: {order.totalOrderPrice} EGP</p>
          <p>Payment: {order.paymentMethodType}</p>
          <table className="w-full border mt-2">
            <thead>
              <tr className="bg-gray-700">
                <th>Image</th>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Delivered</th>
                <th>Paid</th>
              </tr>
            </thead>
            <tbody>
              {order.cartItems.map((item) => (
                <tr key={item._id} className="text-center">
                  <td>
                    <img src={item.product.imageCover} alt={item.product.title} className="w-16" />
                  </td>
                  <td>{item.product.title}</td>
                  <td>{item.count}</td>
                  <td>{item.price} EGP</td>
                  <td>{order.isDelivered ? "Delivered" : "still on the way"}</td>
                  <td>{order.isPaid ? "success" : "did not paid yet"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
