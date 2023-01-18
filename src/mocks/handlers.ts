import errorHandlers from '@/mocks/handlers/error';
import ordersHandlers from '@/mocks/handlers/orders';

export const handlers = [
  ...ordersHandlers,
  // errorHandlers must be the last one; it's like a catch-all
  ...errorHandlers,
];
