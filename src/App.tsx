import { useEffect, useState } from "react";
import { OrderModel } from "./Models";

import Loading from "./components/loading/Loading";
import OrderGroup from "./components/order-group/OrderGroup";
import ProductGroup from "./components/product-group/ProductGroup";
import ShippingGroup from "./components/shipping-group/ShippingGroup";

import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState<OrderModel>();

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
      const orderInfo = await response.json();
      setOrderInfo(orderInfo);
    } catch (error) {
      console.error("에러가 발생했습니다:", error);
    } finally {
      hideProgress();
    }
  };

  console.log("orderInfo", orderInfo);

  return (
    <div>
      <Loading isLoading={isLoading} />
      {/* <OrderGroup orderInfo={orderInfo} /> */}
    </div>
  );
}

export default App;
