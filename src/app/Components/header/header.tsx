"use client";
import React from "react";
import Pagename from "./components/pagename";
import Functionbutton from "./components/functionbutton";
import Search from "./components/search";
import ThemeToggle from "./components/themebutton";

const Header = () => {
  return (
    <div className="w-full my-8">
      <div className="container mx-auto text-center flex justify-between items-center px-6">
        <Pagename />
        <div className="flex items-center gap-6">
          <ThemeToggle/>
          <Functionbutton icon="bell" />
          <Functionbutton icon="setting" />
          <Functionbutton icon="clock" />
          <img
            src="/images/user.png"
            alt="User"
            className="w-9 h-9 rounded-full"
          />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
