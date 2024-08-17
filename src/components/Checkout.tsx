"use client";
import React, { useEffect, useState } from "react";
import amazonLogo from "../../public/amazon-logo.png";
import { FaLock } from "react-icons/fa6";
import Image from "next/image";
import OrderSummary from "./OrderSummary";
import DeliveryAddress from "./DeliveryAddress";
import { getCart } from "@/redux/cartSlice";
import { useAppSelector } from "@/libs/supabase/hooks/redux";

const Checkout = () => {
  const cart = useAppSelector(getCart);

  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const quantity = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    );
    setTotalQuantity(quantity);
  }, [cart]);
  let totalPrice = 0;
  cart.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });
  totalPrice = Math.round(totalPrice);

  return (
    <div className="absolute top-0 w-full p-10  bg-white">
      <div className=" flex w-[70%] mx-auto items-center border-b border-gray-400  pb-5 justify-between">
        <div>
          <Image
            src={amazonLogo}
            alt={"amazon-logo"}
            width={150}
            height={150}
          />
        </div>
        <div>
          <h1 className="font-bold text-2xl">Checkout</h1>
        </div>
        <div className="text-gray-400">
          <FaLock size={"30px"} />
        </div>
      </div>
      <div className="flex justify-between w-[70%] mx-auto">
        <DeliveryAddress />
        <OrderSummary totalPrice={totalPrice} totalQuantity={totalQuantity} />
      </div>
    </div>
  );
};

export default Checkout;
