import errorHandlers from '@/mocks/handlers/error';
import orderProductsHandlers from '@/mocks/handlers/order-products';
import orderShippingHandlers from '@/mocks/handlers/order-shipping';
import ordersHandlers from '@/mocks/handlers/orders';

export const handlers = [
  ...ordersHandlers,
  ...orderProductsHandlers,
  ...orderShippingHandlers,
  // errorHandlers must be the last one; it's like a catch-all
  ...errorHandlers,
];
