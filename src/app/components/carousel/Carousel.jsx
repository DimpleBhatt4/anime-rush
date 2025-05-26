import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function Carousel({ data }) {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'>
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.mal_id}>
              <div className='flex gap-2'>
                <div className='flex-shrink-0 w-[100px] h-[140px] relative'>
                  <Image
                    src={item.images.jpg.large_image_url}
                    fill
                    alt={"Image"}
                    className='rounded-lg object-cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <h1 className='font-bold text-sm'>{item?.title}</h1>
                  <p className='text-xs'>
                    (
                    {item?.genres.map((genre, index) => (
                      <span key={index}>
                        {genre.name}
                        {index < item?.genres.length - 1 ? ", " : ""}
                      </span>
                    ))}
                    )
                  </p>
                  <p className='text-lg body-rounded  my-2'>
                    {item?.synopsis?.split(" ")?.slice(0, 20)?.join(" ")}
                    {item.synopsis && "... "}
                    <Link href={`/anime/${item.mal_id}`} className='text-sm text-blue-500 underline mt-auto'>
                      More
                    </Link>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
