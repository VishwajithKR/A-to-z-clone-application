"use client";

import { useSupabase } from "@/libs/supabase/hooks/useSupabasee";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CategoryWiseProducts from "./shared/CategoryWiseProducts";

const HomePage = () => {
  const { mensProduct, womensProduct, getMensClothing, getWomensClothing } =
    useSupabase();

  useEffect(() => {
    getMensClothing();
    getWomensClothing();
  }, [getMensClothing, getWomensClothing]);

  return (
    <div>
      <Image
        style={{
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
        src="https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Prcha/August/5300-Kitchen---Rakhshabandhan-hero_3000X1200_FDFO._CB567042423_.jpg"
        alt="slider-1"
        width={10000}
        height={1000}
      />
      <div className="gap-2 w-[80%] mx-auto grid grid-cols-4 relative -top-64">
        
          {mensProduct?.map((product: any) => {
            return (
              <div key={product.id} >
                <CategoryWiseProducts product={product} />
              </div>
            );
          })}
       
          {womensProduct?.map((product: any) => {
            return (
              <div key={product.id}>
                <CategoryWiseProducts product={product} />
              </div>
            );
          })}
       
      </div>
    </div>
  );
};

export default HomePage;
