import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    async function fetchResponse() {
      try {
        const response = await fetch(url);
        const res_json = await response.json();
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const uniqueArr = res_json.data.filter(
          (item, index, self) =>
            index === self.findIndex((obj) => obj.mal_id === item.mal_id)
        );
        console.log("response", uniqueArr);
        setData(uniqueArr);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchResponse();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
