import { useCallback, useEffect, useRef, useState } from "react";

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
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T>(initailData);
  const [error, setError] = useState<unknown>(null);
  const isFetchingRef = useRef(false);
  const controllerRef = useRef(new AbortController());

  const fetchData = useCallback(async () => {
    try {
      if (isFetchingRef.current) return;
      isFetchingRef.current = true;
      setLoading(true);
      const responseData = await fetchFn(controllerRef.current.signal);
      setData(responseData);
    } catch (error) {
      console.log("error", error);
      setError(error);
    } finally {
      setLoading(false);
      isFetchingRef.current = false;
    }
  }, [fetchFn]);

  useEffect(() => {
    const controller = controllerRef.current;
    if (hasFatchingInMount) {
      fetchData();
    }
    return () => {
      isFetchingRef.current = false;
      controller.abort();
    };
  }, [hasFatchingInMount, fetchData]);

  const refetch = useCallback(() => {
    controllerRef.current.abort();
    fetchData();
  }, [fetchData]);

  return { isLoading, error, data, refetch };
}
