import Image from "@/components/Image";
import Link from "next/link";
import React from "react";
import Feed from "@/components/Feed";

const UserPage = () => {
  return (
    <div className="">
      {/* profile */}
      <div className="flex items-center sticky top-0 gap-8 backdrop-blur-md bg-[#00000084] z-10 p-4">
        <Link href={"/"}>
          <Image
            path="icons/back.svg"
            alt="back-button"
            width={24}
            height={24}
          />
        </Link>
        <h1 className="font-semibold text-lg">Gourav Modi</h1>
      </div>
      {/* info */}
      <div className="">
        {/* cover & avatar container */}
        <div className="relative w-full">
          {/* cover */}
          <div className=" w-full aspect-[3/1]">
            <Image
              path="general/cover.jpg"
              alt=""
              width={600}
              height={200}
              tr={true}
            />
          </div>
          {/* avatar */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2">
            <Image
              path="general/avatar.png"
              alt=""
              width={100}
              height={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center gap-2 p-2 justify-end">
          <div className="w-9 h-9 flex items-center justify-center border-[1px] border-gray-500 rounded-full cursor-pointer">
            <Image path="icons/more.svg" alt="more" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center border-[1px] border-gray-500 rounded-full cursor-pointer">
            <Image path="icons/explore.svg" alt="more" width={20} height={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center border-[1px] border-gray-500 rounded-full cursor-pointer">
            <Image path="icons/message.svg" alt="more" width={20} height={20} />
          </div>
          <button className="px-4 py-2 text-black font-bold bg-white rounded-full  ">
            Follow
          </button>
        </div>
        {/* userinfo */}
        <div className="flex flex-col p-4 gap-4">
          {/* username & handle */}
          <div>
            <h1 className="font-bold text-2xl">Gourav Modi</h1>
            <span className="text-sm text-textGray">@gouravmodi001</span>
          </div>
          <p>Indori Foodie Vlogs Youtube Channel</p>
          {/* location job and details */}
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="item-centers gap-2 flex">
              <Image
                className="fill-textGray"
                path="icons/location.svg"
                alt="location"
                width={20}
                height={20}
              />
              <span>India</span>
            </div>
            <div className="item-centers gap-2 flex">
              <Image
                path="icons/date.svg"
                alt="location"
                width={20}
                height={20}
              />
              <span>Joined May 2021</span>
            </div>
          </div>
          {/* following-follower */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">200</span>
              <span className="text-textGray text-[15px]">Followings</span>
            </div>
          </div>
        </div>
      </div>
      {/* Feed */}
      <Feed />
    </div>
  );
};

export default UserPage;
