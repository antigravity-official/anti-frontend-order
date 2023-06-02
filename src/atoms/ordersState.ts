import { atom } from 'recoil';
import { Order } from 'types';

export const DEFAULT_ORDERS_STATE = [];

const ordersState = atom<Order[]>({
  key: 'ordersState',
  default: DEFAULT_ORDERS_STATE,
});

export default ordersState;
