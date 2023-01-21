import Shipping from '@/types/Shipping';

type Order = {
  id: number;
  orderAt: Date;
  amount: number;
  shippings: Shipping[];
};

export default Order;
