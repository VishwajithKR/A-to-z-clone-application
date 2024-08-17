import React from "react";
import starImg from "../../../public/star-icon.png";
import Image from "next/image";

const Ratings = ({ rating }: { rating: any }) => {
  rating = JSON.parse(rating);

  return (
    <div className="flex items-center">
      {Array(4)
        .fill(1)
        .map((dummyItem,index) => (
          <Image src={starImg} key={index} alt="rating" width={20} height={20} />
        ))}
      <h1 className="text-[#007185] ml-2 font-medium">{rating.count} ratings</h1>
    </div>
  );
};

export default Ratings;
