export interface OrderModel {
  shipping: any;
  id: number;
  orderAt: Date;
  amount: number;
  shippingList: ShippingModel[];
}

export interface ShippingModel {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: OrderProductModel[];
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
