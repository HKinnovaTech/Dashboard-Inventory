import React from 'react'
import { usePathname } from "next/navigation";

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
        <h1 className="font-bold text-lg text-textcolor">{getPageTitle(pathname)}</h1>
  );
  
}

export default pagename
