import React, { useMemo } from "react";

const Toppages = () => {
    const data = useMemo(
        () => [
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          
        ],
        []
      );
  return (
    <div className="bg-primary rounded-xl p-6 shadow-lg h-[464px]">
      <div className="flex justify-between items-center">
        <h2 className="text-textcolor font-semibold">Top Page</h2>
        <a href="" className="text-[#ff6c2f] py-1.5 px-3 text-sm bg-[#3e3535] rounded-lg hover:">View All</a>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default Toppages;
