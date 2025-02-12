import React from "react";
import Image from "@/components/Image";
import PostInfo from "./PostInfo";
import PostInteraction from "./PostInteraction";
import { imagekit } from "@/utils";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("67ac8ea0432c47641682bcfe");

  console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* post type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24">
          <path
            className="fill-textGray"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Lama Dev Re-posted</span>
      </div>
      {/* post content */}
      <div className="flex gap-4">
        {/* avatar */}
        <div className="relative w-10 h-10 overflow-hidden rounded-full">
          <Image
            path="general/avatar.png"
            width={100}
            height={100}
            alt="post-image"
            tr={true}
          />
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* top */}
          <div className="flex items-center justify-between gap-2 ">
            <div className="flex items-center flex-wrap gap-2">
              <h1 className="text-md font-bold">Lama Dev</h1>
              <span className="text-textGray">@lamaWebDev</span>
              <span className="text-textGray">1 Day Ago</span>
            </div>
            <PostInfo />
          </div>
          {/* text-media content */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic ex
            error repellat nisi blanditiis illo ab dolores assumenda temporibus
            qui magnam nostrum fugit officia, vitae nam nobis rerum voluptate.
          </p>
          {/* <Image
            path="general/post.jpeg"
            width={600}
            height={600}
            alt="post-image"
          /> */}
          {fileDetails && fileDetails.fileType == "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              width={fileDetails.width}
              height={fileDetails.height}
              className={`${
                fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
              }`}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={`${
                fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
              }`}
            />
          )}
          <PostInteraction />
        </div>
      </div>
    </div>
  );
};

export default Post;
