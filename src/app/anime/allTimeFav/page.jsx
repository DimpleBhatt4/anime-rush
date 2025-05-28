import MoreDisplay from '@/app/components/moreDisplay/MoreDisplay'
import React from 'react'

const page = () => {
  return (
    <>
      <MoreDisplay url={'https://api.jikan.moe/v4/top/anime?limit=10'} />
    </>
  )
}

export default page