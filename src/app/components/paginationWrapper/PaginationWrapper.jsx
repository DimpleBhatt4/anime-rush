"use client";
import React from "react";
import Pagination from "../footer/pagination/Pagination";
import { usePathname } from "next/navigation";

const PaginationWrapper = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <footer className='w-full border-t border-gray-300 p-4'>
        <Pagination />
    </footer>
  );
};

export default PaginationWrapper;
