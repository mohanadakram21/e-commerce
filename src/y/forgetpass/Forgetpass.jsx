import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Forgetpass() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setMessage("");
      try {
        const response = await axios.post(
          "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
          values
        );
        setMessage("Check your email for the verification code.");
        navigate("/VerifyResetCode");
      } catch (error) {
        setMessage("Error sending email. Try again.");
      }
      setIsLoading(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>

        {message && <p className="text-center text-red-500">{message}</p>}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {isLoading ? "Sending..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
}
