"use client";
import React from "react";
import Pagename from "./components/pagename";
import Functionbutton from "./components/functionbutton";
import Search from "./components/search";
import ThemeToggle from "./components/themebutton";
import '../../globals.css'

const Header = () => {
  return (
    <div className="w-full sticky top-0 py-7 bg-background  text-center flex justify-between items-center  px-12">
      <Pagename />
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Functionbutton icon="bell" />
        <Functionbutton icon="setting" />
        <Functionbutton icon="clock" />
        <button>
        <img
          src="/images/user.png"
          alt="User"
          className="w-9 h-9 rounded-full"
        />
        </button>
        <Search />
      </div>
    </div>
  );
};

export default Header;
