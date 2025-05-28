import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pagination, setPagination] =useState({})

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    async function fetchResponse() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const res_json = await response.json();
        setData(res_json);
        setPagination(res_json.pagination)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchResponse();
  }, [url]);

  return { data, loading, error, pagination };
}

export default useFetch;
