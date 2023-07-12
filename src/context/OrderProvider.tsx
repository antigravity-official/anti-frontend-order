import { createContext, useContext, useEffect, useState } from 'react';
import { Order } from '../model/Models';
import { fetchMyOrder } from '../hooks/fetchMyOrder';
import { parseOrder } from '../hooks/parseOrder';
import assetOrder from '../assets/order.json';

const defaultValue = {
  order: {
    id: 0,
    orderAt: new Date(),
    amount: 0,
    products: [],
    shipping: {
      id: 0,
      trackingNumber: '',
      shippingFee: 0,
      address: '',
      post: '',
      message: '',
    },
  },
  isLoading: false,
};

const OrderContext = createContext<{ order: Order; isLoading: boolean }>(
  defaultValue
);

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(defaultValue.isLoading);
  const [order, setOrder] = useState<Order>(defaultValue.order);

  const showProgress = () => setLoading(true);
  const hideProgress = () => setLoading(false);

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    showProgress();

    const json = await fetchMyOrder(assetOrder);
    const order = await parseOrder(json);

    hideProgress();
    setOrder(order);
  };

  return (
    <OrderContext.Provider value={{ order, isLoading }}>
      {children}
    </OrderContext.Provider>
  );
};
