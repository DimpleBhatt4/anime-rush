"use client";
import React, { useState } from "react";
import Modal from "../modal/Modal";

const SearchBar = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <>
      <button
       
        className='bg-black border border-white w-[50vw] md:w-[30vw]  rounded-lg  px-4 py-2 md:px-2 md:py-2 text-left text-xs md:text-md'
        onClick={() => setSearchClicked(!searchClicked)}>
        Search your favorite anime here..
      </button>
      {searchClicked && <Modal />}
    </>
  );
};

export default SearchBar;
