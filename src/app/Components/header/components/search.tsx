import React from "react";

const search = () => {
  return (
    <div className="min-w-[214px] min-h-[42px] bg-[#2c3238] flex items-center gap-4 px-3 rounded-xl">
      <img src="/images/search-interface-symbol.png" alt="" className="w-5 h-5"/>
      <input type="text" placeholder="Search.."  className="text-[#808b9c] border-none bg-inherit focus:outline-none" />
    </div>
  );
};

export default search;
