/**
 * Interface for Order List
 */

interface DefaultResponse {
  // Api 호출 시 기본적으로 받아오는 response 구조.
  // 변경된 data format 전송시, formatType 제거
  success: boolean;
  responseCode: number | string;
  message: string;
  formatType?: 'old' | 'new';
  res: Order | null;
}

interface Order {
  // 새로운 order 포멧을 받을 경우, products 제거
  id: number;
  userId: string;
  orderAt: string;
  amount: number;
  products?: Product[];
  shipping: Shipping[] | Shipping;
}

interface Stock {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: Stock;
}

interface Shipping {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  orderUserName: string;
  orderUserMobile: string;
  message: string;
  products?: Product[]; // 기존 order data가 변경되는 시점에서는 products의 옵셔널을 허용하지 않도록 변경.
}
