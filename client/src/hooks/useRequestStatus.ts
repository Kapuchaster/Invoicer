import { useEffect, useState } from "react";
import RestClient from "../services/restClient";

export const useRequestStatus = (query: string, variables?: JSON) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    RestClient.post(query, variables)
      .then((response) => {
        setData(response);
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
