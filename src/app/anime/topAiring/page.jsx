"use client"
import Card from '@/app/components/card/Card'
import Pagination from '@/app/components/footer/pagination/Pagination'
import MoreDisplay from '@/app/components/moreDisplay/MoreDisplay'
import React, {} from 'react'

const page = () => {
  return (
    <>
      <MoreDisplay url={'https://api.jikan.moe/v4/top/anime?filter=airing&limit=10'} />
    </>
  )
}

export default page