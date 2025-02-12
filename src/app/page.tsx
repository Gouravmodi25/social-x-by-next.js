import Feed from "@/components/Feed";
import Shared from "@/components/Shared";
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between text-textGray border-b-[1px] border-borderGray font-bold">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-4 border-iconBlue">
          For You
        </Link>
        <Link href="/" className="pb-3 flex items-center">
          Following
        </Link>
        <Link href="/" className="pb-3 hidden md:flex items-center">
          React.js
        </Link>
        <Link href="/" className="pb-3 hidden md:flex items-center">
          Javascript
        </Link>
        <Link href="/" className="pb-3 hidden md:flex items-center">
          Next.js
        </Link>
      </div>
      <Shared />
      <Feed />
    </div>
  );
};

export default Page;
