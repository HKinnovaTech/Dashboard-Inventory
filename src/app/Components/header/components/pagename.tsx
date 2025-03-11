import React from 'react'
import { usePathname } from "next/navigation";

const pagename = () => {
  const pathname = usePathname() || "";
  
  const getPageTitle = (path: string) => {
    if (path === "/") return "WELCOME!";
    
    const cleanPath = path.replace(/^\/pages\//, '');
    const parts = cleanPath.split('/');

    if (parts.length >= 2) {
      return parts
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
    }
    
    return cleanPath.toUpperCase();
  };

  return (
    <h1 className="font-bold text-lg text-textcolor">{getPageTitle(pathname)}</h1>
  );
}

export default pagename
