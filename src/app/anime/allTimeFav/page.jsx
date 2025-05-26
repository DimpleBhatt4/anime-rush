"use client"
import Card from '@/app/components/card/Card'
import Pagination from '@/app/components/footer/pagination/Pagination'
import useFetch from '@/app/utils/useFetch'
import React, { useState } from 'react'

const page = () => {
  const [pageNum, setPageNum] = useState(1)
  const {data, pagination} = useFetch(`https://api.jikan.moe/v4/top/anime?limit=10&page=${pageNum}`)
  console.log("pagination", pagination)
  return (
      <div className='min-h-screen flex flex-col'>
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

      <Pagination currentPage={pageNum} totalItems={pagination?.items?.total} setPageNum={setPageNum}   />
    </div>
  )
}

export default page