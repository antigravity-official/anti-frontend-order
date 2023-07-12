import type { FC } from "react";
import { Order } from "../Models";
import OrderProductLists from "./OrderProductLists";
import ShippingInfo from "./ShippingInfo";

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
      <OrderProductLists order={order} />
      <p>----------------------------</p>
      <ShippingInfo shippingInfo={order.shipping} />
    </div>
  );
};

export default OrderInfo;
