import React from "react";
import Link from "next/link";
import ButtonStyle from "../buttonStyle/ButtonStyle";
import Image from "next/image";

const Card = ({ index, img_url, title, id, type }) => {
  return (
    <div className="border rounded-lg w-[45%] md:w-[20%] p-2 flex flex-col items-center">
      <div className="w-full h-[50%] aspect-[2/3] md:aspect-square relative">
        <Image
          src={img_url}
          alt="Anime"
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="mt-2 text-center">
        <h1 className="font-semibold text-xs line-clamp-2">{title}</h1>
        <Link href={`/${type}/${id}`} className="text-[10px] inline-block mt-1">
          <ButtonStyle value="More" />
        </Link>
      </div>
    </div>
  );
};


export default Card;
