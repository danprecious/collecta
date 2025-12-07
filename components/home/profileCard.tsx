import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";

const ProfileCard = ({
  height,
  conWeight,
  nftPath
}: {
  height: string;
  conWeight: string;
  nftPath: string;
}) => {
  return (
    <div
      className={`bg-background  flex flex-col items-stretch shadow-2xl rounded-3xl overflow-hidden ${conWeight}`}
    >
      <div className=" p-4">
        <div className={`object-cover rounded-2xl overflow-hidden  ${height}`}>
          <Image
            src={nftPath}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
            alt="nft_image"
          />
        </div>

        <div className="flex justify-between items-center my-6">
          <div className="">
            <h2 className="font-semibold">Degan Monkey</h2>
            <p className="text-sm text-foreground/50">Noel G</p>
          </div>
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/authorImage.png"
              width={100}
              height={100}
              alt="author_image"
            />
          </div>
        </div>
      </div>

      <div className="bg-black py-6 flex justify-between px-5 items-center ">
        <div className="text-white text-xs flex gap-4">
          <span className="font-semibold">24 Feb</span>
          <span className="text-white/70">2:00 AM</span>
        </div>
        <div className="text-white">
          <FaDownload />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
