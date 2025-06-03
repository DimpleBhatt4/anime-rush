"use client";
import React, { useEffect, useState } from "react";
import useFetch from "../../utils/useFetch";
import Card from "../../components/card/Card";
import SubNavBar from "@/app/components/navbar/SubNavBar";
import { getFilteredPromoByID } from "@/app/utils/getFilteredPromoByID";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const [animeCategories, setAnimeCategories] = useState([
    {
      category: "Just Added",
      url: `https://api.jikan.moe/v4/watch/promos?page=1`,
      isActive: true,
      currPage: 1,
    },
    {
      category: "Most Popular",
      url: "https://api.jikan.moe/v4/watch/episodes/popular?page=1",
      isActive: false,
      currPage: 1,
    },
  ]);
  const [currURL, setCurrURL] = useState(animeCategories[0].url);

  const { data, pagination } = useFetch(currURL);
  const [localPage, setLocalPage] = useState(1);
  const resultsPerPage = 10;

  let uniqueData = data ? getFilteredPromoByID(data?.data) : [];
  let filteredData = [];

  if (currURL !== animeCategories[0].url) {
    filteredData = uniqueData.filter((item) => item.region_locked !== true);
  } else {
    filteredData = uniqueData;
  }

  // manually paginating
  const paginatedData = filteredData.slice(
    (localPage - 1) * resultsPerPage,
    localPage * resultsPerPage
  );


  useEffect(() => {
    setLocalPage(1);
  }, [currURL]);


  return (
    <div className='min-h-screen flex flex-col'>
      <SubNavBar
        navData={animeCategories}
        setNavData={setAnimeCategories}
        setCurrURL={setCurrURL}
      />
      <div className='flex-grow'>
        <div className='flex flex-wrap md:flex-row justify-center items-center my-4 gap-4'>
          {paginatedData.map((item, index) => (
            <div
              key={index}
              className='border rounded-lg w-[45%] md:w-[20%] p-2 flex flex-col items-center'>
              <div className='w-full h-[50%] aspect-[2/3] md:aspect-square relative'>
                <Image
                  src={
                    currURL === animeCategories[0].url
                      ? item?.trailer?.images?.large_image_url
                      : item?.entry?.images?.jpg?.image_url
                  }
                  alt='Anime'
                  fill
                  className='rounded-lg object-cover'
                />
              </div>
              <div className='mt-2 text-center'>
                <h1 className='font-semibold text-xs line-clamp-2'>
                  {item?.title}
                </h1>
              </div>
              <div className='my-2'>
                <a
                  href={`${item?.trailer?.url}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border py-1 px-2 my-2 rounded-lg'>
                  PLAY
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Pagination */}
      <div className='flex justify-between mx-auto w-full border-t border-gray-300 p-4'>
        <div>
          Showing {(localPage - 1) * resultsPerPage + 1} to{" "}
          {Math.min(localPage * resultsPerPage, filteredData.length)} of{" "}
          {filteredData.length}
        </div>
        <div className='flex gap-4'>
          <button
            className={`flex justify-center items-center border w-[100px] px-4 py-2 rounded-lg ${
              localPage === 1 ? "cursor-not-allowed opacity-[0.5]" : ""
            }`}
            onClick={() => setLocalPage((prev) => Math.max(prev - 1, 1))}
            disabled={localPage === 1}>
            Previous
          </button>
          <button
            className={`flex justify-center items-center border w-[100px] px-4 py-2 rounded-lg ${
              localPage * resultsPerPage >= filteredData.length
                ? "cursor-not-allowed opacity-[0.5]"
                : ""
            }`}
            onClick={() => setLocalPage((prev) => prev + 1)}
            disabled={localPage * resultsPerPage >= filteredData.length}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
