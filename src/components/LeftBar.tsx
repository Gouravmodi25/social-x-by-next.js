"use client";
import Image from "@/components/Image";
import Link from "next/link";
import React from "react";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky flex flex-col justify-between top-0 pt-2 pb-8">
      {/* logo-menu-button */}
      <div className="flex flex-col gap-4 items-center text-lg xxl:items-start">
        <Link href={"/"} className="p-2 rounded-full hover:bg-[#181818]">
          <Image path="icons/logo.svg" alt="logo" width={24} height={24} />
        </Link>

        {/* Menu-list */}

        <div className="flex flex-col gap-4">
          {menuList.map((item) => (
            <Link
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
              href={item.link}
              key={item.id}>
              <Image
                path={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* button */}
        <Link
          href={"/"}
          className="bg-white text-black rounded-full font-bold w-12 h-12 flex items-center justify-center xl:hidden">
          <Image
            alt="new-post"
            path={"icons/post.svg"}
            width={24}
            height={24}
          />
        </Link>
        <Link
          href={"/"}
          className="hidden  xl:block bg-white text-black font-semibold rounded-full py-2 px-20">
          Post
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path={"/general/avatar.png"}
              alt="lama dev"
              width={100}
              height={100}
              tr={true}
            />
          </div>
          <div className="hidden xl:flex flex-col">
            <span className="font-bold">Lama Dev</span>
            <span className="text-sm text-textGray">@lamaWebDev</span>
          </div>
        </div>
        <div className="hidden xl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
