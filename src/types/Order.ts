import OrderProduct from '@/types/OrderProduct';
import Shipping from '@/types/Shipping';

type Order = {
  id: number;
  orderAt: Date;
  amount: number;
  products: OrderProduct[];
  shipping: Shipping;
};

export default Order;
