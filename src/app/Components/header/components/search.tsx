import React from "react";

const search = () => {
  return (
    <div className="w-[213px] h-[42px] max-sm:hidden bg-tertiary overflow-hidden flex items-center px-3 rounded-lg">
      <img src="/images/search-interface-symbol.png" alt="" className="w-5 h-5 absolute" />
      <input type="text" placeholder="Search.."  className="text-[#808b9c] pl-8 w-full text-sm border-none bg-inherit focus:outline-none" />
    </div>
  );
};

export default search;
