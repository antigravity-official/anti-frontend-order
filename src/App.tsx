import React, { useEffect, useState } from "react";
import assetOrder from "./assets/order.json";
import { Order } from "./models/Order";
import { OrderProduct } from "./models/Product";
import { fetchMyOrder } from "./apis/Order";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState(Array.of(""));

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      const myOrder = await fetchMyOrder();
      setLoading(false);
      setOrderInfo(myOrder);
    };

    fetchOrder();
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);
  const updateOrderInfo = (info: string[]) => setOrderInfo(info);

  const presentOrder = (order: Order) => {
    let output: string[] = [];
    const println = (text: string) => output.push(text);

    println(`주문번: ${order.id}`);
    println(`주문일: ${order.orderAt}`);
    println(`총 결제금액: ${order.amount}원`);
    println(``);
    println(`----------------------------`);
    println(`[상품목록]`);
    println(``);
    order.products.forEach((p: OrderProduct) => {
      println(`상품명: ${p.name}`);
      println(`가격: ${p.price}원`);
      println(
        `주문정보: ${p.stock.color}/${p.stock.band}/${p.stock.cup} ${p.stock.quantity}개`
      );
      println(``);
    });
    println(`----------------------------`);
    println(`[배송정보]`);
    println(`송장번호: ${order.shipping.trackingNumber}`);
    println(`배송료: ${order.shipping.shippingFee}원`);
    println(`주소: [${order.shipping.post}] ${order.shipping.address}`);
    println(`메시지: ${order.shipping.message}`);

    updateOrderInfo(output);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {orderInfo.map((line) => (
        <div>{line}</div>
      ))}
    </div>
  );
}

export default App;
