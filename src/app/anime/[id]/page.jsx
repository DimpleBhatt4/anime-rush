"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const [animeData, setAnimeData] = useState(null);
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
        const data = await res.json();
        setAnimeData(data);
        console.log("animeData", data);
      } catch (error) {
        console.error("Error fetching anime data", error);
      }
    }

    fetchData();
  }, [id]);

  if (!animeData) return <div>Loading...</div>;
  return (
    <>
      <div className='flex justify-center items-center gap-4 my-8'>
        {/* Anime Image */}
        <div className='flex-shrink-0 w-[auto]'>
          <Image
            src={animeData?.data?.images?.jpg?.large_image_url}
            width={200}
            height={200}
            alt={"Image"}
            className='rounded-lg object-cover'
          />
        </div>
        {/* anime Info */}
        <div className='w-[50%]'>
          <div>
            <h1 className='text-2xl font-bold my-4'>
              {animeData?.data?.title}
            </h1>
            <div className='border flex  items-center py-2 rounded-xl '>
              <div className='flex flex-col w-[20%] items-center border-r-1 border-white'>
                <span className='font-bold text-lg'>Score</span>
                <span>{animeData?.data?.score}</span>
                <span>{animeData?.data?.scored_by} Users</span>
              </div>
              <div className='flex justify-around items-center w-full px-4'>
                <div className='text-xl font-bold'>
                  Ranked #{animeData?.data?.rank}
                </div>
                <div className='text-xl font-bold'>
                  Popularity #{animeData?.data?.popularity}
                </div>
                <div className='text-xl font-bold'>
                  Members {animeData?.data?.members}
                </div>
              </div>
            </div>
            <p className='body-rounded text-xl flex flex-col my-4'>
              <span className='text-2xl underline'>Synopsis</span>
              <span>{animeData?.data?.synopsis}</span>
            </p>
            <p className='body-rounded text-xl flex flex-col my-4'>
              <span className='text-2xl underline'>
                {animeData.data.background && "Background"}
              </span>
              <span>{animeData?.data?.background}</span>
            </p>
          </div>
        </div>
        {/* Youtube trailer */}
        {animeData.data.trailer.embed_url && <div className='aspect-video w-[20%]'>
          <iframe
            className='w-full h-full rounded-lg'
            src={`${animeData?.data?.trailer?.embed_url}`}
            title='YouTube video player'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>}
      </div>
      <div className='border flex  items-center py-2 rounded-xl '>
        <div className='flex flex-col w-[20%] items-center text-lg font-bold'>
          Information
        </div>
        <div className='flex justify-around items-center w-full px-4'>
          <div className='text-lg font-bold'>
            Type: {animeData?.data?.type}
          </div>
          <div className='text-lg font-bold'>
            Episodes #{animeData?.data?.episodes}
          </div>
          <div className='text-lg font-bold'>
            Status: {animeData?.data?.airing ? "Currently Airing" : "Completed"}
          </div>
        </div>
      </div>
    </>
  );
}
