import { useEffect, useState } from "react";
import { Order } from "../Models";
import { fetchMyOrder } from "./fetchMyOrder";
import { parseOrder } from "./parseOrder";
import assetOrder from "../assets/order.json";

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    showOrder();
  }, []);

  const showProgress = () => setIsLoading(true);
  const hideProgress = () => setIsLoading(false);

  const showOrder = async () => {
    showProgress();

    try {
      const fetchedOrder = await fetchMyOrder(assetOrder);
      const parsedOrder = await parseOrder(fetchedOrder);
      setOrder(parsedOrder);
    } catch {
      throw new Error("데이터를 불러오는 도중 에러가 발생했습니다.");
    } finally {
      hideProgress();
    }
  };

  return { isLoading, order };
};

export default useFetchData;
