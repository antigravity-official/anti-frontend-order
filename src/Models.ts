export interface Order {
  id: number; /* 주문 고유 id */
  orderAt: Date; /* 주문 시각 */
  amount: number; /* 총 주문 금액 */
  products: OrderProduct[]; /* 주문 상품 목록 */
  shipping: Shipping; /* 배송지 정보 */
}

export interface OrderProduct {
  id: number /* 주문 상품 고유 id */;
  name: string /* 주문 상품 이름 */;
  price: number /* 주문 상품 가격 */;
  imageUrls: string[];
  stock: Stock /* 주문 상품 정보 */;
}

export interface Stock { /* 상품 정보 */
  color: string /* 색상 */
  band: string /* 가슴 둘레 사이즈 */
  cup: string /* 컵 사이즈 */
  quantity: number /* 수량 */
}

export interface Shipping {
  id: number,/* 배송 정보 고유 id*/
  trackingNumber: string, /* 송장 번호 */
  shippingFee: number, /* 배송료 */
  address: string, /* 배송지 주소 */
  post: string, /* 우편번호 */
  message: string /* 배송 메세지 */
}
