"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import amazon_logo from "../../public/amazon-logo-2.webp";
import { CgShoppingCart } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/libs/supabase/hooks/redux";
import { ClearAllCart, getCart } from "@/redux/cartSlice";
import { supabase } from "@/libs/supabase/product";

const itemList = [
  "All",
  "Fresh",
  "Amazon miniTV",
  "Sell",
  "Gift Cards",
  "Baby",
  "Buy Again",
  "Browsing History",
  "Amazon Pay",
  "Gift Ideas",
  "Health, Household & Personal Care",
];

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const searchHandler = () => {
    if (query !== "") {
      router.push(`/search/${query}`);
      setQuery("");
    }
  };
  const cart = useAppSelector(getCart);

  const dispatch = useAppDispatch()

  const [totalQuantity, setTotalQuantity] = useState(0);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const quantity = cart.reduce(
      (acc: number, item: any) => acc + item.quantity,
      0
    );
    setTotalQuantity(quantity);

    const getUserData = async () => {
      const { data: user } = await supabase.auth.getUser();
      setUser(user?.user?.user_metadata?.full_name);
    };
    getUserData();
    const intervalId = setInterval(getUserData, 1000);
  }, [cart]);

  console.log(user);

  return (
    <>
      <div className="bg-[#131921] text-white py-2">
        <div className="flex items-center justify-between w-[90%] mx-auto">
          <div className="w-[10%]">
            <Link href="/">
              <Image
                src={amazon_logo}
                height={150}
                width={150}
                alt="amazon logo"
              />
            </Link>
          </div>
          <div className="w-[60%] flex items-center">
            <input
              className="w-full p-2 text-black rounded-l-md outline-none"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Amazon.in"
            />
            <div className="bg-[#FEBD69] p-2 rounded-r-md cursor-pointer">
              <CgSearch
                size={"24px"}
                className="text-black"
                onClick={searchHandler}
              />
            </div>
          </div>
          <div className="flex items-center justify-around w-[20%]">
            <div
              className="cursor-pointer"
              onClick={() => {
                if (user) {
                  null;
                } else {
                  router.push("/signin");
                }
              }}
            >
              <h1 className={user ? "text-xs " : "text-xs hover:underline "}>{`${
                user ? user : "Signin"
              }`}</h1>
              <h1 className="font-medium text-sm">Account & Listen</h1>
            </div>
            <div className="cursor-pointer">
              <p className="text-xs">Returns</p>
              <h1 className="font-medium text-sm">& Orders</h1>
            </div>
            <Link href={"/cart"} className="cursor-pointer">
              <p className="relative top-3 left-5">{totalQuantity}</p>
              <div className="flex">
                <div>
                  <CgShoppingCart size={"40px"} />
                </div>
                <h1 className="mt-4">cart</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#232f3e] w-full text-white p-2 flex justify-between items-center">
        <div>
          {itemList.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/${item}`}
                className="mx-2 p-2 border border-transparent hover:border hover:border-white"
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="mr-5">

          {
            user?(  <h1 className="text-[#FEBD69] font-bold cursor-pointer hover:underline "
          onClick={ async()=>{
            const {error}=await supabase.auth.signOut();
            alert("Canceling Your order")
            router.push('/')
            dispatch(ClearAllCart())
          }}>
            Sign out
          </h1>):(null)
          }
        
        </div>
      </div>
    </>
  );
};

export default Header;
