import type { FC } from "react";
import { Order } from "../Models";
import OrderProductLists from "./OrderProductLists";
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
      <OrderProductLists productLists={order.products} />
      <p>----------------------------</p>
      <ShippingInfo shippingInfo={order.shipping} />
    </div>
  );
};

export default OrderInfo;
