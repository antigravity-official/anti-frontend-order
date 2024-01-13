/**
 * Interface for Order List
 */

interface DefaultResponse {
  // Api 호출 시 기본적으로 받아오는 response 구조.
  // 변경된 data format 전송시, formatType instance 제거
  success: boolean;
  responseCode: number | string;
  message: string;
  formatType?: 'old' | 'new';
  data: OldOrder | NewOrder | null;
}

interface OldOrder {
  // 기존 order data를 받아오는 경우에만 사용되는 인터페이스.
  id: number;
  userId: string;
  orderAt: string | Date;
  amount: number;
  products: Product[];
  shipping: Shipping;
}

interface NewOrder {
  id: number;
  userId: string;
  orderAt: string | Date;
  amount: number;
  shippings: Shipping[];
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
  products?: Product[]; // 기존 order data가 변경되는 시점에서는 products instance의 옵셔널을 허용하지 않도록 변경.
}
