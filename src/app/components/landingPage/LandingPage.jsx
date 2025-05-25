"use client"
import React, { useState } from "react";
import Carousel from "../carousel/Carousel";
import SidePanel from "../sidePanel/SidePanel";
import useFetch from '../../utils/useFetch'
import CarouselContainer from "../carousel/CarouselContainer";
import ScheduleCarousel from "../carousel/ScheduleCarousel";


const LandingPage = () => {
    const {data: topAnimeData} = useFetch("https://api.jikan.moe/v4/top/anime?limit=10");
    const {data: topAiring} = useFetch("https://api.jikan.moe/v4/top/anime?filter=airing&limit=5")

  return (
    <div className="flex w-full max-w-screen-xl mx-auto gap-x-4">
  {/* Left section (70%) */}
  <div className="flex-[7]  right-container">
    <CarouselContainer title={'All Time Favorite'} data={topAnimeData} />
    <ScheduleCarousel title={'Schedule'}/>
  </div>

  {/* Right section (30%) */}
  <div className="flex-[3] right-container border border-white  rounded-sm">
    <SidePanel title={'Top Airing Anime'} data={topAiring} />
  </div>
</div>
  )
};

export default LandingPage;
