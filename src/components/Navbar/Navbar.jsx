import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex border-[1.7px] border-b-gray-300 items-center py-2 justify-around">
      <div className="flex justify-center">
      <h1 className="text-3xl font-bold">Exclusive</h1>
      </div>
      <div className="list-none flex items-center gap-5 ">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">Contact</li>
        <li className="hover:underline">About</li>
        <li className="hover:underline">Sign Up</li>
      </div>
      <div>
        <div className="flex gap-2 items-center rounded-lg">
          <div className="flex pr-2 items-center rounded-lg bg-gray-200">
          <input type="text" className="bg-gray-200 outline-none w-64 rounded-lg px-2 py-1 text-black" placeholder="What you are looking for?" />
          <CiSearch  className=""/>
          </div>
          <IoIosHeartEmpty />
          <MdOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
