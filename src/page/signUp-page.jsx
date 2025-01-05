import { useUserSignUpMutation } from "@/auth/authApi";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [usersRegister, { isError, isLoading, data }] = useUserSignUpMutation();
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await usersRegister(values).unwrap();

        switch (res.status) {
          case "sucess":
            toast.success("User Successfully Created");
            resetForm();
            nav("/login");
            break;
          case "error":
            toast.error("User already exist.");
            break;
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-xl">
        {/* Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Sign Up </h1>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* fullName field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`w-full px-4 py-2 mt-1 text-gray-900 bg-gray-50 border ${
                formik.touched.fullName && formik.errors.fullName
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.fullName}
              </p>
            )}
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 mt-1 text-gray-900 bg-gray-50 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full px-4 py-2 mt-1 text-gray-900 bg-gray-50 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-md focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="relative flex items-center">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-3 text-sm text-gray-500 bg-white">OR</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className="flex items-center px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
          <button
            type="button"
            className="flex items-center px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-medium text-blue-600 hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
