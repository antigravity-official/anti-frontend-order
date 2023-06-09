import { useEffect, useState } from "react";
import { OrderModel, ShippingModel } from "./Models";

import Loading from "./components/loading/Loading";
import OrderGroup from "./components/order-group/OrderGroup";
import ShippingGroup from "./components/order-group/shipping-group/ShippingGroup";
import ProductGroup from "./components/order-group/product-group/ProductGroup";

import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState<OrderModel[]>([]);
  const [shippingInfo, setShippingInfo] = useState<ShippingModel[]>([]);

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
      const orders: OrderModel[] = orderInfo.orders;
      setOrderInfo(orders);

      const shippingList: ShippingModel[] = orders.flatMap(
        (order) => order.shippingList
      );
      setShippingInfo(shippingList);
    } catch (error) {
      console.error("에러가 발생했습니다:", error);
    } finally {
      hideProgress();
    }
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      <OrderGroup orderInfo={orderInfo} />
      <ShippingGroup shippingInfo={shippingInfo} />
      <ProductGroup shippingInfo={shippingInfo} />
    </div>
  );
}

export default App;
