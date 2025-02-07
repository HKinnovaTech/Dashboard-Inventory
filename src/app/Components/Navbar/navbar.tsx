import React from "react";

const navbar = () => {
  return (
    <div className=" min-w-[280px] bg-[#262d34] h-screen">
      <div className="m-8">
        <div>
          <img src="/images/logo.png" alt="LOGO" className="h-10" />
        </div>
        <div className="mt-12">
          <h3 className="text-xs text-[#656d79] font-bold">GENERAL</h3>
        </div>
      </div>
    </div>
  );
};

export default navbar;
