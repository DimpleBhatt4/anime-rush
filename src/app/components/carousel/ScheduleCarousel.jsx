import React from "react";
import Carousel from "./Carousel";
import useFetch from "@/app/utils/useFetch";
import Link from "next/link";
import { getFilteredDataByID } from "@/app/utils/getFilteredDataByID";

const ScheduleContainer = ({ title }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
  ];
  const today = new Date().getDay();
  const { data: schedule } = useFetch(
    `https://api.jikan.moe/v4/schedules?filter=${days[today].toLowerCase()}`
  );

  const filteredData = schedule ? getFilteredDataByID(schedule?.data) : [];
  return (
    <div className='border w-full sm:w-[60vw] py-4 px-6 right-container'>
      <div className='flex justify-between'>
        <h1 className='font-bold mb-4 text-2xl'>
          <span>{title} </span>
          <span className='body-rounded'>({days[today]})</span>
        </h1>
        <Link href={'/schedule'} className='flex items-center gap-1'> 
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
          </svg></Link>
      </div>
      {filteredData && <Carousel data={filteredData} />}
    </div>
  );
};

export default ScheduleContainer;
