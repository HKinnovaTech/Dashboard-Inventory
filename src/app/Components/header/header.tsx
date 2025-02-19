"use client";
import React, { useState } from "react";
import Pagename from "./components/pagename";
import Functionbutton from "./components/functionbutton";
import Search from "./components/search";
import ThemeToggle from "./components/themebutton";
import "../../globals.css";
import Userinfo from "./components/userinfo";


const Header = () => {
  
  return (
    <div className="w-full sticky top-0 py-7 bg-background  text-center flex justify-between items-center  px-12">
      <Pagename />
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Functionbutton icon="bell" />
        <Functionbutton icon="setting" />
        <Functionbutton icon="clock" />
        <Userinfo/>
        <Search />
      </div>
    </div>
  );
};

export default Header;
