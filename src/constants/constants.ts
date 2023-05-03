import { IIndexSignatureString } from "../types/Models";

export const ORDER_PRODUCT: IIndexSignatureString = {
  name: "상품명",
  price: "가격",
};

export const ORDER: IIndexSignatureString = {
  orderAt: "주문일자",
  amount: "총 결제금액",
};

export const SHIPPING: IIndexSignatureString = {
  trackingNumber: "송장번호",
  shippingFee: "배송료",
  post: "우편번호",
  address: "주소",
  message: "메시지",
};
