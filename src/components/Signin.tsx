"use client"
import React from "react";
import { Auth } from '@supabase/auth-ui-react'
import { supabase } from "@/libs/supabase/product";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Signin = () => {
  return <div className="absolute top-0 bg-white py-12 w-full">
    <div className="w-[25%] mx-auto">
 <Auth
    supabaseClient={supabase}
    appearance={{ theme: ThemeSupa }}
    theme="dark"/>
    </div>
   
  </div>;
};

export default Signin;
