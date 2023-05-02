export interface IOrder {
  [idx: string]: any;
  id: number;
  orderAt: Date;
  amount: number;
  shipping: IShipping[];
}

export interface IOrderProduct {
  [idx: string]: any;
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: IStock;
}

export interface IStock {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

export interface IShipping {
  [idx: string]: any;
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: IOrderProduct[];
}
