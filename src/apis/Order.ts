import { Order } from '../models/Order';
import assetOrder from '../assets/order.json';

export const fetchMyOrder = (): Promise<any> => {
  return new Promise((resolve) => setTimeout(() => resolve(assetOrder), 1000));
};

export const parseOrder = (json: any): Order => {
  return {
    id: json.id,
    orderAt: new Date(json.orderAt),
    amount: json.amount,
    shippings: json.shippings,
    products: json.products,
  };
};
