'use client'
import SingleProduct from '@/components/SingleProduct'
import { useSupabase } from '@/libs/supabase/hooks/useSupabasee'
import { useParams} from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const {id}=useParams();
    const {singleProduct,getSingleProduct}=useSupabase();

    useEffect(()=>{
      getSingleProduct(Number(id))
    })
 
  return (
    <div>
        <SingleProduct singleProduct={singleProduct}/>
    </div>
  )
}

export default page