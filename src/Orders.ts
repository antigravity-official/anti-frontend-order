import { Order, Shipping, OrderProduct } from "./Models";
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
      shippings: [
        {
          id: json.shipping.id,
          trackingNumber: json.shipping.trackingNumber,
          shippingFee: json.shipping.shippingFee,
          address: json.shipping.address,
          post: json.shipping.post,
          message: json.shipping.message,
          products: json.products.map((product: any) => {
            return {
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrls: product.imageUrls,
              stock: {
                color: product.stock.color,
                band: product.stock.band,
                cup: product.stock.cup,
                quantity: product.stock.quantity,
              },
            };
          }),
        },
      ],
    };
    onCompleted(order);
  }, 500);
};

export const presentOrder = (order: Order) => {
  let output: string[] = [];
  const println = (text: string) => output.push(text);

  println(`주문번호: ${order.id}`);
  println(`주문일: ${order.orderAt}`);
  println(`총 결제금액: ${order.amount}원`);
  println(``);

  order.shippings?.forEach((shipping: Shipping, shippingIndex: number) => {
    println(`----------------------------`);
    println(`[배송정보 ${shippingIndex + 1}]`);
    println(`송장번호: ${shipping.trackingNumber}`);
    println(`배송료: ${shipping.shippingFee}원`);
    println(`주소: [${shipping.post}] ${shipping.address}`);
    println(`메시지: ${shipping.message}`);
    println(``);
    println(`[상품목록]`);
    println(``);
    shipping.products.forEach((product: OrderProduct, productIndex: number) => {
      println(`상품명: ${product.name}`);
      println(`가격: ${product.price}원`);
      println(
        `주문정보: ${product.stock.color}/${product.stock.band}/${product.stock.cup} ${product.stock.quantity}개`
      );
      println(``);
    });
  });

  return output;
};
