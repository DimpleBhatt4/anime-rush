import Link from 'next/link'
import React from 'react'

const ButtonStyle = ({value, currentPage, totalItems, setPageNum}) => {
  function handlePaginate(){
    if(value==="Next"){
      setPageNum((prev)=>prev+1)
    }
    else if(value==="Previous"){
      setPageNum((prev)=>prev-1)
    }
  }

  return (
   <button 
   className={`flex justify-center items-center border w-[100px] px-4 py-2 rounded-lg ${value==="More" && 'w-[50px] px-2 py-1' }`}
   onClick={handlePaginate}
   >
      {value}
    </button>
  )
}

export default ButtonStyle