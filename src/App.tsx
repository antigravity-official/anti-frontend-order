import React, { useEffect, useState } from "react";
import "./App.css";
import { Order } from "./Models";
import assetOrder from "./assets/order.json";
import { parseOrder } from "./utils/parseOrder";
import { fetchMyOrder } from "./utils/fetchMyOrder";
import OrderInfo from "./components/OrderInfo";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    showOrder();
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

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

  return (
    <div>
      {isLoading ? <div>Loading...</div> : order && <OrderInfo order={order} />}
    </div>
  );
}

export default App;
