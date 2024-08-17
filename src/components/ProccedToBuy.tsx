"use client";

import React from "react";
import SubTotal from "./shared/SubTotal";
import { useRouter } from "next/navigation";

const ProccedToBuy = ({
  totalPrice,
  totalQuantity,
}: {
  totalPrice: number;
  totalQuantity: number;
}) => {
  
  const router = useRouter()
  return (
    <div className="w-[30%]  flex justify-center mt-6">
      <div className="w-[70%] border border-gray-300 ml-4 h-fit">
        <div className="p-4 text-sm">
          <p>
            <span className="text-[#007600] font-medium">
              Your order is eligible for free Delivery.
            </span>
            Choose FREE Delivery option at checkout.
          </p>
          <p className="text-xs font-light">Free delivery for purchases above ₹200</p>
          <div className="text-left">
            <SubTotal
              left={true}
              totalPrice={totalPrice}
              totalQuantity={totalQuantity}
            />
            <button className="bg-[#FFD814] w-full py-1 rounded-md shadow-md my-3"
            onClick={()=>{
              router.push('/checkout')
            }}>
              Procced To Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProccedToBuy;
