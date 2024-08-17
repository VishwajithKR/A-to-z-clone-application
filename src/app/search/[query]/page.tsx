"use client";
import SearchResult from "@/components/SearchResult";
import { useSupabase } from "@/libs/supabase/hooks/useSupabasee";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { query } = useParams();
  const { filterData, getFilteredData } = useSupabase();

  useEffect(() => {
    getFilteredData(query.toString());
  }, []);
  
  return (
    <div>
      <SearchResult filterData={filterData} />
    </div>
  );
};

export default page;
