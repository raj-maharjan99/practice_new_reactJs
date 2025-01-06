import * as React from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFromLocal } from "@/slices/userSlice";

export function DropDown() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);
  console.log(user);
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-gray-600 text-3xl font-bold hover:text-black"
        >
          R@J
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link
          className="text-gray-600 text-lg font-bold hover:text-black  "
          to={"/github"}
        >
          GitHub
        </Link>
      </div>
      {/* Navigation Links */}
      <div className="flex space-x-4">
        <Link to="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link to="about" className="text-gray-600 hover:text-black">
          About
        </Link>
        <Link
          to={`${user?.isAdmin ? "admin-product" : "user-product"}`}
          className="text-gray-600 hover:text-black"
        >
          {user?.isAdmin ? "Modify-Products" : "Check-Products"}
        </Link>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        {user !== null ? (
          user.isAdmin ? (
            <>
              <>
                <Link
                  href="#user-profile"
                  className="px-3 py-2 text-sm font-medium text-white bg-zinc-400 rounded-md hover:bg-zinc-700"
                >
                  Admin Profile
                </Link>

                <button
                  onClick={() => dispatch(clearFromLocal(), nav("/login"))}
                  className="px-3 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
                >
                  Logout
                </button>
              </>
            </>
          ) : (
            <>
              <Link
                href="#user-profile"
                className="px-3 py-2 text-sm font-medium text-white bg-zinc-700 rounded-md hover:bg-zinc-800"
              >
                User Profile
              </Link>

              <button
                onClick={() => dispatch(clearFromLocal(), nav("/login"))}
                className="px-3 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
              >
                Logout
              </button>
            </>
          )
        ) : (
          <>
            <button
              onClick={() => nav("/login")}
              className="px-3 py-2 text-sm font-medium text-white bg-zinc-600 rounded-md hover:bg-zinc-800"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
