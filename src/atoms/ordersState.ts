import { atom } from 'recoil';

export const DEFAULT_ORDERS_STATE = [];

const ordersState = atom({
  key: 'ordersState',
  default: DEFAULT_ORDERS_STATE,
});

export default ordersState;
