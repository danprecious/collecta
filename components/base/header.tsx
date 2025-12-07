import React from "react";
import Logo from "./logo";
import NavBar from "./navBar";
import SearchIcon from "./searchIcon";

const Header = () => {
  return (
    <div className="flex items-center justify-between lg:py-10 p-4 ">
      <Logo />
      <NavBar />
      <SearchIcon />
    </div>
  );
};

export default Header;
