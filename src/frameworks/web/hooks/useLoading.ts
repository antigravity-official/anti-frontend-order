import {useState} from "react";

export const useLoading = () => {
  const [loadingState, setLoadingState] = useState<boolean>(false);

  const setLoadingStateTrue = () => setLoadingState(true);
  const setLoadingStateFalse = () => setLoadingState(false);

  return {
    loadingState,
    setLoadingStateTrue,
    setLoadingStateFalse
  };
}
