import React, { useEffect, useRef, useState } from "react";

const Thismonth = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
      
  return (
    <div className="flex items-center justify-center" ref={dropdownRef}>
      <button className="bg-secondary text-white py-1.5 px-3 text-sm rounded-lg flex items-center gap-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <span>This Month</span>
        <img 
          src={isDropdownOpen ? "/images/up-arrow.png" : "/images/down-arrow.png"} 
          alt="" 
          className="w-2 h-2 transition-transform duration-300 grayscale hover:grayscale-0"
        />
      </button>

      <div
        className={`absolute z-50 w-40 mt-36 mr-12 bg-primary border-2 border-secondary text-textcolor shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 ease-in-out ${
          isDropdownOpen
            ? "translate-y-2 opacity-100"
            : "translate-y-0 opacity-0 pointer-events-none"
        } z-50`}
        
        
      >
        <ul className=" text-sm">
          <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
            Download
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
            Import
          </li>
          <li className="flex items-center px-6 py-2 hover:bg-secoundary  cursor-pointer">
            Export
          </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Thismonth