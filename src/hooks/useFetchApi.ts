import { useCallback, useEffect, useState } from "react";

interface UseApiCallProps<ResponseData> {
  initailData: ResponseData;
  hasFatchingInMount?: boolean;
  fetchFn: (signal: AbortSignal) => Promise<ResponseData>;
}

export default function useFetchApi<T>({
  initailData,
  fetchFn,
  hasFatchingInMount = true,
}: UseApiCallProps<T>) {
  const [isLoading, setLoading] = useState(hasFatchingInMount);
  const [data, setData] = useState<T>(initailData);
  const [error, setError] = useState<unknown>(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      try {
        const responseData = await fetchFn(signal);
        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (isLoading) fetchData();
    return () => {
      controller.abort();
    };
  }, [isLoading, fetchFn]);

  const refetch = useCallback(() => {
    setLoading(true);
  }, []);
  return { isLoading, error, data, refetch };
}
