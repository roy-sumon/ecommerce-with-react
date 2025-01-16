import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Cart = ({currData = "test"}) => {
  const {title, price, description, category, image, rating}= currData;
  return (
    <div className=" m-1 bg-white rounded p-2 shadow-md cursor-pointer duration-300 hover:bg-gray-200">
      <div className=" p-5">
        <div className="flex items-center justify-between">
          <div className="w-16 rounded-lg bg-red-500 px-3 py-1 text-white">
            <p>-40%</p>
          </div>

          <div className="flex flex-col gap-2">
            <CiHeart className="bg-gray-300 rounded-full hover:bg-red-500 hover:text-white p-1 text-4xl" />
            <FaEye className="bg-gray-300 rounded-full hover:bg-red-500 hover:text-white p-1 text-4xl" />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <img src={image} className="w-32 h-32" alt="" />
        </div>
      </div>
      <h2 className="font-bold">{title}</h2>
      <p className="font-semibold">{category}</p>
      <p className="font-semibold">
        ${price} <span className="text-gray-500 line-through"></span>
      </p>
      <div className="flex text-yellow-400 my-1 items-center">
      <FaStar /><FaStar /><FaStar /><FaStar /> <span className="text-black pl-2">(88)</span>
      </div>
      <button className="bg-gray-400 px-4 py-1 rounded text-red-500 font-semibold hover:bg-red-500 hover:text-white">Add to Cart</button>
    </div>
  );
};

export default Cart;