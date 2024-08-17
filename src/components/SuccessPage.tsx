"use client";
import { ClearAllCart, getCart } from "@/redux/cartSlice";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gifImg from "../../public/tick2.gif";
import { useAppDispatch, useAppSelector } from "@/libs/supabase/hooks/redux";
import { setTimeout } from "timers";

const Success = () => {
  const cart = useAppSelector(getCart);

  const [success, setSuccess] = useState<boolean>(true);

  const successLoader = () => {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  const dispatch =useAppDispatch()

  useEffect(() => {
    successLoader();
  }, []);

  return (
    <div>
      {success ? (
        <div>
          <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Image
                    src={gifImg}
                    alt="axor"
                    width={80}
                    height={80}
                    className="font-bold rounded-full"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                Your Order is Completed.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-0 w-full bg-white py-12 flex justify-center">
          <div className="mx-auto w-[70%] flex justify-center">
            <div>
              <h1>Thankyou for ordering with Amazon.in</h1>
              <div>
                <h1 className="font-bold py-3 underline">Order Details</h1>
                {cart.map((product: any) => {
                  return (
                    <div key={product.id}>
                      <div className="flex">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={100}
                          height={100}
                        />
                        <div className="ml-5 font-bold">
                          <h1>{product.title}</h1>
                          <h1>Rs.{product.price}</h1>
                          <h1>Qty:{product.quantity}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="my-5">
                <Link href={"/"} onClick={()=>dispatch(ClearAllCart())} className="bg-[#FFD814] px-4 py-1 rounded-md ">
                  Buy more products
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
