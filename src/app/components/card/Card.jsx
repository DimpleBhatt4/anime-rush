import React from "react";
import Link from "next/link";
import ButtonStyle from "../buttonStyle/ButtonStyle";
import Image from "next/image";
import isWishlisted from "@/app/utils/isWishlisted";
import useWishlistStore from "@/app/store/useWishlistStore";

const Card = ({ item, index, img_url, title, id, type }) => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addItem = useWishlistStore((state) => state.addItem);
  const removeItem = useWishlistStore((state) => state.removeItem);
  return (
    <div className='border rounded-lg w-[45%] md:w-[20%] p-2 flex flex-col items-center'>
      <div className='w-full h-[50%] aspect-[2/3] md:aspect-square relative'>
        <Image
          src={img_url}
          alt='Anime'
          fill
          className='rounded-md object-cover'
        />
      </div>
      <div className='mt-2 text-center'>
        <h1 className='font-semibold text-xs line-clamp-2'>{title}</h1>
        <div className='flex gap-2 justify-center items-center'>
          <Link
            href={`/${type}/${id}`}
            className='text-[10px] inline-block mt-1'>
            <ButtonStyle value='More' />
          </Link>
          {isWishlisted(wishlist, id) ? (
           
              <button className="text-[10px] mt-1 flex justify-center items-center border w-[50px] px-4 py-2 rounded-lg" onClick={() =>removeItem(id)}>Remove</button>
          ) : (
            
              <button className="text-[10px] mt-1 flex justify-center items-center border w-[50px] px-4 py-2 rounded-lg" onClick={() => addItem(item)}>Add</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
