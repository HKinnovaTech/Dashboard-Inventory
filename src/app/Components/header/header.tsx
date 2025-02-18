"use client";
import React, { useState } from "react";
import Pagename from "./components/pagename";
import Functionbutton from "./components/functionbutton";
import Search from "./components/search";
import ThemeToggle from "./components/themebutton";
import "../../globals.css";
import {
  LogOut,
  User,
  MessageSquare,
  DollarSign,
  HelpCircle,
  Lock,
} from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="w-full sticky top-0 py-7 bg-background  text-center flex justify-between items-center  px-12">
      <Pagename />
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Functionbutton icon="bell" />
        <Functionbutton icon="setting" />
        <Functionbutton icon="clock" />
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <img
            src="/images/user.png"
            alt="User"
            className="w-9 h-9 rounded-full"
          />
        </button>

        <div
          className={`absolute top-24 w-40 bg-primary border-2 border-secoundary text-textcolor shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
            isDropdownOpen
              ? "translate-y-2 opacity-100"
              : "translate-y-0 opacity-0 pointer-events-none"
          } z-50`}
        >
          <div className="py-2">
            <p className="text-xs text-left ml-6 font-bold">Welcome Gaston!</p>
          </div>
          <ul className=" text-sm">
            <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
              <User className="w-4 h-4 mr-2" />
              Profile
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
              <DollarSign className="w-4 h-4 mr-2" />
              Pricing
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
              <HelpCircle className="w-4 h-4 mr-2" />
              Help
            </li>
            <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
              <Lock className="w-4 h-4 mr-2" />
              Lock Screen
            </li>
          </ul>
          <div className="border-b-2 border-secoundary ">
            <button className="w-full flex items-center px-4 py-2 text-red-400 hover:bg-primary ">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
