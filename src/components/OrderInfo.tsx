import type { FC } from "react";
import { Order } from "../Models";
import OrderProductInfo from "./OrderProductInfo";

interface Props {
  order: Order;
}

const OrderInfo: FC<Props> = ({ order }) => {
  return (
    <div>
      <p>주문번 : {order.id}</p>
      <p>주문일 : {order.orderAt.toString()}</p>
      <p>총 결제금액 : {order.amount}</p>
      <p>----------------------------</p>
      <p>[상품목록]</p>
      <OrderProductInfo order={order} />
      <p>----------------------------</p>
      <p>[배송정보]</p>
      <p>송장번호: {order.shipping.trackingNumber}</p>
      <p>배송료: {order.shipping.shippingFee}원</p>
      <p>
        주소: [{order.shipping.post}] {order.shipping.address}
      </p>
      <p>메시지: {order.shipping.message}</p>
    </div>
  );
};

export default OrderInfo;
