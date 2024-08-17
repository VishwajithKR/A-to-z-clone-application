"use client";

import React from "react";

const SubTotal = ({ totalQuantity, totalPrice,left }: { totalQuantity: number; totalPrice: number,left:boolean }) => {
  return(
    <div className="mt-2">
      <h1 className={`${left ?"text-left text-sm" : "text-right"}`}>
        {`Subtotal (${totalQuantity} items):`}
        <span className="font-bold">&#8377; {totalPrice}</span>
      </h1>
    </div>
  );
};

export default SubTotal;

