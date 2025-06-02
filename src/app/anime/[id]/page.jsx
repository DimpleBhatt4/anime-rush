"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import useFetch from "@/app/utils/useFetch";
import MorePage from "@/app/components/morePage/MorePage";

export default function Page() {
  const params = useParams();
  const id = params?.id;
  const url = 'https://api.jikan.moe/v4/anime'

  return (
    <>
      <MorePage id={id} url={url} type={"anime"} />
    </>
  );
}
