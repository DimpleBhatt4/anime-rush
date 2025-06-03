'use client';

import { useEffect, useRef, useState } from 'react';
import useFetch from '@/app/utils/useFetch';
import Link from 'next/link';
import { getFilteredDataByID } from '@/app/utils/getFilteredDataByID';

export default function SimpleModal() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const dialogRef = useRef(null);

  const { data } = useFetch(`https://api.jikan.moe/v4/anime?q=${query}`);
  const filteredData = data ? getFilteredDataByID(data?.data) : []

  useEffect(() => {
    if (data) {
      setResult(filteredData); 
      console.log("result", data)
    }
  }, [data]);

  useEffect(() => {
    // ✅ Only run showModal if dialog is available and not already open
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  if(!result) return <div>Loading </div>
  return (
    <dialog
      ref={dialogRef}
      className="w-[80vw] h-[80vh] rounded-lg p-6 shadow-lg backdrop:bg-black/50"
    >
      <input
        type="text"
        placeholder="Search your favorite anime here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-gray-200 border border-black w-full sm:w-[30vw] rounded-lg px-2 sm:px-4 py-2 text-left text-white"
      />

      <ul className="mt-4 overflow-auto max-h-[60vh]">
        {filteredData.length!==0 && result?.map((item) => (
          <Link
           href={`/anime/${item.mal_id}`}
            key={item.mal_id}
            className="py-2 border-b border-gray-300"
            onClick={closeDialog}
          >
              <h2 className="text-black cursor-pointer hover:underline">{item.title}</h2>
          </Link>
        )) }
      </ul>

      <form method="dialog" className="absolute right-[2%]">
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
        >
          Cancel
        </button>
      </form>
    </dialog>
  );
}
