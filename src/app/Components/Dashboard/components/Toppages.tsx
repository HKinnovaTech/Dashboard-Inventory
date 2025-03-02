import React, { useMemo } from "react";

const Toppages = () => {
    const data =  [
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          { pagepath: "larkon/ecommerce.html", views: 465, exitrate: 4.4 },
          
        ];
  return (
    <div className="bg-primary rounded-xl p-6 shadow-lg h-[464px]">
      <div className="flex justify-between items-center">
        <h2 className="text-textcolor font-semibold">Top Page</h2>
        <a href="" className="text-[#ff6c2f] py-1.5 px-3 text-sm bg-[#3e3535] rounded-lg hover:">View All</a>
      </div>
      <div className="w-full">
      <table className="min-w-full">
  <thead>
    <tr className="bg-secondary text-xs items-start">
      <th className="px-4 py-2">Page Path</th>
      <th className="px-4 py-2">Page Views</th>
      <th className="px-4 py-2">Exit Rate</th>
    </tr>
  </thead>
  <tbody>
    {data.map((row) => (
      <tr key={row.pagepath} className="bg-primary border-b-primary">
        <td className="px-4 py-2">{row.pagepath}</td>
        <td className="px-4 py-2">{row.views}</td>
        <td className="px-4 py-2">{row.exitrate}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default Toppages;
