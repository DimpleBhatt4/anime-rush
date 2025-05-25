import React from 'react'
import Link from "next/link";
import ButtonStyle from '../buttonStyle/ButtonStyle';
import Image from "next/image";


const Card = ({index, img_url, title}) => {
  return (
    <div className="border rounded-lg w-[20%]">
              <div className="p-2 flex flex-col justify-center items-center">
                <div className='flex-shrink-0 w-[280px] h-[250px] relative'>
                  <Image
                    src={img_url}
                    fill
                    alt={"Image"}
                    className='rounded-lg object-fill'
                  />
                </div>
                 <div className='flex flex-col my-2 items-center'>
                  <h1 className='font-bold text-sm'>{title}</h1>
                  <Link className="text-xs my-2" href={''}>
                    <ButtonStyle value={'More'}></ButtonStyle>
                  </Link>
                </div>
              </div>
    </div>
  )
}

export default Card