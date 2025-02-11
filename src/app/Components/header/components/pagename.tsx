import React from 'react'
import { usePathname } from "next/navigation";
import Functionbutton from './functionbutton';

const pagename = () => {
  const pathname = usePathname() || "";
  const getPageTitle = (path: string) => {
    if (path === "/") return "WELCOME!";
    return path
      .replace("/", "")
      .replace(/-/g, " ")
      .toUpperCase();
  };

  return (
        <h1 className="font-bold text-l text-textcolor">{getPageTitle(pathname)}</h1>
  );
  
}

export default pagename
