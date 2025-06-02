"use client";
import { useParams } from "next/navigation";
import MorePage from "@/app/components/morePage/MorePage";

export default function Page() {
  const params = useParams();
  const id = params?.id;
  const url = 'https://api.jikan.moe/v4/manga'

  return (
    <>
        <MorePage id={id} url={url} />
    </>
  );
}
