"use client";
import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import Card from "../components/card/Card";
import Pagination from "../components/footer/pagination/Pagination";
import SubNavBar from "../components/navbar/SubNavBar";
import { getFilteredDataByID } from "../utils/getFilteredDataByID";

const page = () => {
  const [daywiseSchedule, setDaywiseSchedule] = useState([
    {
      category: "All",
      url: "https://api.jikan.moe/v4/schedules",
      isActive: true,
      currPage: 1,
    },
    {
      category: "Monday",
      url: "https://api.jikan.moe/v4/schedules?filter=monday",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Tuesday",
      url: "https://api.jikan.moe/v4/schedules?filter=tuesday",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Wednesday",
      url: "https://api.jikan.moe/v4/schedules?filter=wednesday",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Thursday",
      url: "https://api.jikan.moe/v4/schedules?filter=thursday",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Friday",
      url: "https://api.jikan.moe/v4/schedules?filter=friday",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Saturday",
      url: "https://api.jikan.moe/v4/schedules?filter=saturday",
      isActive: false,
      currPage: 1,
    },
    {
      category: "Sunday",
      url: "https://api.jikan.moe/v4/schedules?filter=sunday",
      isActive: false,
      currPage: 1,
    },
  ]);
  const [currURL, setCurrURL] = useState(daywiseSchedule[0].url);

  const { data } = useFetch(currURL);

  const filteredData = data ? getFilteredDataByID(data?.data) : [];

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Sub navigation bar for categories */}
      <SubNavBar
        navData={daywiseSchedule}
        setNavData={setDaywiseSchedule}
        setCurrURL={setCurrURL}
      />
      <div className='flex-grow'>
        <div className='flex flex-wrap  md:flex-row justify-center items-center my-4 gap-4'>
          {filteredData?.map((item, index) => (
            <Card
            item={item}
              key={index}
              img_url={item.images.jpg.large_image_url}
              title={item?.title}
              id={item.mal_id}
              type={"anime"}
            />
          ))}
        </div>
      </div>

      {/* <Pagination /> */}
    </div>
  );
};

export default page;
