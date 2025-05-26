"use client";
import React, { useState } from "react";
import useFetch from "../utils/useFetch";
import Card from "../components/card/Card";
import Pagination from "../components/footer/pagination/Pagination";

const page = () => {
  const [daywiseSchedule, setDaywiseSchedule] = useState([
    {
      day: "All",
      url: "https://api.jikan.moe/v4/schedules?limit=10",
      isActive: true,
      currPage: 1
    },
    {
      day: "Monday",
      url: "https://api.jikan.moe/v4/schedules?filter=monday",
      isActive: false,
      currPage: 1

    },
    {
      day: "Tuesday",
      url: "https://api.jikan.moe/v4/schedules?filter=tuesday",
      isActive: false,
      currPage: 1

    },
    {
      day: "Wednesday",
      url: "https://api.jikan.moe/v4/schedules?filter=wednesday",
      isActive: false,
      currPage: 1

    },
    {
      day: "Thursday",
      url: "https://api.jikan.moe/v4/schedules?filter=thursday",
      isActive: false,
      currPage: 1

    },
    {
      day: "Friday",
      url: "https://api.jikan.moe/v4/schedules?filter=friday",
      isActive: false,
      currPage: 1

    },
    {
      day: "Saturday",
      url: "https://api.jikan.moe/v4/schedules?filter=saturday",
      isActive: false,
      currPage: 1

    },
    {
      day: "Sunday",
      url: "https://api.jikan.moe/v4/schedules?filter=sunday",
      isActive: false,
      currPage: 1

    },
  ]);
  const [currURL, setCurrURL] = useState(daywiseSchedule[0].url);

  const { data } = useFetch(currURL);
  function handleDaySchedule(selectedObj) {
    const updatedSchedule = daywiseSchedule.map((item) =>
      item.day === selectedObj.day
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    );
    setDaywiseSchedule(updatedSchedule);
    setCurrURL(selectedObj.url);
  }

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Sub navigation bar for categories */}
      <div className='my-6'>
        <ul className='flex justify-center border-b gap-8'>
          {daywiseSchedule.map((item) => (
            <li
              key={item.day}
              className={`border-t border-l border-r w-[8%] text-center py-1 text-sm rounded-t-lg ${
                item.isActive && "bg-white text-black"
              }`}>
              <button onClick={() => handleDaySchedule(item)}>
                {item.day}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-grow'>
        <div className='flex flex-wrap justify-center my-4 gap-4'>
          {data?.map((item, index) => (
            <Card
              key={index}
              img_url={item.images.jpg.large_image_url}
              title={item?.title}
              id={item.mal_id}
            />
          ))}
        </div>
      </div>

      {/* <Pagination /> */}
    </div>
  );
};

export default page;
