import OrderProduct from '@/types/OrderProduct';

type Shipping = {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: OrderProduct[];
};

export default Shipping;
