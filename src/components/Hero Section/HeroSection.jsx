import React from "react";
import { FaApple } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import apple from '../../assets/apple.png'

const HeroSection = () => {
  return (
    <div className="bg-black flex items-center justify-between p-5 text-white">
      <div>
        <div className="flex items-center gap-3">
          <FaApple className="text-white size-14" />
          <p className="taxt-gray-300">iphone 14 Series</p>
        </div>
        <h1 className="text-4xl my-4 font-bold">Up to 10% <br /> off Voucher</h1>
        <div className="flex items-center gap-2">
        <button className="underline">Shop Now</button>
        <MdArrowRightAlt className="size-10"/>
        </div>
      </div>

      <div>
        <img src={apple} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
