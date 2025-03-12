"use client"
import React, { useState } from "react";

const Itemlist = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = [
    {
      productid: "1",
      productname: "Black T-shirt",
      productsize: "M, L, XL",
      price: "100",
      stock: "100",
      sold: "123",
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
      sold: "123",
      category: "Bag",
      rating: "4.5",
      Review: "100",
    },
  ];

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedItems(data.map(item => item.productid));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (productId: string, checked: boolean) => {
    if (checked) {
      setSelectedItems(prev => [...prev, productId]);
    } else {
      setSelectedItems(prev => prev.filter(id => id !== productId));
      setSelectAll(false);
    }
  };

  return (
    <div className="bg-primary rounded-xl py-6 shadow-lg h-[464px] overflow-hidden">
      <div className="flex justify-between px-6 items-center">
        <h2 className="text-textcolor font-semibold">Recent Orders</h2>
        <a
          href=""
          className="text-[#ff6c2f] py-1.5 px-3 text-sm bg-[#3e3535] rounded-lg hover:"
        >
          Add Product
        </a>
      </div>

      <table className="min-w-full mt-4">
        <thead>
          <tr className="bg-secondary text-sm text-left border-[#2f3944]">
            <th className="pl-6 py-4 items-center flex">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={(e) => handleSelectAll(e.target.checked)}
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
              className="bg-primary text-sm border-b-2 border-secondary hover:bg-[#272e35]"
            >
              <td className="pl-6 py-3">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(row.productid)}
                  onChange={(e) => handleSelectItem(row.productid, e.target.checked)}
                  className="w-4 h-4 rounded cursor-pointer appearance-none bg-primary checked:bg-orange-500 border border-[#6d7781] checked:border-none after:absolute relative after:w-3 after:h-3 after:top-[2px] after:left-[2px] after:bg-[url('/images/check.png')] after:bg-center after:bg-contain after:bg-no-repeat after:hidden checked:after:block"
                />
              </td>
              <td className="px-4 py-3 flex items-center"> <img src="/images/p-1.png" className="w-14 h-14 bg-secondary rounded-xl mr-3  " alt="" /><div>{row.productname} <br /><span className="text-gray-400 text-sm">Size: {row.productsize}</span></div></td>
               <td className="px-4 py-3">${row.price}</td>
              <td className="px-4 py-3">{row.stock} Item Left<br /> <span className="text-[#656d79] text-xs">{row.sold} sold</span></td>
              <td className="px-4 py-3">{row.category}</td>
              <td className="px-4 py-3"><span className="bg-secondary px-2 py-1 rounded-lg">⭐{row.rating}</span> {row.Review} Review</td>
              <td className="px-4 py-3">
                <div className="flex gap-3 ">
                  <img src="" className="bg-secondary py-4 px-5 rounded-lg cursor-pointer" alt="" />
                  <img src="" className="bg-secondary py-4 px-5 rounded-lg cursor-pointer" alt="" />
                  <img src="" className="bg-secondary py-4 px-5 rounded-lg cursor-pointer" alt="" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itemlist;
