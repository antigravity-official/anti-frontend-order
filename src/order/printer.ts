import {
  Order, OrderProduct, Shipping
} from "../Models";
import {
  moneyFormatter,
  datetimeFormatter
} from '../common/util/formatter';

export function printOrder(
  order: Order
): string[] {

  let output: string[] = [];
  const println = (text: string) => output.push(text);

  println(`주문번: ${order.id}`);
  println(`주문일: ${datetimeFormatter(order.orderAt)}`);
  println(`총 결제금액: ${moneyFormatter(order.amount)}원`);
  println('----------------------------');

  printShippings(order.shippings, println);

  return output;
}

export function printShippings(
  shippings: Shipping[],
  println: (text: string) => void
) {

  return shippings.forEach((shipping: Shipping, index: number) => {
    println(`[배송정보${index + 1}]`);
    printShipping(shipping, println);
    println('----------------------------');
  });
}

export function printShipping(
  shipping: Shipping,
  println: (text: string) => void
) {
  println(`송장번호: ${shipping.trackingNumber}`);
  println(`배송료: ${moneyFormatter(shipping.shippingFee)}원`);
  println(`주소: [${shipping.post}] ${shipping.address}`);
  println(`메시지: ${shipping.message}`);
  println('');
  printProducts(shipping.products, println);
};

export function printProducts(
  products: OrderProduct[],
  println: (text: string) => void
) {
  println('[상품목록]');

  products.forEach((product: OrderProduct, index: number) => {
    printProduct(product, println);
    if (index + 1 < products.length) {
      println('');
    }
  });
};

export function printProduct(
  product: OrderProduct,
  println: (text: string) => void
) {
  println(`상품명: ${product.name}`);
  println(`가격: ${moneyFormatter(product.price)}원`);
  println(`주문정보: ${product.stock.color}/${product.stock.band}/${product.stock.cup} ${product.stock.quantity}개`);
}