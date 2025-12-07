import React from 'react'
import { CgMail } from 'react-icons/cg'
import ProfileCard from './profileCard'

const HeroSection = () => {
  return (
<div className="flex flex-col lg:flex-row justify-between items-center my-20 p-3 lg:p-0">
      <div className="lg:w-[55%] flex flex-col gap-8">
        <h1 className="lg:text-[5rem] text-[2.7rem] font-bold lg:leading-25">
          Collect your <br /> favorite avatar.
        </h1>
        <p className="text-foreground/50 lg:text-lg ">
          With collecta, you can collect more than 1m+ avatar, <br /> From 120k
          visual artists easily
        </p>
        <div className="rounded-[2em] text-foreground/50b lg:mt-5 bg-foreground/5 p-2 lg:w-[70%] flex items-center gap-2">
          <CgMail className="text-[1.6rem] ml-5"/>
          <input className="w-full outline-none border-0 text-sm font-medium" placeholder="Enter your email address"/>
          <button className="rounded-4xl text-sm bg-foreground text-background py-3 px-6">
            Submit
          </button>
        </div>
      </div>
      <div className="lg:w-[45%] relative flex items-center justify-end mt-20 lg:mt-0">
        <ProfileCard nftPath="/nfts/nft.jpeg" height="h-[20em] " conWeight ="max-w-[20em] lg:w-[20em] z-50" />
        <ProfileCard nftPath="/nfts/nft5.jpeg" height="h-[15em] " conWeight ="max-w-[15em] lg:w-[20em]  absolute z-20 left-[150] lg:-rotate-15 top-[-2em]" />
      </div>
    </div>
  )
}

export default HeroSection