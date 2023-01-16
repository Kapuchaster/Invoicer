import { useEffect, useState } from "react";
import RestClient from "../services/restClient";

export const useRequestStatus = <T>(query: string, variables?: JSON) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    RestClient.post(query, variables)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setError(false);
      })
      .catch((e) => {
        setData(undefined);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, variables]);

  return { data, loading, error };
};
