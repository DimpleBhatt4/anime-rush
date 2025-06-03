"use client";
import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import Card from "../components/card/Card";
import Pagination from "../components/footer/pagination/Pagination";
import SubNavBar from "../components/navbar/SubNavBar";
import { getFilteredDataByID } from "../utils/getFilteredDataByID";
import useWishlistStore from "../store/useWishlistStore";

const page = () => {
  const { wishlist } = useWishlistStore();
  console.log("wishlist", wishlist);

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <div className='flex flex-wrap  md:flex-row justify-center items-center my-4 gap-4'>
          {wishlist?.map((item, index) => (
            <Card
              type={
                item?.type === "Manga"
                  ? "manga"
                  : item?.studios?.[0]?.type === "anime"
                  && "anime"
              }
              key={index}
              img_url={item.images.jpg.large_image_url}
              title={item?.title}
              id={item.mal_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
