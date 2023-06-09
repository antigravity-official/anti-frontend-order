export interface OrderModel {
  id: number;
  orderAt: Date;
  amount: number;
  products: OrderProductModel[];
  shipping: ShippingModel;
}

export interface OrderProductModel {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: StockModel;
}

export interface StockModel {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

export interface ShippingModel {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
}
