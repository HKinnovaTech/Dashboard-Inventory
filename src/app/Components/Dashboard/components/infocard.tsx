import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";

const InfoCard = () => {
  return (
    <div className="w-[362px] h-[172px] bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">

      <div className="flex items-center space-x-4">
        <img src="/images/bucket.png" alt="Bucket" className="w-12 h-12" />
        <div>
          <p className="text-textcolor">Total Orders</p>
          <h2 className="text-2xl font-semibold">12,340</h2>
        </div>
      </div>

      <div className="flex justify-between items-center bg-secoundary">
        <div className="flex gap-3 text-sm">
        <div className="flex items-center space-x-1 text-green-500">
          <FaCaretUp size={18} />
          <p>2.3%</p>
        </div>
          <p>Last Week</p>
        </div>
        <a href="#" className="text-textcolor ">View More</a>
      </div>
    </div>
  );
};

export default InfoCard;
