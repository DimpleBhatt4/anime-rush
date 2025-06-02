"use client"
import Card from '@/app/components/card/Card'
import Pagination from '@/app/components/footer/pagination/Pagination'
import { getFilteredDataByID } from '@/app/utils/getFilteredDataByID'
import useFetch from '@/app/utils/useFetch'
import React, { useState } from 'react'

const MoreDisplay = ({url}) => {
  const [pageNum, setPageNum] = useState(1)
  const {data, pagination} = useFetch(`${url}&page=${pageNum}`)
   const filteredData =  data ? getFilteredDataByID(data?.data) : []
  return (
      <div className='min-h-screen flex flex-col justify-center'>
      <div className='flex-grow'>
        <div className='flex flex-wrap  md:flex-row justify-center items-center my-4 gap-4'>
          {filteredData?.map((item, index) => (
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

export default MoreDisplay