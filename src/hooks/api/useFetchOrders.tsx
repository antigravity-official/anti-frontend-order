import ordersState from 'atoms/ordersState';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

const useFetchOrders = () => {
  const setOrders = useSetRecoilState(ordersState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/data/order.json');
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return isLoading;
};

export default useFetchOrders;
