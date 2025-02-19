import React from "react";

const navbar = () => {
  return (
    <div className="sticky top-0 min-w-[280px] bg-[#262d34] h-screen">
      <div className="my-8">
        <div>
          <img src="/images/logo.png" alt="LOGO" className="h-10 mx-8" />
        </div>
        <div className="mt-12 mx-8">
          <h3 className="text-xs text-[#656d79] font-bold">GENERAL</h3>
        </div>
        <div className="mt-6">
          <div
            className="group flex items-center gap-3 py-2 px-8 text-gray-400 hover:text-white  transition-all duration-300 border-l-2 border-transparent hover:border-orange-500"
          >
            <img src="../images/dashboard.png" alt="" className="w-5 h-5" />
            <a href="/" className="font-semibold w-full h-full">
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
