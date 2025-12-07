"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchIcon = () => {
  return (
    <div className="rounded-full p-2 border-soft items-center justify-center flex cursor-pointer transition">
      <BiSearch size={15} />
    </div>
  );
};

export default SearchIcon;
