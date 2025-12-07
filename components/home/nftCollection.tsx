"use client";

import { nfts } from "@/data/nfts";

import React, { useState } from "react";
import ImageWithFallback from "../nfts/imageWithFallback";
import { BiSearch } from "react-icons/bi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const NftCollection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNfts, setFilteredNfts] = useState(nfts);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const categories = ["All", "Collectible", "Art", "Music"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    setFilteredNfts(nfts);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      return;
    }

    const filtered = nfts.filter((nft) =>
      nft.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
    setFilteredNfts(filtered);
  };

  const handleFilter = (category: string) => {
    setSelectedCategory(category.toLowerCase());
    const filtered =
      category === "All"
        ? nfts
        : nfts.filter((nft) => nft.category === category.toLowerCase());

    setFilteredNfts(filtered);
  };

  return (
    <div className="p-3 lg:p-0">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="lg:text-[2.5rem] text-[2rem] font-semibold ">
          3D Styles
        </h1>
        <div className="flex items-center gap-4">
          <div className="rounded-[2em] w-full lg:w-[20rem] px-4 py-3 text-foreground/50 lg:mt-0 mt-5 bg-foreground/5 p-2  flex items-center gap-2">
            <input
              type="text"
              placeholder="Search nfts by name"
              className="outline-none border-o w-full"
              onChange={(e) => handleChange(e)}
            />

            <button
              onClick={handleSearch}
              className="rounded-full p-3 bg-foreground/10 cursor-pointer hover:bg-foreground/30"
            >
              <BiSearch />
            </button>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="rounded-[2em] px-5 py-4 border-soft flex items-center gap-2 cursor-pointer"
            >
              {selectedCategory.charAt(0).toUpperCase() +
                selectedCategory.slice(1)}{" "}
              {showCategoryDropdown ? <FaAngleUp /> : <FaAngleDown />}
            </button>

            {showCategoryDropdown && (
              <div className="rounded-lg p-5 border-soft absolute top-18 z-50 backdrop-blur-2xl">
                {categories.map((category) => (
                  <button
                    onClick={() => handleFilter(category)}
                    key={category}
                    className="py-2 px-3 hover:bg-foreground/10 w-full cursor-pointer rounded-2xl"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:grid-cols-4 md:grid-cols-2 grid place-items-center gap-4 pb-10">
        {filteredNfts.map((nft) => {
          const potentialPaths = [
            nft.nftPath + ".jpg",
            nft.nftPath + ".jpeg",
            nft.nftPath + ".png",
          ];

          return (
            <div
              className="overflow-hidden rounded-2xl h-[20em] w-full bg-foreground/20"
              key={nft.name}
            >
              <ImageWithFallback
                paths={potentialPaths}
                width={1000}
                height={1000}
                alt={`nft-image by ${nft.author}`}
                className="w-full h-full object-cover hover:scale-120 transition-all duration-800 rounded-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NftCollection;
