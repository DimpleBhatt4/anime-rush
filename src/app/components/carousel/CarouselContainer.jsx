import React from "react";
import Carousel from "./Carousel";
import Link from "next/link";
// http://localhost:3000/anime/topAiring
const CarouselContainer = ({ title, data }) => {
  return (
    <div className='border w-full md:w-[60vw] py-4 px-6 right-container'>
      <div className='flex justify-between items-center  mb-4 '>
        <h1 className='font-bold text-2xl'>{title}</h1>
          <Link className='flex items-center gap-1' href={`${title==="All Time Favorite" && '/anime/allTimeFav'}`}>
          <span>View More</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-4 h-4'>
            <path
              fillRule='evenodd'
              d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
          </Link>
      </div>
      {data && <Carousel data={data} />}
    </div>
  );
};

export default CarouselContainer;
