import React from "react";
import { IoIosStar } from "react-icons/io";
import Image from "next/image";
import Coin from '../../public/assets/coin2-removebg.png'


const BookReview = ({ Title, Review, Rate }: { Title: string, Review: string, Rate: string }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-1 items-center">
        <IoIosStar color="#f3cc8a" />
        <IoIosStar color="#f3cc8a" />
        <IoIosStar color="#f3cc8a" />
        <IoIosStar color="#f3cc8a" />
        <IoIosStar color="#f3cc8a" />
      </div>
      <p className="text-cutomGold font-heading text-3xl">
        {Title}
      </p>
      <p className="text-cutomGold font-body font-medium text-wrap w-[350px]">
        {Review}
      </p>
      <div className="text-cutomGold font-body font-medium text-wrap flex items-center gap-5">
        <div className=" ring-2 ring-[#f3cc8a] animate-pulse rounded-full">
          <Image src={Coin} width={30} height={30} alt="coin" />
        </div>
        {Rate} Coins / Night
      </div>
    </div>
  );
};

export default BookReview;
