import { Order } from '../model/Models';

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

export { parseOrder };
