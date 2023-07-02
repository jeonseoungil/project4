import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setData([]);
        setLoading(false);
        setError("주소를 찾을 수 없습니다.");
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
