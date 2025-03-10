import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type ProductsDropdownProps = {
  items: string[];
  links: string[];
  name: string;
  image: string;
};

const Dropdown = ({ items, links, name, image }: ProductsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="">
      <div
        className="flex items-center justify-between "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4 py-3 px-8 text-gray-400 hover:text-white transition-all duration-300 border-l-2 border-transparent hover:border-orange-500">
        <img src={`./images/${image}.png`} alt="" className="w-5 h-5" />
          <span className="font-semibold">{name}</span>
        </div>

        {isOpen ? (
          <img src="./images/up-arrow.png" alt="" className="w-2.5 h-2.5"/>
        ) : (
            <img src="./images/down-arrow.png" alt="" className="w-2.5 h-2.5"/>
        )}
      </div>
      {isOpen ? (
        <ul className="mt-2 space-y-4 text-sm ml-20 text-textcol">
            {items.map((item, index) =>
          <li key={index} className="hover:translate-x-2 transition-transform duration-300">
            <Link href={links[index]}>{item}</Link>
          </li>
            )}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
