"use client";

import React, { useEffect, useState } from "react";
import ShopingCart from "./ShopingCart";
import ProccedToBuy from "./ProccedToBuy";
import { useAppSelector } from "@/libs/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const Cart = () => {
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
    <div className="w-[80%] mx-auto mt-10">
      <div className="flex w-full justify-between">
        <ShopingCart totalPrice={totalPrice} cart={cart} />
        {/* Fixed the syntax here */}
        <ProccedToBuy totalQuantity={totalQuantity} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
