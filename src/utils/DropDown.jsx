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
      {/* Logo */}
      <div className="text-lg font-bold text-gray-800 ">E-Shop</div>
      <div className="github  font-bold font-roboto text-lg">
        <Link to={"/github"}>GitHub</Link>
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

      {/* Dropdown Menu for Categories */}
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Categories</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Choose Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup>
            <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="electronics">
              Electronics
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="fashion">
              Fashion
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="home">
              Home & Living
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu> */}

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

        {/* Cart Button */}
        {/* <button className="relative flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Cart
          <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-blue-600 bg-white rounded-full">
            3
          </span>
        </button> */}
      </div>
    </nav>
  );
}
