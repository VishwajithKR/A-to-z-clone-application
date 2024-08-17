"use client";

import { useAppDispatch } from "@/libs/supabase/hooks/redux";
import {
  ClearAllCart,
  DecrementQuantity,
  IncrementQuantity,
  removeFromCart,
} from "@/redux/cartSlice";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SubTotal from "./shared/SubTotal";

const ShoppingCart = ({
  cart,
  totalPrice,
}: {
  cart: any;
  totalPrice: number;
}) => {
  const dispatch = useAppDispatch();

  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const quantity = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    );
    setTotalQuantity(quantity);
  }, [cart]);

  return (
    <div className="mt-4 w-[70%] pb-7">
      <div className="flex justify-between px-12 items-center">
        <h1 className="font-bold text-2xl border-b border-gray-300 py-5">
          ShoppingCart
        </h1>
        <h1 className="font-medium text-xl">Price</h1>
      </div>

      {cart.map((product: any) => {
        return (
          <div
            key={product.id}
            className="mt-4 py-4 flex justify-between border-b border-gray-200"
          >
            <div className="flex">
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-4 ml-4 border-b border-gray-200">
                <h1 className="font-medium">{product.title}</h1>
                <p className="text-[#007600] font-bold text-xs my-1">
                  In stock
                </p>
                <h1
                  className="font-bold text-lg text-red-500 cursor-pointer"
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  REMOVE
                </h1>
                <div className="bg-gray-200 flex w-fit my-3 text-2xl font-medium items-center justify-between rounded-md px-5 py-2">
                  <div
                    className="cursor-pointer mr-4"
                    onClick={() =>
                      product.quantity > 1 &&
                      dispatch(DecrementQuantity(product))
                    }
                  >
                    -
                  </div>
                  <div>{product.quantity}</div>
                  <div
                    className="cursor-pointer ml-4"
                    onClick={() => dispatch(IncrementQuantity(product))}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-2">
              <h1 className="font-bold text-xl">&#8377;{`${product.price}`}</h1>
              <p>
                M.R.P.:
                <span className="line-through">
                  {(product.price * 3).toFixed(2)}
                </span>
              </p>
              <p className="text-[#333333] font-bold text-xs my-1">
                Save :
                <span className="text-[#007600]">
                &#8377; {Math.round(product.price * 3 - product.price)}
                </span>
              </p>
            </div>
          </div>
        );
      })}
      {
        totalQuantity>=1 ? ( <h1
          className="text-red-600 font-bold cursor-pointer ml-12 mt-4"
          onClick={() => dispatch(ClearAllCart())}
        >
          CLEAR ALL
        </h1>):(<h1 className="ml-12 mt-4 font-bold">No Items is Founded</h1>)
      }
      {/* <h1
        className="text-red-600 font-bold cursor-pointer ml-12 mt-4"
        onClick={() => dispatch(ClearAllCart())}
      >
        CLEAR ALL
      </h1> */}
      <SubTotal
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        left={false}
      />
    </div>
  );
};

export default ShoppingCart;
