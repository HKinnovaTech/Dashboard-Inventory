import React, { useMemo } from "react";

const Itemlist = () => {
  const data = [
    {
      productid: "1",
      productname: "Black T-shirt",
      productsize: "M, L, XL",
      price: "100",
      stock: "100",
      category: "T-shirt",
      rating: "4.5",
      Review: "100",
    },
    {   
      productid: "2",
      productname: "Olive Green Leather Bag",
      productsize: "M, L, XL",
      price: "100",
      stock: "100",
      category: "Bag",
      rating: "4.5",
      Review: "100",
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
            <th className="px-6 py-4 items-center flex">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded cursor-pointer appearance-none bg-primary checked:bg-orange-500 border border-[#6d7781] checked:border-none after:absolute relative after:w-3 after:h-3 after:top-[2px] after:left-[2px] after:bg-[url('/images/check.png')] after:bg-center after:bg-contain after:bg-no-repeat after:hidden checked:after:block"
              />
            </th>
            <th className="px-4 py-4">Product Name & Size</th>
            <th className="px-4 py-4">Price</th>
            <th className="px-4 py-4">Stock</th>
            <th className="px-4 py-4">Category</th>
            <th className="px-4 py-4">Rating</th>
            <th className="px-4 py-4">Action</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((row) => (
            <tr
              key={row.productid}
              className="bg-primary text-xs border-b-2 border-secondary hover:bg-[#272e35]"
            >
              <td className="px-4 py-3"><input 
                type="checkbox" 
                className="w-4 h-4 rounded cursor-pointer appearance-none bg-primary checked:bg-orange-500 border border-[#6d7781] checked:border-none after:absolute relative after:w-3 after:h-3 after:top-[2px] after:left-[2px] after:bg-[url('/images/check.png')] after:bg-center after:bg-contain after:bg-no-repeat after:hidden checked:after:block"
              /></td>
              <td className="px-4 py-3"> <img src="" className="" alt="" /><div>{row.productname} <br />Size:  {row.productsize}</div></td>
              <td className="px-4 py-3">{row.price}</td>
              <td className="px-4 py-3">{row.stock}</td>
              <td className="px-4 py-3">{row.category}</td>
              <td className="px-4 py-3">{row.rating} <br /> {row.Review}</td>
              <td className="px-4 py-3"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itemlist;
