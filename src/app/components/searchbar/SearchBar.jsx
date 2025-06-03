"use client";
import React, { useState } from "react";
import Modal from "../modal/Modal";

const SearchBar = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <>
      <button
       
        className='bg-black border border-white  md:w-[30vw]  rounded-lg  px-2  py-2 md:px-4 text-center md:text-left text-xs md:text-md'
        onClick={() => setSearchClicked(!searchClicked)}>
        Search your favorite anime here..
      </button>
      {searchClicked && <Modal />}
    </>
  );
};

export default SearchBar;
