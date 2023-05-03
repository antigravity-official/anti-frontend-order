export interface IOrder extends IIndexSignatureAny {
  [idx: string]: any;
  id: number;
  orderAt: Date;
  amount: number;
  shipping: IShipping[];
}

export interface IOrderProduct extends IIndexSignatureAny {
  [idx: string]: any;
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: IStock;
}

export interface IStock extends IIndexSignatureAny {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

export interface IShipping extends IIndexSignatureAny {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: IOrderProduct[];
}

export interface IIndexSignatureAny {
  [idx: string]: any;
}

export interface IIndexSignatureString {
  [idx: string]: string;
}
