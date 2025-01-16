import React from "react";
import { IoSendOutline } from "react-icons/io5";
import qrCode from "../../assets/Qrcode.png";
import appleStore from "../../assets/appleStore.png";
import googlePlay from "../../assets/googlePlay.png";
const Footer = () => {
  return (
    <>
    <div className="grid grid-cols-5 bg-black text-white px-1 sm:py-8 sm:px-2">
      <div>
        <h2 className="text-xl font-semibold">Exclusive</h2>
        <p className="text-sm mt-3">Subscribe</p>
        <p className="text-xs mt-3">Get 10% off your first order</p>
        <div className="border-[1px] mt-3 w-[95%] rounded-sm border-white flex items-center">
          <input
            className="outline-none w-[85%] text-sm pl-1 py-1 bg-black"
            type="text"
            placeholder="Enter your email"
          />
          <IoSendOutline className="text-sm" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Support</h2>
        <p className="text-xs mt-3">
          111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
        </p>
        <p className="text-xs mt-3">Get 10% off your first order</p>
        <p className="text-xs mt-3">exclusive@gmail.com</p>
        <p className="text-xs mt-3">+88013-5252-5682</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Account</h2>
        <p className="text-xs mt-3">My Account</p>
        <p className="text-xs mt-3">Login / Register</p>
        <p className="text-xs mt-3">Cart</p>
        <p className="text-xs mt-3">Wishlist</p>
        <p className="text-xs mt-3">Shop</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Quick Link</h2>
        <p className="text-xs mt-3">Privacy Policy</p>
        <p className="text-xs mt-3">Terms Of Use</p>
        <p className="text-xs mt-3">FAQ</p>
        <p className="text-xs mt-3">Contact</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Download App</h2>
        <p className="text-xs mt-3">Save $5 with App New User Only</p>
        <div className="mt-3 flex gap-2">
          <img className="w-12 h-12" src={qrCode} alt="" />
          <div>
            <img className="mb-1" src={googlePlay} alt="" />
            <img src={appleStore} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-black text-center py-5">
    <p className="text-gray-600">
      @Copyright Sumon 2024. All right reserved
    </p>
  </div>
  </>
  );
};

export default Footer;
