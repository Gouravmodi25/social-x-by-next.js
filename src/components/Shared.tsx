"use client";
import React, { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { sharedAction } from "@/action";
import ImageEditor from "./ImageEditor";

const Shared = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const previewUrl = media ? URL?.createObjectURL(media) : null;

  const handleMediaEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files && e?.target?.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => sharedAction(formData, settings)}>
      {/* avatar */}
      <div className="relative w-10 h-10 overflow-hidden rounded-full">
        <Image
          path="general/avatar.png"
          alt="image"
          width={100}
          height={100}
          tr={true}
        />
      </div>
      {/* other */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What is happening?!"
          name="desc"
          className="bg-transparent placeholder:text-textGray outline-none text-xl"
        />
        {media?.type?.includes("image") && previewUrl && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              className={`w-full rounded-xl ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type == "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
              src={previewUrl}
              alt="image-preview"
              width={500}
              height={500}
            />
            <div
              className="cursor-pointer absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm"
              onClick={() => setIsEditorOpen(true)}>
              Edit
            </div>
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 h-8 text-white w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}>
              X
            </div>
          </div>
        )}
        {media?.type?.includes("video") && previewUrl && (
          <div className="relative">
            <video src={previewUrl} controls />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 h-8 text-white w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}>
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewUrl && (
          <ImageEditor
            onClosed={() => setIsEditorOpen(false)}
            previewUrl={previewUrl}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              onChange={handleMediaEvent}
              className="hidden"
              id="file"
              name="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>
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
          <button className="bg-white text-black font-bold rounded-full px-4 py-2">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Shared;
