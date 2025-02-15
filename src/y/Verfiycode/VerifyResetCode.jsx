import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VerifyResetCode() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { resetCode: "" },
    validationSchema: Yup.object({
      resetCode: Yup.string()
        .length(6, "Code must be 6 digits")
        .required("Reset Code is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setMessage("");
      try {
        await axios.post(
          "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
          values
        );
        setMessage("Code verified successfully!");
        navigate("/ResetPassword");
      } catch (error) {
        setMessage("Invalid code. Please try again.");
      }
      setIsLoading(false);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Verify Reset Code</h2>

        {message && <p className="text-center text-red-500">{message}</p>}

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            type="text"
            name="resetCode"
            placeholder="Enter reset code"
            className="w-full p-2 border rounded"
            {...formik.getFieldProps("resetCode")}
          />
          {formik.touched.resetCode && formik.errors.resetCode && (
            <p className="text-red-500 text-sm">{formik.errors.resetCode}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </button>
        </form>
      </div>
    </div>
  );
}
