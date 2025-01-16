import React from "react";
import Delivery from "../../assets/icon-delivery.png";
import CustomerService from "../../assets/Icon-Customer service.png";
import sucure from "../../assets/Icon-secure.png";

const CustomerServices = () => {
  return (
    <div className="grid grid-cols-3 py-10">
      <div className="flex items-center flex-col">
        <div className="bg-black p-1 m-2 flex items-center ring-8 ring-gray-400 justify-center rounded-full w-12 h-12">
          <img src={Delivery} alt="" />
        </div>
        <p className="font-bold uppercase">Fast and Secure Delivery</p>
        <p className="text-xs">Free delivery for all orders over $140</p>
      </div>

      <div className="flex items-center flex-col">
        <div className="bg-black p-1 m-2 flex items-center ring-8 ring-gray-400 justify-center rounded-full w-12 h-12">
          <img src={CustomerService} alt="" />
        </div>
        <p className="font-bold uppercase">Dedicated Customer Service</p>
        <p className="text-xs">Support available 24/7</p>
      </div>

      <div className="flex items-center flex-col">
        <div className="bg-black p-1 m-2 flex items-center ring-8 ring-gray-400 justify-center rounded-full w-12 h-12">
          <img src={sucure} alt="" />
        </div>
        <p className="font-bold uppercase">Secure Payment Options</p>
        <p className="text-xs">All transactions are encrypted and secure</p>
      </div>
    </div>
  );
};

export default CustomerServices;
