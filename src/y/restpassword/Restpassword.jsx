import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function ResetPassword() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email").required("Required"),
      newPassword: Yup.string()
        .min(6, "At least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setMessage("");
      try {
        const response = await axios.put(
          "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
          values
        );
        setMessage("Password reset successful!");
      } catch (error) {
        setMessage("Error resetting password!");
      }
      setIsLoading(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>

        {message && <p className="text-center text-red-500">{message}</p>}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("newPassword")}
          />
          {formik.touched.newPassword && formik.errors.newPassword && (
            <p className="text-red-500 text-sm">{formik.errors.newPassword}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {isLoading ? "Loading..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
