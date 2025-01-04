import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearFromLocal } from "@/slices/userSlice";

export function DropDown() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userSlice);

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="text-lg font-bold text-gray-800">E-Shop</div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <a href="#home" className="text-gray-600 hover:text-black">
          Home
        </a>
        <a href="#about" className="text-gray-600 hover:text-black">
          About
        </a>
        <a href="#contact" className="text-gray-600 hover:text-black">
          Contact
        </a>
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
          <>
            <a
              href="#user-profile"
              className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              User Profile
            </a>

            <button
              onClick={() => dispatch(clearFromLocal(), nav("/login"))}
              className="px-3 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => nav("/login")}
              className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
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
