import React from 'react'
import { usePathname } from "next/navigation";
import Functionbutton from './functionbutton';

const pagename = () => {
  const pathname = usePathname() || "";
  const getPageTitle = (path: string) => {
    if (path === "/") return "Home";
    return path
      .replace("/", "")
      .replace(/-/g, " ")
      .toUpperCase();
  };

  return (
    <div className=''>
      <div className='flex justify-center items-center'>
      <h1>{getPageTitle(pathname)}</h1>
      <div className='absolute right-16 flex gap-8'>
        <Functionbutton icon="night"/>
        <Functionbutton icon="night"/>
        <Functionbutton icon="night"/>
        <Functionbutton icon="night"/>
      </div>
    </div>
    </div>
  )
}

export default pagename
