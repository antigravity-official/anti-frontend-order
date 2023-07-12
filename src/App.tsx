import React, { useEffect, useState } from "react";
import "./App.css";
import { Order, OrderProduct } from "./Models";
import assetOrder from "./assets/order.json";
import { parseOrder } from "./utils/parseOrder";
import { fetchMyOrder } from "./utils/fetchMyOrder";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState(Array.of(""));

  useEffect(() => {
    showOrder();
  }, []);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  const showOrder = async () => {
    showProgress();
    const fetch = await fetchMyOrder(assetOrder);
    const parse = await parseOrder(fetch);
    hideProgress();
    presentOrder(parse);
  };

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
