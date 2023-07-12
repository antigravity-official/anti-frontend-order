import type { FC } from "react";
import { Order } from "../Models";
import ShippingInfo from "./ShippingInfo";
import OrderPaymentInfo from "./OrderPaymentInfo";

interface Props {
  order: Order;
}

const OrderInfo: FC<Props> = ({ order }) => {
  return (
    <div>
      <OrderPaymentInfo paymentInfo={order.paymentInfo} />
      <p>----------------------------</p>
      <ShippingInfo shippingInfo={order.shipping} />
    </div>
  );
};

export default OrderInfo;
