export interface Stock {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: Stock;
}
