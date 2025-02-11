import React from "react";
import Image from "./Image";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <Image path="icons/infoMore.svg" width={16} height={16} alt="info-more" />
    </div>
  );
};

export default PostInfo;
