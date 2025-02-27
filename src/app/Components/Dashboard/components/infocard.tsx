import React from "react";
import { FaCaretUp } from "react-icons/fa6";

const InfoCard = (props:any) => {
  return (
    <div className="max-h-[172px] overflow-hidden bg-primary shadow-lg rounded-xl flex flex-col justify-between -z-10">
      <div className="flex items-center justify-between p-7 ">
        <div className="bg-hilights rounded-xl p-3">
          <img src="/images/bucket.png" alt="Bucket" className="w-7 h-7" />
        </div>
        <div>
          <p className="text-textcolor">{props.lable}</p>
          <h2 className="text-3xl font-semibold">{props.value}</h2>
        </div>
      </div>

      <div className="flex justify-between items-center bg-secondary py-3 px-7">
        <div className="flex gap-3 text-sm">
          <div className="flex items-center space-x-1 text-green-500">
            <FaCaretUp size={18} />
            <p>{props.ratio}%</p>
          </div>
          <p>{props.time}</p>
        </div>
        <a href="#" className="text-textcolor text-sm">
          View More
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
