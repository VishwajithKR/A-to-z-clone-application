import Image from "next/image";
import React from "react";
import Ratings from "./Ratings";
import { useAppDispatch } from "@/libs/supabase/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";

const CategoryWiseProducts = ({ product }: { product: any }) => {
  const dispactch = useAppDispatch();
  const route = useRouter();

  return (
    <div className="border border-gray-300 h-[400px] p-2 bg-white">
      <h1 className="font-bold">{product.category}</h1>
      <div className="mt-2 h-[250px] overflow-hidden flex items-center justify-center">
        <Image
          src={product.image}
          className="p-6"
          width={200}
          height={150}
          alt={product.title}
        />
      </div>
      <div>
        <h1 className="overflow-hidden">{product.title.substring(0, 40)}</h1>
        <Ratings rating={product.rating} />
      </div>
      <div className="my-2">
        {/* <Link href={`/product/${product.id}`}> */}
        <button
          className="w-full py-2 rounded-md bg-[#FFD814]"
          onClick={() => {
            dispactch(addToCart(product));
            route.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CategoryWiseProducts;
