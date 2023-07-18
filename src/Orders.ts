import { Order, OrderProduct } from "./Models";
import assetOrder from "./assets/order.json";

export const fetchMyOrder = (onCompleted: (json: object) => void) => {
  setTimeout(() => {
    onCompleted(assetOrder);
  }, 1000);
};

export const parseOrder = (json: any, onCompleted: (order: Order) => void) => {
  setTimeout(() => {
    const order: Order = {
      id: json.id,
      orderAt: new Date(json.orderAt),
      amount: json.amount,
      products: json.products,
      shipping: json.shipping,
    };
    onCompleted(order);
  }, 500);
};

export const presentOrder = (order: Order) => {
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

  return output;
};
