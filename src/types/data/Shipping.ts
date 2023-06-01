import { OrderProduct } from './OrderProduct';

export interface Shipping {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: OrderProduct[];
}
