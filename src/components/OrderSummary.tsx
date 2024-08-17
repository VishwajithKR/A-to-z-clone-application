import { useRouter } from "next/navigation";
import React from "react";

const OrderSummary = ({
  totalPrice,
  totalQuantity,
}: {
  totalPrice: number;
  totalQuantity: number;
}) => {
  const router = useRouter();

  return (
    <div className="border border-gray p-4 mt-3 h-fit w-[25%]">
      <div>
        <h1 className="font-bold">Order Summary</h1>
        <div>
          <div className="flex items-center justify-between">
            <p>Items</p>
            <p>{totalQuantity}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Delivery fee</p>
            <p>
              {totalPrice > 200
                ? "free delivery"
                : totalPrice == 0
                ? "0"
                : `₹65`}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>{totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Promotion applied</p>
            <p>-&#8377;50 (free)</p>
          </div>
          <div className="flex text-xl font-semibold text-[#812704] py-2 border-b border-gray-300 my-1">
            <h1>Order Total: </h1>
            <h1>₹
              {totalPrice > 200
                ? totalPrice
                : totalPrice > 0
                ? totalPrice + 65
                : 0}
            </h1>
          </div>
        </div>
        <button
          className="bg-[#ffd814] w-full rounded-md py-1 px-4"
          onClick={() => {
            totalQuantity > 0
              ? router.push("/success")
              : (alert("Purchase Your Order"), router.push("./"));
          }}
        >
          Place Your Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
