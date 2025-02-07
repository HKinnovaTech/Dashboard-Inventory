import React from 'react'
import { usePathname } from "next/navigation";

const pagename = () => {
  const pathname = usePathname() || "";
  const getPageTitle = (path: string) => {
    if (path === "/") return "Home";
    return path
      .replace("/", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div>
      <h1>{getPageTitle(pathname)}</h1>
    </div>
  )
}

export default pagename
