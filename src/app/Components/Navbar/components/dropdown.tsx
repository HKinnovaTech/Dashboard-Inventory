import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type ProductsDropdownProps = {
  items: string[];
  links: string[];
  name: string;
  image: string;
  currentPath: string;
};

const Dropdown = ({ items, links, name, image, currentPath }: ProductsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isActive = links.some(link => currentPath === link);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="" ref={dropdownRef}>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex items-center gap-4 py-3 px-8 transition-all duration-300 border-l-2 ${
          isActive 
            ? "text-white border-orange-500" 
            : "text-gray-400 border-transparent hover:text-white hover:border-orange-500"
        }`}>
          <img src={`/images/${image}.png`} alt="" className="w-5 h-5" />
          <span className="font-semibold">{name}</span>
        </div>

        {isOpen ? (
          <img src="/images/up-arrow.png" alt="" className="w-2.5 h-2.5 transition-transform duration-300"/>
        ) : (
          <img src="/images/down-arrow.png" alt="" className="w-2.5 h-2.5 transition-transform duration-300"/>
        )}
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="mt-2 space-y-4 text-sm ml-20 text-textcol">
          {items.map((item, index) => {
            const isItemActive = currentPath === links[index];
            return (
              <li key={index} className={`transition-transform duration-300 ${
                isItemActive ? "translate-x-2" : "hover:translate-x-2"
              }`}>
                <Link 
                  href={links[index]} 
                  className={`block w-full transition-colors duration-300 ${
                    isItemActive 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
