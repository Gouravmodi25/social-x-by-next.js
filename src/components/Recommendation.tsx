import React from "react";
import Link from "next/link";
import Image from "./Image";

const Recommendation = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {/* {user card} */}
      <div className="flex items-center justify-between">
        {/* image and userinfo */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="avatar"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Gourav Modi</h1>
            <span className="text-sm text-textGray">@gouravmodi_001</span>
          </div>
        </div>
        {/* button */}
        <button className="text-black bg-white font-semibold py-1 px-4 rounded-full">
          Follow
        </button>
      </div>
      {/* {user card} */}
      <div className="flex items-center justify-between">
        {/* image and userinfo */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="avatar"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Gourav Modi</h1>
            <span className="text-sm text-textGray">@gouravmodi_001</span>
          </div>
        </div>
        {/* button */}
        <button className="text-black bg-white font-semibold py-1 px-4 rounded-full">
          Follow
        </button>
      </div>
      {/* {user card} */}
      <div className="flex items-center justify-between">
        {/* image and userinfo */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="avatar"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">Gourav Modi</h1>
            <span className="text-sm text-textGray">@gouravmodi_001</span>
          </div>
        </div>
        {/* button */}
        <button className="text-black bg-white font-semibold py-1 px-4 rounded-full">
          Follow
        </button>
      </div>
      <Link href={"/"} className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendation;
