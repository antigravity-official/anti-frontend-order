export interface Order {
  paymentInfo: PaymentInfo;
  products: OrderProduct[];
  shipping: Shipping;
}

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: Stock;
}

export interface Stock {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

export interface Shipping {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
}

export interface PaymentInfo {
  id: number;
  orderAt: string;
  amount: number;
}
