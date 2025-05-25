import React from 'react'

const ButtonStyle = ({value}) => {
  return (
   <button className={`flex justify-center items-center border w-[100px] px-4 py-2 rounded-lg ${value==="More" && 'w-[50px] px-2 py-1' }`}>{value}</button>
  )
}

export default ButtonStyle