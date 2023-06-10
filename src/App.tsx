import { useEffect, useState } from "react";
import { OrderModel } from "./Models";

import Loading from "./components/loading/Loading";
import OrderGroup from "./components/order-group/OrderGroup";

import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [ordersInfo, setOrdersInfo] = useState<OrderModel[]>([]);

  useEffect(() => {
    showProgress();
    fetchMyOrder();
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("/assets/order.json");
      if (!response.ok) {
        throw new Error("주문정보를 가져오는데 실패했습니다.");
      }
      const ordersInfo = await response.json();
      const orders: OrderModel[] = ordersInfo.orders;
      setOrdersInfo(orders);
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));
      setError(err);
    } finally {
      hideProgress();
    }
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      {error && <div>{error.message}</div>}
      {ordersInfo && <OrderGroup ordersInfo={ordersInfo} />}
    </div>
  );
}

export default App;
