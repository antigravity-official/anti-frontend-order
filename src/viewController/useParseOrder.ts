import { Order } from '../model/Models';
import { useFetchOrder } from '../viewModel/useFetchOrder';
import { useState } from 'react';

export const useParseOrder = () => {
  const { json } = useFetchOrder();
  const [order, setOrder] = useState<Order | null>(null);

  const { id, orderAt, amount, products, shipping } = json;

  const processOrder = () => {
    const orderResult = {
      id: json.id,
      orderAt: new Date(json.orderAt),
      amount: json.amount,
      products: json.products,
      shipping: json.shipping,
    };

    setOrder(orderResult);
  };

  new Promise(() => setTimeout(processOrder, 500));

  return order && (order as Order);
};
