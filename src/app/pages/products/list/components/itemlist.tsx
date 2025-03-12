"use client"
import Link from "next/link";
import React, { useState } from "react";
import Thismonth from "./thismonth";

const Itemlist = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      productid: "1",
      productname: "Black T-shirt",
      productsize: "M, L, XL",
      price: "100.00",
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
      price: "100.00",
      stock: "100",
      sold: "123",
      category: "Bag",
      rating: "4.5",
      Review: "100",
    },
    {
      productid: "3",
      productname: "Red Hoodie",
      productsize: "S, M, L",
      price: "80.00",
      stock: "75",
      sold: "45",
      category: "Hoodie",
      rating: "4.2",
      Review: "80",
    },
    {
      productid: "4",
      productname: "Blue Jeans",
      productsize: "30, 32, 34",
      price: "120.00",
      stock: "60",
      sold: "90",
      category: "Jeans",
      rating: "4.7",
      Review: "150",
    },
    {
      productid: "5",
      productname: "White Sneakers",
      productsize: "8, 9, 10",
      price: "150.00",
      stock: "40",
      sold: "110",
      category: "Shoes",
      rating: "4.8",
      Review: "200",
    },
    {
      productid: "6",
      productname: "Sports Watch",
      productsize: "One Size",
      price: "200.00",
      stock: "25",
      sold: "75",
      category: "Accessories",
      rating: "4.6",
      Review: "120",
    }
    ,
    {
      productid: "7",
      productname: "Sports Watch",
      productsize: "One Size",
      price: "200.00",
      stock: "25",
      sold: "75",
      category: "Accessories",
      rating: "4.6",
      Review: "120",
    }
    ,
    {
      productid: "8",
      productname: "Sports Watch",
      productsize: "One Size",
      price: "200.00",
      stock: "25",
      sold: "75",
      category: "Accessories",
      rating: "4.6",
      Review: "120",
    }
    ,
    {
      productid: "9",
      productname: "Sports Watch",
      productsize: "One Size",
      price: "200.00",
      stock: "25",
      sold: "75",
      category: "Accessories",
      rating: "4.6",
      Review: "120",
    }
    ,
    {
      productid: "10",
      productname: "Sports Watch",
      productsize: "One Size",
      price: "200.00",
      stock: "25",
      sold: "75",
      category: "Accessories",
      rating: "4.6",
      Review: "120",
    }
    
  ];

  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
    <div className="bg-primary rounded-xl py-6 shadow-lg max-w-[1485px]   mb-8 md:overflow-visible">
      <div className="flex justify-between px-6 items-center">
        <h2 className="text-textcolor font-semibold">Recent Orders</h2>
        <div className="flex gap-4">
          <Link
            href=""
            className="text-white py-1.5 px-3 text-sm bg-[#ff6c2f] font-semibold rounded-lg"
          >
            Add Product
          </Link>
          <Thismonth />
        </div>
      </div>

      <div className=" h-max max-md:max-w-[672px] overflow-auto w-full">
        <table className=" mt-4 min-w-full md:overflow-y-auto">
          <thead>
            <tr className="bg-secondary text-sm text-left border-[#2f3944] ">
              <th className="pl-6 py-4 items-center flex">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 rounded cursor-pointer appearance-none bg-primary checked:bg-orange-500 border border-[#6d7781] checked:border-none after:absolute relative after:w-3 after:h-3 after:top-[2px] after:left-[2px] after:bg-[url('/images/check.png')] after:bg-center after:bg-contain after:bg-no-repeat after:hidden checked:after:block"
                />
              </th>
              <th className="px-4 py-4 xl:w-[420px] min-w-52">Product Name & Size</th>
              <th className="px-4 py-4">Price</th>
              <th className="px-4 py-4 min-w-32">Stock</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4 min-w-44">Rating</th>
              <th className="px-4 py-4 min-w-40">Action</th>
            </tr>
          </thead>

          <tbody>
            {data
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((row) => (
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
                      <img src="/images/vision.png" className="w-10 h-8 bg-secondary p-1 px-2 rounded-lg cursor-pointer" alt="" />
                      <img src="/images/pencil.png" className="w-10 h-8 bg-[#3e3535] p-2 px-3 rounded-lg cursor-pointer" alt="" />
                      <img src="/images/bin.png" className="w-10 h-8 bg-[#3c343a] p-2 px-3 rounded-lg cursor-pointer" alt="" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex bottom-0 justify-end items-center gap-2 px-6 mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1  rounded-lg ${currentPage === 1 ? 'bg-secondary text-gray-500 cursor-not-allowed' : 'bg-secondary text-white hover:bg-opacity-80'}`}
        >
          Previous
        </button>

        <div className="flex gap-1">
          {[...Array(totalPages)].map((_, index) => {
            if (
              index === 0 ||
              index === totalPages - 1 ||
              (index >= currentPage - 1 && index <= currentPage + 1)
            ) {
              return (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-8 h-8 rounded-lg ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-secondary text-white hover:bg-opacity-80'}`}
                >
                  {index + 1}
                </button>
              );
            } else if (
              index === currentPage - 2 ||
              index === currentPage + 2
            ) {
              return <span key={index} className="text-gray-500 px-2">...</span>;
            }
            return null;
          })}
        </div>

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded-lg ${currentPage === totalPages ? 'bg-secondary text-gray-500 cursor-not-allowed' : 'bg-secondary text-white hover:bg-opacity-80'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Itemlist;
