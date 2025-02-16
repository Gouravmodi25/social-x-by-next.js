import Comments from "@/components/Comments";
import Image from "@/components/Image";
import Post from "@/components/Post";
import Link from "next/link";
import React from "react";

const StatusPage = () => {
  return (
    <div className="">
      <div className="flex items-center sticky top-0 gap-8 backdrop-blur-md bg-[#00000084] z-10 p-4">
        <Link href={"/"}>
          <Image
            path="icons/back.svg"
            alt="back-button"
            width={24}
            height={24}
          />
        </Link>
        <h1 className="font-semibold text-lg">Post</h1>
      </div>
      <Post type="status" />
      <Comments />
    </div>
  );
};

export default StatusPage;
