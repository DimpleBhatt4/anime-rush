"use client";
import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import Card from "../components/card/Card";
import Pagination from "../components/footer/pagination/Pagination";
import SubNavBar from "../components/navbar/SubNavBar";
import { getFilteredDataByID } from "../utils/getFilteredDataByID";

const page = () => {
    // const {} = useWis
  const [animeCategories, setAnimeCategories] = useState([
    {
      category: "All manga",
      url: `https://api.jikan.moe/v4/manga?limit=10&page=1`,
      isActive: true,
      currPage: 1,
    },
    {
      category: "Top Manga",
      url: "https://api.jikan.moe/v4/top/manga?filter=favorite&limit=10&page=1",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Top one-shots",
      url: "https://api.jikan.moe/v4/top/manga?type=oneshot&limit=10&page=1",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Top Dou-jinshi",
      url: "https://api.jikan.moe/v4/top/manga?type=doujin&limit=10&page=1",
      isActive: false,
      currPage: 7,
    },
    {
      category: "Top Light Novels",
      url: "https://api.jikan.moe/v4/top/manga?type=lightnovel&limit=10&page=1",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Top Novels",
      url: "https://api.jikan.moe/v4/top/manga?type=novel&limit=10&page=1",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Most Popular",
      url: "https://api.jikan.moe/v4/top/manga?filter=bypopularity&limit=10&page=1",
      isActive: false,
      currPage: 1,
    },
  ]);
  const [currURL, setCurrURL] = useState(animeCategories[0].url);

  const { data, pagination } = useFetch(currURL);

  const filteredData = data ? getFilteredDataByID(data?.data) : [];

  function handlePaginate(direction) {
    let updatedCategories = animeCategories.map((item) => {
      if (item.isActive) {
        let newPage =
          direction === "next"
            ? item.currPage + 1
            : Math.max(1, item.currPage - 1);
        let newURL = item.url.split("&page=")[0];
        newURL += newURL.includes("?")
          ? `&page=${newPage}`
          : `?page=${newPage}`;
        setCurrURL(newURL);
        return {
          ...item,
          currPage: newPage,
          url: newURL,
        };
      }
      return item;
    });
    setAnimeCategories(updatedCategories);
  }

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Sub navigation bar for categories */}
      <SubNavBar
        navData={animeCategories}
        setNavData={setAnimeCategories}
        setCurrURL={setCurrURL}
      />
      <div className='flex-grow'>
        <div className='flex flex-wrap  md:flex-row justify-center items-center my-4 gap-4'>
          {filteredData?.map((item, index) => (
            <Card
              key={index}
              img_url={item.images.jpg.large_image_url}
              title={item?.title}
              id={item.mal_id}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className='flex justify-between mx-auto w-full border-t border-gray-300 p-4'>
        <div>
          Showing{" "}
          {pagination.current_page === 1
            ? pagination.current_page
            : pagination.current_page * 10}{" "}
          to{" "}
          {pagination.current_page === 1
            ? 10
            : pagination.current_page * 10 + 10}{" "}
          of {pagination?.items?.total} results
        </div>
        <div className='flex gap-4'>
          <button
            className={`flex justify-center items-center border w-[100px] px-4 py-2 rounded-lg ${
              pagination?.current_page === 1
                ? "cursor-not-allowed opacity-[0.5]"
                : ""
            }`}
            onClick={() => handlePaginate("prev")}
            disabled={pagination?.current_page === 1}>
            Previous
          </button>
          <button
            className={`flex justify-center items-center border w-[100px] px-4 py-2 rounded-lg ${
              !pagination?.has_next_page
                ? "cursor-not-allowed opacity-[0.5]"
                : ""
            }`}
            onClick={() => handlePaginate("next")}
            disabled={!pagination?.has_next_page}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
