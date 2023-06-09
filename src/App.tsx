import { useEffect, useState } from "react";
import { OrderModel, OrderProductModel } from "./Models";

import assetOrder from "./assets/order.json";
import Loading from "./components/loading/Loading";
import OrderGroup from "./components/order-group/OrderGroup";
import ProductGroup from "./components/product-group/ProductGroup";

import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);
  // const [orderInfo, setOrderInfo] = useState(Array.of(""));
  const [orderInfo, setOrderInfo] = useState<JSX.Element[]>([]);

  useEffect(() => {
    showProgress();
    fetchMyOrder((json) => {
      parseOrder(json, (order) => {
        hideProgress();
        presentOrder(order);
      });
    });
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);
  // const updateOrderInfo = (info: string[]) => setOrderInfo(info);
  const updateOrderInfo = (info: JSX.Element[]) => setOrderInfo(info);

  const fetchMyOrder = (onCompleted: (json: object) => void) => {
    setTimeout(() => {
      onCompleted(assetOrder);
    }, 1000);
  };

  const parseOrder = (json: any, onCompleted: (order: OrderModel) => void) => {
    setTimeout(() => {
      const order: OrderModel = {
        id: json.id,
        orderAt: new Date(json.orderAt),
        amount: json.amount,
        products: json.products,
        shipping: json.shipping,
      };
      onCompleted(order);
    }, 500);
  };

  const presentOrder = (order: OrderModel) => {
    let output: JSX.Element[] = [];
    output.push(<p key="orderId">주문번호: {order.id}</p>);
    output.push(<p key="orderDate">주문일: {order.orderAt.toString()}</p>);
    output.push(<p key="orderAmount">총 결제금액: {order.amount}원</p>);
    output.push(<ProductGroup key="productGroup" products={order.products} />);
    output.push(
      <p key="trackingNumber">송장번호: {order.shipping.trackingNumber}</p>
    );
    output.push(
      <p key="shippingFee">배송료: {order.shipping.shippingFee}원</p>
    );
    output.push(
      <p key="address">
        주소: [{order.shipping.post}] {order.shipping.address}
      </p>
    );
    output.push(<p key="message">메시지: {order.shipping.message}</p>);

    updateOrderInfo(output);
  };

  return (
    <div>
      <Loading isLoading={isLoading} />
      <OrderGroup orderInfo={orderInfo} />
    </div>
  );
}

export default App;
