import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className='border-t-2 border-white-500  p-4 h-[30vh] flex flex-col justify-between'>
      <div className='flex flex-col items-center'>
        <div className='text-lg md:text-2xl my-4'>Where to?</div>
        <ul className='flex flex-col items-center md:flex-row gap-4 md:gap-8 sm:lg md:text-xl'>
          <Link href={"/anime"}>
            <li>Anime</li>
          </Link>
          <Link href={"/manga"}>
            <li>Manga</li>
          </Link>
          <Link href={"/anime/allTimeFav"}>
            <li>All Time Favorite</li>
          </Link>
          <Link href={"/promotion"}>
            <li>Promo Trailers</li>
          </Link>
        </ul>
      </div>

      <div className='flex flex-col items-center md:flex-row md:justify-between md:items-center  '>
        <div className="flex gap-1 md:flex-col my-4 md:my-0">
          <div>Created by</div>
          <div className='flex'>
            <span>Dimple Bhatt with </span>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-red-700'>
                <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
              </svg>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex mb-4 md:mb-0"> 
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-6 text-white'>
                <path d='M12 1.75C6.07 1.75 1.25 6.57 1.25 12.5S6.07 23.25 12 23.25 22.75 18.43 22.75 12.5 17.93 1.75 12 1.75Zm0 19.5c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75s9.25 4.15 9.25 9.25-4.15 9.25-9.25 9.25Zm.07-13.5c-2.52 0-4.57 2.05-4.57 4.57s2.05 4.57 4.57 4.57c1.23 0 2.42-.49 3.29-1.37a.75.75 0 0 0-1.06-1.06c-.53.53-1.25.83-2.03.83a3.07 3.07 0 0 1 0-6.14c.78 0 1.5.3 2.03.83a.75.75 0 1 0 1.06-1.06 4.543 4.543 0 0 0-3.29-1.37Z' />
              </svg>
            </span>
            <span>2025 Dimple - All rights reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
