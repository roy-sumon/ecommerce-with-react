import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import carRemote from "../assets/carRemote.png";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="">
      <div className="bg-gray-200 p-5">
        <div className="flex items-center justify-between">
          <div className="w-16 rounded-lg bg-red-500 px-3 py-1 text-white">
            <p>-40%</p>
          </div>

          <div className="flex flex-col gap-2">
            <CiHeart className="bg-gray-300 rounded-full p-1 text-4xl" />
            <FaEye className="bg-gray-300 rounded-full p-1 text-4xl" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={carRemote} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Havit HV-G92 Gamepad</h2>
      <p className="font-semibold">
        $120 <span className="text-gray-500 line-through">$160</span>
      </p>
      <div className="flex text-yellow-400 items-center">
      <FaStar /><FaStar /><FaStar /><FaStar /> <span className="text-black pl-2">(88)</span>
      </div>
    </div>
  );
};

export default Cart;
