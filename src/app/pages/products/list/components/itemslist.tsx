import React, { useMemo } from "react";

const Recentorders = () => {
  const data = [
    {
      orderid: "#RB5625",
      date: "28 Aprial 2025",
      product: "./images/product-1.png",
      customername: "Anna Backer",
      email: "annabacker@gmail.com",
      phone: "(+1)-555-1564-261",
      address: "Burr Ridge/Illinois",
      paymenttype: "Credit Card",
      status: "Complete",
    },
    {
      orderid: "#R354R25",
      date: "28 Aprial 2025",
      product: "./images/product-2.png",
      customername: "Anna Backer",
      email: "annabacker@gmail.com",
      phone: "(+1)-555-1564-261",
      address: "Burr Ridge/Illinois",
      paymenttype: "Credit Card",
      status: "Processing",
    },
  ];
  return (
    <div className="bg-primary rounded-xl py-6 shadow-lg h-[464px] overflow-hidden">
      <div className="flex justify-between px-6 items-center">
        <h2 className="text-textcolor font-semibold">Recent Orders</h2>
        <a
          href=""
          className="text-[#ff6c2f] py-1.5 px-3 text-sm bg-[#3e3535] rounded-lg hover:"
        >
          View All
        </a>
      </div>

      <table className="min-w-full mt-4">
        <thead>
          <tr className="bg-secondary text-xs text-left border-[#2f3944]">
            <th className="px-6 py-4">Order ID</th>
            <th className="px-4 py-4">Date</th>
            <th className="px-4 py-4">Product</th>
            <th className="px-4 py-4">Customer Name</th>
            <th className="px-4 py-4">Email ID</th>
            <th className="px-4 py-4">Phone no</th>
            <th className="px-4 py-4">Address</th>
            <th className="px-4 py-4">Payment Type</th>
            <th className="px-4 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.orderid}
              className="bg-primary text-xs border-b-2 border-secondary hover:bg-[#272e35]"
            >
              <td className="px-6 py-3 text-messagetext">
                <a href="">{row.orderid}</a>
              </td>
              <td className="px-4 py-3">{row.date}</td>
              <td className="px-4 py-3"><img src={row.product} alt="" className="w-10 h-10 object-cover" /></td>
              <td className="px-4 py-3 text-messagetext">
                <a href="">{row.customername}</a>
              </td>
              <td className="px-4 py-3">{row.email}</td>
              <td className="px-4 py-3">{row.phone}</td>
              <td className="px-4 py-3">{row.address}</td>
              <td className="px-4 py-3">{row.paymenttype}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1">
                  <div className={`w-3 h-3 rounded-full ${row.status == "Complete" ? "bg-green-500" : "bg-[#ff6c2f]"}`}></div>
                  {row.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recentorders;
