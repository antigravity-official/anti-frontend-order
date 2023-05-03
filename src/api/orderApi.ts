import { IOrder } from "../types/Models";
import assetOrder from "../assets/order.json";

export async function fetchMyOrder(onCompleted: (order: IOrder) => void) {
  setTimeout(() => {
    parseOrder(assetOrder, onCompleted);
  }, 1000);
}

const parseOrder = (json: any, onCompleted: (order: IOrder) => void) => {
  setTimeout(() => {
    const order: IOrder = {
      id: json.id,
      orderAt: new Date(json.orderAt),
      amount: json.amount,
      shipping: json.shipping,
    };
    onCompleted(order);
  }, 500);
};
