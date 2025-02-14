import React from "react";
import Image from "./Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 flex flex-col gap-4 rounded-2xl border-[1px] border-borderGray ">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* trends event */}
      <div className="flex gap-4 ">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image
            path="general/post.jpeg"
            alt="event"
            width={120}
            height={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-textGrayLight font-bold">
            Nadal vs Federer Grand Slam
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology ● Trending</span>
          <Image path="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-sm text-textGray">20K Posts</span>
        </div>
      </div>
      {/* topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology ● Trending</span>
          <Image path="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-sm text-textGray">20K Posts</span>
        </div>
      </div>
      {/* topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology ● Trending</span>
          <Image path="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-sm text-textGray">20K Posts</span>
        </div>
      </div>
      {/* topics */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology ● Trending</span>
          <Image path="icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <div className="">
          <h2 className="text-textGrayLight font-bold">OpenAI</h2>
          <span className="text-sm text-textGray">20K Posts</span>
        </div>
      </div>
      <Link href={"/"} className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
