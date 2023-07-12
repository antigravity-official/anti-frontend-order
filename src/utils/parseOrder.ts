import { Order } from "../Models";

const parseOrder = (fetchOrder: any): Promise<Order> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const order: Order = {
        id: fetchOrder.id,
        orderAt: new Date(fetchOrder.orderAt),
        amount: fetchOrder.amount,
        products: fetchOrder.products,
        shipping: fetchOrder.shipping,
      };
      resolve(order);
    }, 500);
  });
};

export { parseOrder };
