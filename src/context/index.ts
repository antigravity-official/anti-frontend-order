import { createContext, useContext } from 'react';
import { Order } from '../model/Models';

export const defaultValue = {
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

export const OrderContext = createContext<{ order: Order; isLoading: boolean }>(
  defaultValue
);

export const useOrder = () => useContext(OrderContext);
