import { useEffect, useState } from 'react';
import { OrderContext, defaultValue } from '.';
import { fetchMyOrder } from '../api/fetchMyOrder';
import { Order } from '../model/Models';
import assetOrder from '../assets/order.json';

interface Provider {
  children: React.ReactNode;
}

export const OrderProvider = ({ children }: Provider) => {
  const [order, setOrder] = useState<Order>(defaultValue.order);
  const [isLoading, setLoading] = useState(defaultValue.isLoading);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    toggleProgress();
    const json = await fetchMyOrder(assetOrder);
    const order = await parseOrder(json);
    toggleProgress();
    setOrder(order);
  };

  const toggleProgress = () => setLoading((prev) => !prev);

  const parseOrder = (json: any): Promise<Order> => {
    const { id, orderAt, amount, products, shipping } = json;

    return new Promise((resolve) => {
      setTimeout(() => {
        const order: Order = {
          id: id,
          orderAt: orderAt,
          amount: amount,
          products: products,
          shipping: shipping,
        };
        resolve(order);
      }, 500);
    });
  };

  return (
    <OrderContext.Provider value={{ order, isLoading }}>
      {children}
    </OrderContext.Provider>
  );
};
