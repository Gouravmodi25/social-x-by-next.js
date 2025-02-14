import React from "react";
import Post from "./Post";
import Image from "./Image";

const Comments = () => {
  return (
    <div className="">
      <form className="flex items-center justify-between gap-4 p-4">
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            path="general/avatar.png"
            width={100}
            height={100}
            alt=""
            tr={true}
          />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent p-2 text-xl outline-none "
          placeholder="Post Your Reply"
        />
        <button className="px-4 py-2 rounded-full bg-white text-black font-bold">
          Reply
        </button>
      </form>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Comments;
