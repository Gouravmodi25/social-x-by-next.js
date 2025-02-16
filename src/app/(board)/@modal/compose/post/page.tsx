"use client";

import Image from "@/components/Image";
import { useRouter } from "next/navigation";
import React from "react";

const PostModal = () => {
  const router = useRouter();

  const closedModal = () => {
    router.back();
  };

  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="w-[600px] py-4 px-8 h-max bg-black rounded-xl mt-12">
        {/* top */}
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={closedModal}>
            X
          </div>
          <div className="text-iconBlue">Draft</div>
        </div>
        {/* center */}
        <div className="py-8 flex gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt=""
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <input
            className="bg-transparent placeholder:text-textGray text-lg outline-none flex-1"
            type="text"
            placeholder="What is happening?!"
          />
        </div>
        {/* bottom */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap">
            <Image
              path="icons/image.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/gif.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full px-5 py-2">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
