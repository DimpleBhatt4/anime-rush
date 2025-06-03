"use react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useWishlistStore from "../../store/useWishlistStore";
import isWishlisted from "../../utils/isWishlisted";

const SidePanel = ({ title, data }) => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addItem = useWishlistStore((state) => state.addItem);
  const removeItem = useWishlistStore((state) => state.removeItem);

  return (
    <div className='py-2 px-6'>
      <div className='flex justify-between items-center mb-4 '>
        <h1 className='font-bold text-2xl'>
          {title}
        </h1>
        <Link className='flex items-center gap-1' href={"/anime/topAiring"}>
          <span>More</span>
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
      <div>
        {data?.map((item, index) => {
          return (
            <div
              key={item.mal_id}
              className='relative flex items-center gap-x-4 my-4'>
              <span className='absolute z-10 left-[-2%] bottom-[10%] md:left-[-4%] md:bottom-[-5%] font-bold text-4xl text-[#CB3E34]'>
                {index + 1}
              </span>
              <div className='flex-shrink-0 w-[60px] h-[60px] relative'>
                <Image
                  src={item.images.jpg.large_image_url}
                  fill
                  alt={"Image"}
                  className='rounded-lg object-cover'
                />
              </div>
              <div className='flex flex-col w-full'>
                <Link href={`/anime/${item.mal_id}`}>
                  <h1 className='font-bold text-lg md:text-xs'>{item?.title}</h1>
                </Link>
                <p className='text-sm md:text-xs'>
                  {item?.episodes} {item.episodes && "episodes"}
                </p>
                <div className='text-sm md:text-xs flex justify-between items-center'>
                  <div className='flex items-center'>
                    <span>{item?.score}</span>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='yellow'
                        className='w-4 h-4'>
                        <path
                          fillRule='evenodd'
                          d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </div>

                  {isWishlisted(wishlist, item.mal_id) ? (
                    <button className="text-lg md:text-sm border px-3 py-1 rounded-md" onClick={() =>removeItem(item.mal_id)}>
                      Remove
                    </button>
                  ) : (
                    <button className="text-lg md:text-sm border px-3 py-1 rounded-md" onClick={() => addItem(item)}>Add</button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidePanel;
