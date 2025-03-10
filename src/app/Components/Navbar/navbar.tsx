"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Dropdown from "./components/dropdown";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50">
      {!isOpen && (
        <button
          className="xl:hidden fixed top-4 left-4 z-50 mt-5 bg-[#262d34] text-textcolor rounded-lg"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      <div
        className={`fixed top-0 left-0 h-lvh min-h-svh bg-[#262d34] text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0 xl:min-w-[280px] xl:sticky xl:top-0`}
      >
        <div className="py-8">
          <div className="flex justify-between items-center mx-8">
            <img src="/images/logo.png" alt="LOGO" className="h-10" />
          </div>
          <div className="mt-12 mx-8">
            <h3 className="text-xs text-[#656d79] font-bold">GENERAL</h3>
          </div>

          <div className="mt-6 pr-6">
            <div className="group flex items-center gap-4 py-3 px-8 text-gray-400 hover:text-white transition-all duration-300 border-l-2 border-transparent hover:border-orange-500">
              <img src="/images/dashboard.png" alt="" className="w-5 h-5" />
              <Link href="/" className="font-semibold w-full h-full">
                Dashboard
              </Link>
            </div>

            <Dropdown
              image="product"
              name={"Products"}
              items={["List", "Grid", "Details", "Edit", "Create"]}
              links={["/list", "/grid", "/details", "/edit", "/create"]}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 ml-60 xl:hidden z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
