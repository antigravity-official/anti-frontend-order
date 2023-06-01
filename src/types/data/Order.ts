import { OrderProduct } from './OrderProduct';
import { Shipping } from './Shipping';

export interface Order {
  id: number;
  orderAt: Date;
  amount: number;
  products: OrderProduct[];
  shippings: Shipping[];
}
