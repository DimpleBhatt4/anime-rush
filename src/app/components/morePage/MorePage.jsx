import useFetch from "@/app/utils/useFetch";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MorePage = ({ id, url }) => {
  const [selecCategoryData, setSelecCategoryData] = useState(null);
  const { data } = useFetch(`${url}/${id}/full`);
  useEffect(() => {
    setSelecCategoryData(data);
  }, [data]);
  if (!selecCategoryData) return <div>Loading...</div>;
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center items-center gap-4 my-8'>
        {/* Image */}
        <div className='flex-shrink-0 w-[auto]'>
          <Image
            src={selecCategoryData?.data?.images?.jpg?.large_image_url}
            width={200}
            height={200}
            alt={"Image"}
            className='rounded-lg object-cover'
          />
        </div>
        {/* Info */}
        <div className='w-full md:w-[50%] p-4'>
          <div>
            <h1 className='text-2xl font-bold my-4'>
              {selecCategoryData?.data?.title}
            </h1>
            <div className='border flex items-center py-2 rounded-xl '>
              <div className='flex flex-col  items-center border-r-1 border-white w-1/2'>
                <span className='font-bold text-lg'>Score</span>
                <span>{selecCategoryData?.data?.score}</span>
                <span>{selecCategoryData?.data?.scored_by} Users</span>
              </div>
              <div className='flex flex-col md:flex-row justify-around items-center w-full px-4 gap-4'>
                <div className='text-xl font-bold'>
                  Ranked #{selecCategoryData?.data?.rank}
                </div>
                <div className='text-xl font-bold'>
                  Popularity #{selecCategoryData?.data?.popularity}
                </div>
                <div className='text-xl font-bold'>
                  Members {selecCategoryData?.data?.members}
                </div>
              </div>
            </div>
            <p className='body-rounded text-xl flex flex-col my-4'>
              <span className='text-2xl underline'>Synopsis</span>
              <span>{selecCategoryData?.data?.synopsis}</span>
            </p>
            <p className='body-rounded text-xl flex flex-col my-4'>
              <span className='text-2xl underline'>
                {selecCategoryData.data.background && "Background"}
              </span>
              <span>{selecCategoryData?.data?.background}</span>
            </p>
          </div>
        </div>
        {/* Youtube trailer */}
        {selecCategoryData?.data?.trailer?.embed_url && (
          <div className='aspect-video w-8/10 md:w-[20%]'>
            <iframe
              className='w-full h-full rounded-lg'
              src={`${selecCategoryData?.data?.trailer?.embed_url}`}
              title='YouTube video player'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        )}
      </div>
      <div className='border flex flex-col md:flex-row items-center py-2 m-2 rounded-xl '>
        <div className='flex flex-col w-[20%] items-center text-lg font-bold'>
          Information
        </div>
        <div className='flex justify-around items-center w-full px-4'>
          <div className='text-lg font-bold'>
            Type: {selecCategoryData?.data?.type}
          </div>
          <div className='text-lg font-bold'>
            Episodes #{selecCategoryData?.data?.episodes}
          </div>
          <div className='text-lg font-bold'>
            Status:{" "}
            {selecCategoryData?.data?.airing ? "Currently Airing" : "Completed"}
          </div>
        </div>
      </div>
    </>
  );
};

export default MorePage;
