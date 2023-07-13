import { Order } from "../Models";

const fetchMyOrder = (assetOrder: Order): Promise<Order> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(assetOrder);
    }, 1000);
  });
};

export { fetchMyOrder };
