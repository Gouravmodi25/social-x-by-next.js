import React from "react";
import Image from "./Image";

const Search = () => {
  return (
    <div className="bg-inputGray flex items-center gap-4 rounded-full py-2 px-4 ">
      <Image path="icons/explore.svg" alt="search" width={16} height={16} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-textGray"
      />
    </div>
  );
};

export default Search;
