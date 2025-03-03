import React, { useMemo } from "react";

const Toppages = () => {
  const data = [
    { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
    { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
    { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
    { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
    { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
    { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
    { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
  ];
  return (
    <div className="bg-primary rounded-xl py-6 shadow-lg h-[464px] overflow-hidden">
      <div className="flex justify-between px-6 items-center">
        <h2 className="text-textcolor font-semibold">Top Page</h2>
        <a
          href=""
          className="text-[#ff6c2f] py-1.5 px-3 text-sm bg-[#3e3535] rounded-lg hover:"
        >
          View All
        </a>
      </div>

      <table className="min-w-full mt-4">
          <thead>
            <tr className="bg-secondary text-sm text-left border-[#2f3944]">
              <th className="px-6 py-4">Page Path</th>
              <th className="px-4 py-4">Page Views</th>
              <th className="px-4 py-4">Exit Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.pagepath} className="bg-primary border-b-2 border-secondary hover:bg-[#272e35]">
                <td className="px-6 py-3">{row.pagepath}</td>
                <td className="px-4 py-3">{row.views}</td>
                <td className="px-4 py-3 "><span className="bg-[#264a3c] text-[#23c556] px-1.5  rounded-lg text-sm">{row.exitrate}%</span></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Toppages;
