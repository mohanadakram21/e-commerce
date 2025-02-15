import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AutheContext";

export default function Guard({ children }) {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     return <Navigate to="/Login" replace />;
//   }

//   return children;



const { token } = useContext(AuthContext);


if (!token) {
  return <Navigate to="/Login" replace />;
}

return children;
}
