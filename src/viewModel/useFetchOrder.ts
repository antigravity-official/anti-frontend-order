import { useState } from 'react';
import assetOrder from '../assets/order.json';

export const useFetchOrder = () => {
  const [json, setJson] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  setTimeout(() => {
    showProgress();
    setJson(assetOrder);
    hideProgress();
  }, 1000);

  return { json, isLoading };
};
