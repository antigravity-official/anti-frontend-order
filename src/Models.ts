export interface OrderResponseData {
  id: number;
  orderAt: string;
  amount: number;
  products: OrderProduct[];
  shipping: Shipping;
}

export interface Order extends OrderInfo {
  shippings: (Shipping & {
    products: OrderProduct[];
  })[];
}

export interface OrderInfo {
  id: number;
  orderAt: Date;
  amount: number;
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
