"use client"
import React, { useState } from "react";
import Carousel from "../carousel/Carousel";
import SidePanel from "../sidePanel/SidePanel";
import useFetch from '../../utils/useFetch'
import CarouselContainer from "../carousel/CarouselContainer";
import ScheduleCarousel from "../carousel/ScheduleCarousel";
import { getFilteredDataByID } from "@/app/utils/getFilteredDataByID";


const LandingPage = () => {
    const {data: topAnime} = useFetch("https://api.jikan.moe/v4/top/anime?limit=10");
    const {data: topAiring} = useFetch("https://api.jikan.moe/v4/top/anime?filter=airing&limit=5")
    const filteredTopAnime =  topAnime ? getFilteredDataByID(topAnime?.data) : []
    const filteredTopAiring =  topAiring ? getFilteredDataByID(topAiring?.data) : []
    console.log("Top Airing from landing page", filteredTopAiring)
    console.log("Top Anime from landing page", filteredTopAnime)


  return (
    <div className="flex flex-wrap md:w-full md:max-w-screen-xl mx-auto gap-x-4">
  {/* Left section (70%) */}
  <div className="w-full md:flex-[7]  right-container">
    <CarouselContainer title={'All Time Favorite'} data={filteredTopAnime} />
    <ScheduleCarousel title={'Schedule'}/>
  </div>

  {/* Right section (30%) */}
  <div className="w-full md:flex-[3] right-container border border-white  rounded-sm">
    <SidePanel title={'Top Airing Anime'} data={filteredTopAiring} />
  </div>
</div>
  )
};

export default LandingPage;
